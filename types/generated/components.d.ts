import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
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
    id_for_section: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    quote_text_element: Schema.Attribute.Text;
    section_title_for_nav_post_menu: Schema.Attribute.String &
      Schema.Attribute.Required;
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
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
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

export interface SharedTextEditor extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_editors';
  info: {
    displayName: 'text_editor';
  };
  attributes: {
    id_for_section: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    section_title_for_nav_post_menu: Schema.Attribute.String;
    text_editor: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.post-content': SharedPostContent;
      'shared.post-content-element': SharedPostContentElement;
      'shared.post-contet-builder': SharedPostContetBuilder;
      'shared.post-questions': SharedPostQuestions;
      'shared.question': SharedQuestion;
      'shared.quote': SharedQuote;
      'shared.quote-text': SharedQuoteText;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text-editor': SharedTextEditor;
    }
  }
}
