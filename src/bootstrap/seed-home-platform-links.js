'use strict';

/**
 * Одноразовое заполнение карточек блока «Бизнесу / Частным лицам» на главной
 * (Home → home_platform_sec → col_1_links / col_2_links) текущими страницами
 * из Business_pages и Individuals_pages.
 *
 * Запускается при старте Strapi, но срабатывает только один раз:
 * после заполнения ставится флаг, и дальше списки правятся только из админки.
 */

const FLAG = { type: 'core', name: 'bitox', key: 'home_platform_links_seeded_v1' };
const HOME_UID = 'api::home.home';

function toLinks(pages, basePath) {
  return pages
    .filter((page) => page?.slug)
    .map((page) => ({
      title: page.title || '',
      text: page.subtitle || '',
      link: `${basePath}/${page.slug}`,
    }));
}

function mediaId(media) {
  return media?.id ?? null;
}

async function seedHomePlatformLinks(strapi) {
  const store = strapi.store({ type: FLAG.type, name: FLAG.name });
  if (await store.get({ key: FLAG.key })) return;

  const homeDocs = strapi.documents(HOME_UID);
  const populate = { home_platform_sec: { populate: '*' } };

  const draft = await homeDocs.findFirst({ status: 'draft', populate });
  const published = await homeDocs.findFirst({ status: 'published', populate });
  const home = draft || published;

  if (!home) {
    strapi.log.info('[seed-home-platform-links] Home not found, skip');
    return;
  }

  const section = home.home_platform_sec;
  if (!section) {
    strapi.log.info('[seed-home-platform-links] home_platform_sec is empty, skip');
    await store.set({ key: FLAG.key, value: true });
    return;
  }

  if (section.col_1_links?.length || section.col_2_links?.length) {
    await store.set({ key: FLAG.key, value: true });
    return;
  }

  const [businessPages, individualsPages] = await Promise.all([
    strapi.documents('api::business-page.business-page').findMany({
      status: 'published',
      fields: ['title', 'slug', 'subtitle'],
      limit: 100,
    }),
    strapi.documents('api::individuals-page.individuals-page').findMany({
      status: 'published',
      fields: ['title', 'slug', 'subtitle'],
      limit: 100,
    }),
  ]);

  const { id, col_1_img, col_2_img, col_1_links, col_2_links, ...scalarFields } = section;

  await homeDocs.update({
    documentId: home.documentId,
    data: {
      home_platform_sec: {
        ...scalarFields,
        col_1_img: mediaId(col_1_img),
        col_2_img: mediaId(col_2_img),
        col_1_links: toLinks(businessPages, '/business'),
        col_2_links: toLinks(individualsPages, '/individuals'),
      },
    },
  });

  // Если главная была опубликована — публикуем, чтобы карточки сразу были на сайте
  if (published) {
    await homeDocs.publish({ documentId: home.documentId });
  }

  await store.set({ key: FLAG.key, value: true });
  strapi.log.info(
    `[seed-home-platform-links] filled: business ${businessPages.length}, individuals ${individualsPages.length}`,
  );
}

module.exports = async function runSeedHomePlatformLinks(strapi) {
  try {
    await seedHomePlatformLinks(strapi);
  } catch (error) {
    // Ошибка заполнения не должна мешать запуску Strapi
    strapi.log.error(`[seed-home-platform-links] failed: ${error.message}`);
  }
};
