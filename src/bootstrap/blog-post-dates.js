'use strict';

// Дата первой публикации статьи блога.
// Strapi 5 перезаписывает publishedAt при каждой повторной публикации,
// поэтому первую дату храним в отдельном поле first_published_at.
// Поле заполняется само один раз и дальше не меняется (вручную в админке поправить можно).

const UID = 'api::blog-post.blog-post';
const TABLE = 'blog_posts';

async function ensureFirstPublished(strapi, documentId) {
  const knex = strapi.db.connection;
  const rows = await knex(TABLE)
    .where({ document_id: documentId })
    .select('id', 'published_at', 'first_published_at');

  const published = rows.find((row) => row.published_at);
  if (!published) return;

  const value = rows.map((row) => row.first_published_at).find(Boolean) || published.published_at;
  const ids = rows.filter((row) => !row.first_published_at).map((row) => row.id);

  // Пишем напрямую в таблицу, чтобы не сдвигать updatedAt статьи
  if (ids.length) {
    await knex(TABLE).whereIn('id', ids).update({ first_published_at: value });
  }
}

function registerBlogPostDates(strapi) {
  strapi.documents.use(async (ctx, next) => {
    const result = await next();

    if (ctx.uid === UID && ['publish', 'create', 'update'].includes(ctx.action)) {
      const documentId =
        ctx.params?.documentId || result?.documentId || result?.entries?.[0]?.documentId;

      if (documentId) {
        try {
          await ensureFirstPublished(strapi, documentId);
        } catch (error) {
          strapi.log.warn(`[blog-post-dates] ${documentId}: ${error.message}`);
        }
      }
    }

    return result;
  });
}

// Для уже опубликованных статей: берём текущую дату публикации
async function backfillBlogPostDates(strapi) {
  const knex = strapi.db.connection;
  const rows = await knex(TABLE)
    .whereNotNull('published_at')
    .whereNull('first_published_at')
    .distinct('document_id');

  for (const { document_id: documentId } of rows) {
    await ensureFirstPublished(strapi, documentId);
  }

  if (rows.length) {
    strapi.log.info(`[blog-post-dates] filled first_published_at for ${rows.length} posts`);
  }
}

module.exports = { registerBlogPostDates, backfillBlogPostDates };
