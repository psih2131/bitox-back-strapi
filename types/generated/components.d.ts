import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutAboutSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_about_secs';
  info: {
    displayName: 'about_about_sec';
  };
  attributes: {
    description: Schema.Attribute.Text;
    section_image: Schema.Attribute.Media<'images' | 'files'>;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedAboutGallerySec extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_gallery_secs';
  info: {
    displayName: 'about_gallery_sec';
  };
  attributes: {
    img_gallery: Schema.Attribute.Component<'shared.images-gallery', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedAboutHeroBoxList extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_hero_box_lists';
  info: {
    displayName: 'about_hero_box-list';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedAboutHeroSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_hero_secs';
  info: {
    displayName: 'about_hero_sec';
  };
  attributes: {
    box_list_element: Schema.Attribute.Component<
      'shared.about-hero-box-list',
      true
    >;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_items';
  info: {
    displayName: 'benefit_item';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedBenefitsSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits_secs';
  info: {
    displayName: 'benefits_sec';
  };
  attributes: {
    benefits_items: Schema.Attribute.Component<'shared.benefit-item', true>;
    title_section: Schema.Attribute.String;
  };
}

export interface SharedClientsUse extends Struct.ComponentSchema {
  collectionName: 'components_shared_clients_uses';
  info: {
    displayName: 'clients_use';
  };
  attributes: {
    element: Schema.Attribute.Component<'shared.clients-use-element', true>;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedClientsUseElement extends Struct.ComponentSchema {
  collectionName: 'components_shared_clients_use_elements';
  info: {
    displayName: 'clients_use_element';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactsHeroSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts_hero_secs';
  info: {
    displayName: 'contacts_hero_sec';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    telegram_img: Schema.Attribute.Media<'images' | 'files'>;
    telegram_subtitle: Schema.Attribute.String;
    telegram_subtitle_2: Schema.Attribute.String;
    telegram_title: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SharedContactsSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts_secs';
  info: {
    displayName: 'contacts_sec';
  };
  attributes: {
    email: Schema.Attribute.String;
    location: Schema.Attribute.String;
    map_coordinates_yandex: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    telegram_link: Schema.Attribute.String;
    telegram_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCountriesSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_countries_secs';
  info: {
    displayName: 'countries_sec';
  };
  attributes: {
    button_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0423\u0437\u043D\u0430\u0442\u044C \u043A\u0430\u043A \u0441\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C \u043D\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0435'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443'>;
  };
}

export interface SharedCountriesSecV2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_countries_sec_v2s';
  info: {
    displayName: 'countries_sec_v2';
  };
  attributes: {
    title_section: Schema.Attribute.String;
  };
}

export interface SharedCtrSecV1 extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctr_sec_v1s';
  info: {
    displayName: 'ctr_sec_v1';
  };
  attributes: {
    button_text_white: Schema.Attribute.String;
    button_text_yellow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedEconomyItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_economy_items';
  info: {
    displayName: 'economy-item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedEconomySec extends Struct.ComponentSchema {
  collectionName: 'components_shared_economy_secs';
  info: {
    displayName: 'economy-sec';
  };
  attributes: {
    button_title_white: Schema.Attribute.String;
    button_title_yellow: Schema.Attribute.String;
    economy_list_items: Schema.Attribute.Component<'shared.economy-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedExchangeHeroSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_exchange_hero_secs';
  info: {
    displayName: 'exchange_hero_sec';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    image_section: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedExchangeStapsElement extends Struct.ComponentSchema {
  collectionName: 'components_shared_exchange_staps_elements';
  info: {
    displayName: 'Exchange_staps_element';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedExchangeStapsSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_exchange_staps_secs';
  info: {
    displayName: 'exchange_staps_sec';
  };
  attributes: {
    exchange_media_about_us: Schema.Attribute.Component<
      'shared.media-about-us-sec',
      false
    >;
    staps_elements: Schema.Attribute.Component<
      'shared.exchange-staps-element',
      true
    >;
    subtitle_sec: Schema.Attribute.String;
    title_sec: Schema.Attribute.String;
  };
}

export interface SharedFaqSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_secs';
  info: {
    displayName: 'faq_sec';
  };
  attributes: {
    questions_list: Schema.Attribute.Component<'shared.question', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B'>;
  };
}

export interface SharedFooterContactItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_contact_items';
  info: {
    displayName: 'footer__contact_item';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeaderContacts extends Struct.ComponentSchema {
  collectionName: 'components_shared_header_contacts';
  info: {
    displayName: 'header_contacts';
  };
  attributes: {
    link: Schema.Attribute.String;
    svg_icon: Schema.Attribute.Text;
    text: Schema.Attribute.String;
  };
}

export interface SharedHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_heroes';
  info: {
    displayName: 'home_hero';
  };
  attributes: {
    home_hero_card_items: Schema.Attribute.Component<
      'shared.home-hero-card-item',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    title_short_text_1: Schema.Attribute.String;
    title_short_text_2: Schema.Attribute.String;
    total_amount_today: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'2.000.000 $'>;
  };
}

export interface SharedHomeHeroCardItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_hero_card_items';
  info: {
    displayName: 'home_hero_card_item';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomePlatforms extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_platforms';
  info: {
    displayName: 'home_platforms';
  };
  attributes: {
    col_1_subtitle: Schema.Attribute.String;
    col_1_title: Schema.Attribute.String;
    col_2_subtitle: Schema.Attribute.String;
    col_2_title: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedHowBePartners extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_be_partners';
  info: {
    displayName: 'how_be_partners';
  };
  attributes: {
    card_text_1: Schema.Attribute.Text;
    card_text_2: Schema.Attribute.Text;
    card_text_3: Schema.Attribute.Text;
    card_text_4: Schema.Attribute.Text;
    card_title_1: Schema.Attribute.String;
    card_title_2: Schema.Attribute.String;
    card_title_3: Schema.Attribute.String;
    card_title_4: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedHowStartCluster extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_start_clusters';
  info: {
    displayName: 'How_start_cluster';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.how-start-cluster-item', true>;
    title_cluster: Schema.Attribute.String;
  };
}

export interface SharedHowStartClusterItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_start_cluster_items';
  info: {
    displayName: 'How_start_cluster_item';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedHowStartSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_start_secs';
  info: {
    displayName: 'how_start_sec';
  };
  attributes: {
    button_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0447\u0430\u0442\u044C \u0432\u0437\u0430\u0438\u043C\u043E\u0432\u044B\u0433\u043E\u0434\u043D\u043E\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E'>;
    clusters: Schema.Attribute.Component<'shared.how-start-cluster', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u041A\u0430\u043A \u043D\u0430\u0447\u0430\u0442\u044C?'>;
  };
}

export interface SharedImagesGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_images_galleries';
  info: {
    displayName: 'images_gallery';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedInvoiceElement extends Struct.ComponentSchema {
  collectionName: 'components_shared_invoice_elements';
  info: {
    displayName: 'invoice_element';
  };
  attributes: {
    invoice_element_list_items: Schema.Attribute.Component<
      'shared.invoice-element-list',
      true
    >;
    invoice_image: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedInvoiceElementList extends Struct.ComponentSchema {
  collectionName: 'components_shared_invoice_element_lists';
  info: {
    displayName: 'invoice_element_list';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedInvoiceExampleItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_invoice_example_items';
  info: {
    displayName: 'Invoice_example_item';
  };
  attributes: {
    blog: Schema.Attribute.Relation<'oneToOne', 'api::blog-post.blog-post'>;
    client: Schema.Attribute.String;
    country: Schema.Attribute.String;
    price: Schema.Attribute.String & Schema.Attribute.DefaultTo<'75 000 EUR'>;
    time: Schema.Attribute.String;
  };
}

export interface SharedInvoiceExampleSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_invoice_example_secs';
  info: {
    displayName: 'invoice_example_sec';
  };
  attributes: {
    examples_items: Schema.Attribute.Component<
      'shared.invoice-example-item',
      true
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u043E\u043F\u043B\u0430\u0442 \u0438\u043D\u0432\u043E\u0439\u0441\u043E\u0432'>;
  };
}

export interface SharedInvoiceSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_invoice_secs';
  info: {
    displayName: 'invoice_sec';
  };
  attributes: {
    invoice_elements: Schema.Attribute.Component<
      'shared.invoice-element',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedMediaAboutItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_about_items';
  info: {
    displayName: ' media_about_item';
  };
  attributes: {
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMediaAboutUsSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_about_us_secs';
  info: {
    displayName: ' media_about_us_sec';
  };
  attributes: {
    posts: Schema.Attribute.Component<'shared.media-about-item', true>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u043E bitox'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0421\u041C\u0418 \u043E \u043D\u0430\u0441'>;
  };
}

export interface SharedOffersBannerItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_offers_banner_items';
  info: {
    displayName: 'offers_banner_item';
  };
  attributes: {
    banner_image: Schema.Attribute.Media<'images' | 'files'>;
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedOffersBannerSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_offers_banner_secs';
  info: {
    displayName: 'offers_banner_sec';
  };
  attributes: {
    banners: Schema.Attribute.Component<'shared.offers-banner-item', true>;
    title_sec: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0421\u043F\u0435\u0446\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F'>;
  };
}

export interface SharedOfficeList extends Struct.ComponentSchema {
  collectionName: 'components_shared_office_lists';
  info: {
    displayName: 'office_list';
  };
  attributes: {
    name_office: Schema.Attribute.String;
  };
}

export interface SharedOfficesSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_offices_secs';
  info: {
    displayName: 'offices_sec';
  };
  attributes: {
    offices_list: Schema.Attribute.Component<'shared.office-list', true>;
    offices_map_image: Schema.Attribute.Media<'images' | 'files'>;
    title_sec: Schema.Attribute.String;
  };
}

export interface SharedPartnershipHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_partnership_heroes';
  info: {
    displayName: 'partnership_hero';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedPartnershipOffer extends Struct.ComponentSchema {
  collectionName: 'components_shared_partnership_offers';
  info: {
    displayName: 'partnership_offer';
  };
  attributes: {
    partnership_offer_items: Schema.Attribute.Component<
      'shared.partnership-offer-item',
      true
    >;
    section_title: Schema.Attribute.String;
    subtitle_section: Schema.Attribute.Text;
  };
}

export interface SharedPartnershipOfferItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_partnership_offer_items';
  info: {
    displayName: 'partnership_offer_item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedPostContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_post_contents';
  info: {
    displayName: 'post_content';
    icon: 'apps';
  };
  attributes: {};
}

export interface SharedPostContentElement extends Struct.ComponentSchema {
  collectionName: 'components_shared_post_content_elements';
  info: {
    displayName: 'post_content_element';
    icon: 'apps';
  };
  attributes: {};
}

export interface SharedPostContetBuilder extends Struct.ComponentSchema {
  collectionName: 'components_shared_post_contet_builders';
  info: {
    displayName: 'post_contet_builder';
    icon: 'apps';
  };
  attributes: {
    quote: Schema.Attribute.String;
    text_editor: Schema.Attribute.RichText;
  };
}

export interface SharedPostQuestions extends Struct.ComponentSchema {
  collectionName: 'components_shared_post_questions';
  info: {
    displayName: 'post_questions';
  };
  attributes: {
    post_questions: Schema.Attribute.Component<'shared.question', true>;
    title_section: Schema.Attribute.String;
  };
}

export interface SharedQuestion extends Struct.ComponentSchema {
  collectionName: 'components_shared_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {};
}

export interface SharedQuoteText extends Struct.ComponentSchema {
  collectionName: 'components_shared_quote_texts';
  info: {
    displayName: 'quote_text';
  };
  attributes: {
    id_for_section: Schema.Attribute.String & Schema.Attribute.Required;
    quote_text_element: Schema.Attribute.Text;
    section_title_for_nav_post_menu: Schema.Attribute.String &
      Schema.Attribute.Required;
  };
}

export interface SharedReviewsCategor extends Struct.ComponentSchema {
  collectionName: 'components_shared_reviews_categors';
  info: {
    displayName: 'reviews_categor';
  };
  attributes: {
    category_name: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {};
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.Enumeration<
      ['index,follow', 'noindex,follow', 'index,nofollow', 'noindex,nofollow']
    > &
      Schema.Attribute.DefaultTo<'index,follow'>;
    metaTitle: Schema.Attribute.String;
    ogDescription: Schema.Attribute.Text;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.Enumeration<['website', 'article', 'product']> &
      Schema.Attribute.DefaultTo<'website'>;
    ogUrl: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<'images'>;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    > &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    twitterDescription: Schema.Attribute.Text;
    twitterImage: Schema.Attribute.Media<'images'>;
    twitterTitle: Schema.Attribute.String;
  };
}

export interface SharedSeoSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_secs';
  info: {
    displayName: 'seo_sec';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_heroes';
  info: {
    displayName: 'service_hero';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_items';
  info: {
    displayName: 'social_item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
  };
}

export interface SharedStateItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_state_items';
  info: {
    displayName: 'state_item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatsElement extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats_elements';
  info: {
    displayName: 'stats_element';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedStatsSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats_secs';
  info: {
    displayName: 'stats_sec';
  };
  attributes: {
    stats_element: Schema.Attribute.Component<'shared.stats-element', true>;
  };
}

export interface SharedTeamSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_secs';
  info: {
    displayName: 'team_sec';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedTextEditor extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_editors';
  info: {
    displayName: 'text_editor';
  };
  attributes: {
    id_for_section: Schema.Attribute.String & Schema.Attribute.Required;
    section_title_for_nav_post_menu: Schema.Attribute.String;
    text_editor: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-about-sec': SharedAboutAboutSec;
      'shared.about-gallery-sec': SharedAboutGallerySec;
      'shared.about-hero-box-list': SharedAboutHeroBoxList;
      'shared.about-hero-sec': SharedAboutHeroSec;
      'shared.benefit-item': SharedBenefitItem;
      'shared.benefits-sec': SharedBenefitsSec;
      'shared.clients-use': SharedClientsUse;
      'shared.clients-use-element': SharedClientsUseElement;
      'shared.contacts-hero-sec': SharedContactsHeroSec;
      'shared.contacts-sec': SharedContactsSec;
      'shared.countries-sec': SharedCountriesSec;
      'shared.countries-sec-v2': SharedCountriesSecV2;
      'shared.ctr-sec-v1': SharedCtrSecV1;
      'shared.economy-item': SharedEconomyItem;
      'shared.economy-sec': SharedEconomySec;
      'shared.exchange-hero-sec': SharedExchangeHeroSec;
      'shared.exchange-staps-element': SharedExchangeStapsElement;
      'shared.exchange-staps-sec': SharedExchangeStapsSec;
      'shared.faq-sec': SharedFaqSec;
      'shared.footer-contact-item': SharedFooterContactItem;
      'shared.header-contacts': SharedHeaderContacts;
      'shared.home-hero': SharedHomeHero;
      'shared.home-hero-card-item': SharedHomeHeroCardItem;
      'shared.home-platforms': SharedHomePlatforms;
      'shared.how-be-partners': SharedHowBePartners;
      'shared.how-start-cluster': SharedHowStartCluster;
      'shared.how-start-cluster-item': SharedHowStartClusterItem;
      'shared.how-start-sec': SharedHowStartSec;
      'shared.images-gallery': SharedImagesGallery;
      'shared.invoice-element': SharedInvoiceElement;
      'shared.invoice-element-list': SharedInvoiceElementList;
      'shared.invoice-example-item': SharedInvoiceExampleItem;
      'shared.invoice-example-sec': SharedInvoiceExampleSec;
      'shared.invoice-sec': SharedInvoiceSec;
      'shared.media': SharedMedia;
      'shared.media-about-item': SharedMediaAboutItem;
      'shared.media-about-us-sec': SharedMediaAboutUsSec;
      'shared.offers-banner-item': SharedOffersBannerItem;
      'shared.offers-banner-sec': SharedOffersBannerSec;
      'shared.office-list': SharedOfficeList;
      'shared.offices-sec': SharedOfficesSec;
      'shared.partnership-hero': SharedPartnershipHero;
      'shared.partnership-offer': SharedPartnershipOffer;
      'shared.partnership-offer-item': SharedPartnershipOfferItem;
      'shared.post-content': SharedPostContent;
      'shared.post-content-element': SharedPostContentElement;
      'shared.post-contet-builder': SharedPostContetBuilder;
      'shared.post-questions': SharedPostQuestions;
      'shared.question': SharedQuestion;
      'shared.quote': SharedQuote;
      'shared.quote-text': SharedQuoteText;
      'shared.reviews-categor': SharedReviewsCategor;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.seo-sec': SharedSeoSec;
      'shared.service-hero': SharedServiceHero;
      'shared.slider': SharedSlider;
      'shared.social-item': SharedSocialItem;
      'shared.state-item': SharedStateItem;
      'shared.stats-element': SharedStatsElement;
      'shared.stats-sec': SharedStatsSec;
      'shared.team-sec': SharedTeamSec;
      'shared.text-editor': SharedTextEditor;
    }
  }
}
