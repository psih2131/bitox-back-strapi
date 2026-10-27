'use strict';

// Разовое обновление текста под H1 (service_hero_sec.subtitle) на 49 страницах инвойсов.
// Меняет только поле subtitle — и в черновике, и в опубликованной версии. Ничего не публикует.
// После запуска файл и строки в src/index.js нужно удалить.

const UID = 'api::invoice.invoice';
const HERO_UID = 'shared.service-hero';

const END_EU = ' без риска блокировок и санкций. Расчеты в евро (EUR) и других валютах, комиссия от 0,5%, проведение платежа по инвойсу от 2 часов, закрывающие бухгалтерские документы: счет, счет-фактура, УПД.';
const eu = (where) => `Безопасная оплата товаров, оборудования и услуг контрагентам ${where}${END_EU}`;

const popular = (to, currencies) =>
  `Оплата инвойсов поставщикам, контрагентам и партнерам ${to} в ${currencies} и других валютах. Быстрое согласование, комиссия от 0,5%, проведение платежа по инвойсу от 2 часов, закрывающие бухгалтерские документы: счет, счет-фактура, УПД.`;

const general = (to, currency) =>
  `Быстрая и безопасная оплата инвойсов контрагентам, платежи поставщикам ${to} в ${currency} и любых других валютах. Комиссия от 0,5%, проведение платежа — от 2 часов, закрывающие бухгалтерские документы: счет, счет-фактура, УПД.`;

const USD_EUR = 'долларах (USD), евро (EUR)';
const USD = 'долларах США (USD)';

const TEXTS = {
  // А. Евро
  austria: eu('в Австрии'),
  belgium: eu('в Бельгии'),
  bulgaria: eu('в Болгарии'),
  hungary: eu('в Венгрии'),
  germany: eu('в Германии'),
  greece: eu('в Греции'),
  ireland: eu('в Ирландии'),
  spain: eu('в Испании'),
  italy: eu('в Италии'),
  cyprus: eu('на Кипре'),
  latvia: eu('в Латвии'),
  lithuania: eu('в Литве'),
  netherlands: eu('в Нидерландах'),
  poland: eu('в Польше'),
  portugal: eu('в Португалии'),
  romania: eu('в Румынии'),
  slovakia: eu('в Словакии'),
  slovenia: eu('в Словении'),
  finland: eu('в Финляндии'),
  france: eu('во Франции'),
  croatia: eu('в Хорватии'),
  czech: eu('в Чехии'),
  estonia: eu('в Эстонии'),
  montenegro: eu('в Черногории'),
  monaco: eu('в Монако'),

  // Б. Популярные направления
  china: popular('в Китай', 'юанях (CNY), долларах (USD)'),
  turkey: popular('в Турцию', 'лирах (TRY), долларах (USD)'),
  uae: popular('в ОАЭ', USD_EUR),
  india: popular('в Индию', USD_EUR),
  kazakhstan: popular('в Казахстан', USD_EUR),
  kyrgyzstan: popular('в Кыргызстан', USD_EUR),
  uzbekistan: popular('в Узбекистан', USD_EUR),
  armenia: popular('в Армению', USD_EUR),
  azerbaijan: popular('в Азербайджан', USD_EUR),
  georgia: popular('в Грузию', USD_EUR),
  thailand: popular('в Таиланд', USD_EUR),
  indonesia: popular('в Индонезию', USD_EUR),
  malaysia: popular('в Малайзию', USD_EUR),
  singapore: popular('в Сингапур', USD_EUR),

  // В. Общий
  usa: general('в США', USD),
  'great-britain': general('в Великобританию', 'фунтах стерлингов (GBP)'),
  canada: general('в Канаду', 'канадских долларах (CAD)'),
  switzerland: general('в Швейцарию', USD),
  japan: general('в Японию', USD),
  korea: general('в Южную Корею', USD),
  serbia: general('в Сербию', USD),
  moldova: general('в Молдову', USD),
  maldives: general('на Мальдивы', USD),

  // Г. Россия
  russia: 'Быстрая и безопасная оплата инвойсов контрагентам, платежи поставщикам в Россию в USD, EUR и любых других валютах. Комиссия от 0,5%, проведение платежа — от 2 часов, закрывающие бухгалтерские документы: счет, счет-фактура, УПД.',
};

module.exports = async function updateInvoiceHeroSubtitles(strapi) {
  const entries = await strapi.db.query(UID).findMany({
    select: ['id', 'slug', 'publishedAt'],
    populate: { service_hero_sec: { select: ['id', 'subtitle'] } },
  });

  let updated = 0;
  const missing = new Set(Object.keys(TEXTS));

  for (const entry of entries) {
    const text = TEXTS[entry.slug];
    if (!text) continue;
    missing.delete(entry.slug);

    const hero = entry.service_hero_sec;
    if (!hero?.id) {
      strapi.log.warn(`[invoice-subtitles] ${entry.slug}: нет блока service_hero_sec, пропущено`);
      continue;
    }
    if (hero.subtitle === text) continue;

    await strapi.db.query(HERO_UID).update({ where: { id: hero.id }, data: { subtitle: text } });
    updated++;
  }

  strapi.log.info(`[invoice-subtitles] обновлено записей: ${updated} (страниц в списке: ${Object.keys(TEXTS).length})`);
  if (missing.size) strapi.log.warn(`[invoice-subtitles] не найдены страницы: ${[...missing].join(', ')}`);
};
