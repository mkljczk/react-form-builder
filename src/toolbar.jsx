/**
  * <Toolbar />
  */

import React from 'react';
import ToolbarItem from './toolbar-draggable-item';
import ID from './UUID';
import store from './stores/store';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    const items = (this.props.items) ? this.props.items : this._defaultItems();
    this.state = {
      items,
    };
    store.subscribe(state => this.setState({ store: state }));
    this.create = this.create.bind(this);
  }

  static _defaultItemOptions(element) {
    switch (element) {
      case 'Dropdown':
        return [
          { value: 'place_holder_option_1', text: 'Opcja placeholder 1', key: `dropdown_option_${ID.uuid()}` },
          { value: 'place_holder_option_2', text: 'Opcja placeholder 2', key: `dropdown_option_${ID.uuid()}` },
          { value: 'place_holder_option_3', text: 'Opcja placeholder 3', key: `dropdown_option_${ID.uuid()}` },
        ];
      case 'Tags':
        return [
          { value: 'place_holder_tag_1', text: 'Tag placeholder 1', key: `tags_option_${ID.uuid()}` },
          { value: 'place_holder_tag_2', text: 'Tag placeholder 2', key: `tags_option_${ID.uuid()}` },
          { value: 'place_holder_tag_3', text: 'Tag placeholder 3', key: `tags_option_${ID.uuid()}` },
        ];
      case 'Checkboxes':
        return [
          { value: 'place_holder_option_1', text: 'Opcja placeholder 1', key: `checkboxes_option_${ID.uuid()}` },
          { value: 'place_holder_option_2', text: 'Opcja placeholder 2', key: `checkboxes_option_${ID.uuid()}` },
          { value: 'place_holder_option_3', text: 'Opcja placeholder 3', key: `checkboxes_option_${ID.uuid()}` },
        ];
      case 'RadioButtons':
        return [
          { value: 'place_holder_option_1', text: 'Opcja placeholder 1', key: `radiobuttons_option_${ID.uuid()}` },
          { value: 'place_holder_option_2', text: 'Opcja placeholder 2', key: `radiobuttons_option_${ID.uuid()}` },
          { value: 'place_holder_option_3', text: 'Opcja placeholder 3', key: `radiobuttons_option_${ID.uuid()}` },
        ];
      default:
        return [];
    }
  }

  _defaultItems() {
    return [
      {
        key: 'Header',
        name: 'Tekst nagłówka',
        icon: 'fas fa-heading',
        static: true,
        content: 'Przykładowy tekst',
      },
      {
        key: 'Label',
        name: 'Podpis',
        static: true,
        icon: 'fas fa-font',
        content: 'Przykładowy tekst',
      },
      {
        key: 'Paragraph',
        name: 'Akapit',
        static: true,
        icon: 'fas fa-paragraph',
        content: 'Przykładowy tekst',
      },
      {
        key: 'LineBreak',
        name: 'Podział wiersza',
        static: true,
        icon: 'fas fa-arrows-alt-h',
      },
      {
        key: 'Dropdown',
        canHaveAnswer: true,
        name: 'Rozwijana lista',
        icon: 'far fa-caret-square-down',
        label: 'Przykładowy podpis',
        field_name: 'dropdown_',
        options: [],
      },
      {
        key: 'Tags',
        canHaveAnswer: true,
        name: 'Tagi',
        icon: 'fas fa-tags',
        label: 'Przykładowy podpis',
        field_name: 'tags_',
        options: [],
      },
      {
        key: 'Checkboxes',
        canHaveAnswer: true,
        name: 'Pola wyboru',
        icon: 'far fa-check-square',
        label: 'Przykładowy podpis',
        field_name: 'checkboxes_',
        options: [],
      },
      {
        key: 'RadioButtons',
        canHaveAnswer: true,
        name: 'Wielokrotny wybór',
        icon: 'far fa-dot-circle',
        label: 'Przykładowy podpis',
        field_name: 'radiobuttons_',
        options: [],
      },
      {
        key: 'TextInput',
        canHaveAnswer: true,
        name: 'Pole tekstowe',
        label: 'Placeholder Label',
        icon: 'fas fa-font',
        field_name: 'text_input_',
      },
      {
        key: 'NumberInput',
        canHaveAnswer: true,
        name: 'Pole liczbowe',
        label: 'Przykładowy podpis',
        icon: 'fas fa-plus',
        field_name: 'number_input_',
      },
      {
        key: 'TextArea',
        canHaveAnswer: true,
        name: 'Pole wielowierszowe',
        label: 'Przykładowy podpis',
        icon: 'fas fa-text-height',
        field_name: 'text_area_',
      },
      // {
      //   key: 'Image',
      //   name: 'Obraz',
      //   label: '',
      //   icon: 'far fa-image',
      //   field_name: 'image_',
      //   src: '',
      // },
      {
        key: 'Rating',
        canHaveAnswer: true,
        name: 'Ocena',
        label: 'Przykładowy podpis',
        icon: 'fas fa-star',
        field_name: 'rating_',
      },
      {
        key: 'DatePicker',
        canDefaultToday: true,
        canReadOnly: true,
        dateFormat: 'MM/dd/yyyy',
        timeFormat: 'hh:mm aa',
        showTimeSelect: false,
        showTimeSelectOnly: false,
        name: 'Data',
        icon: 'far fa-calendar-alt',
        label: 'Przykładowy podpis',
        field_name: 'date_picker_',
      },
      // {
      //   key: 'Signature',
      //   canReadOnly: true,
      //   name: 'Podpis',
      //   icon: 'fas fa-pen-square',
      //   label: 'Podpis',
      //   field_name: 'signature_',
      // },
      {
        key: 'HyperLink',
        name: 'Strona internetowa',
        icon: 'fas fa-link',
        static: true,
        content: 'Przykładowy odnośnik do strony',
        href: 'http://www.example.com',
      },
      // {
      //   key: 'Download',
      //   name: 'File Attachment',
      //   icon: 'fas fa-file',
      //   static: true,
      //   content: 'Placeholder file name ...',
      //   field_name: 'download_',
      //   file_path: '',
      //   _href: '',
      // },
      {
        key: 'Range',
        name: 'Zakres',
        icon: 'fas fa-sliders-h',
        label: 'Przykładowy podpis',
        field_name: 'range_',
        step: 1,
        default_value: 3,
        min_value: 1,
        max_value: 5,
        min_label: 'Prosty',
        max_label: 'Trudny',
      },
      // {
      //   key: 'Camera',
      //   name: 'Kamera',
      //   icon: 'fas fa-camera',
      //   label: 'Przykładowy podpis',
      //   field_name: 'camera_',
      // },
    ];
  }

  create(item) {
    const elementOptions = {
      id: ID.uuid(),
      element: item.element || item.key,
      text: item.name,
      static: item.static,
      required: false,
      showDescription: item.showDescription,
    };

    if (this.props.showDescription === true && !item.static) {
      elementOptions.showDescription = true;
    }

    if (item.static) {
      elementOptions.bold = false;
      elementOptions.italic = false;
    }

    if (item.canHaveAnswer) { elementOptions.canHaveAnswer = item.canHaveAnswer; }

    if (item.canReadOnly) { elementOptions.readOnly = false; }

    if (item.canDefaultToday) { elementOptions.defaultToday = false; }

    if (item.content) { elementOptions.content = item.content; }

    if (item.href) { elementOptions.href = item.href; }

    elementOptions.canHavePageBreakBefore = item.canHavePageBreakBefore !== false;
    elementOptions.canHaveAlternateForm = item.canHaveAlternateForm !== false;
    elementOptions.canHaveDisplayHorizontal = item.canHaveDisplayHorizontal !== false;
    if (elementOptions.canHaveDisplayHorizontal) {
      elementOptions.inline = item.inline;
    }
    elementOptions.canHaveOptionCorrect = item.canHaveOptionCorrect !== false;
    elementOptions.canHaveOptionValue = item.canHaveOptionValue !== false;
    elementOptions.canPopulateFromApi = item.canPopulateFromApi !== false;

    if (item.key === 'Image') {
      elementOptions.src = item.src;
    }

    if (item.key === 'DatePicker') {
      elementOptions.dateFormat = item.dateFormat;
      elementOptions.timeFormat = item.timeFormat;
      elementOptions.showTimeSelect = item.showTimeSelect;
      elementOptions.showTimeSelectOnly = item.showTimeSelectOnly;
    }

    if (item.key === 'Download') {
      elementOptions._href = item._href;
      elementOptions.file_path = item.file_path;
    }

    if (item.key === 'Range') {
      elementOptions.step = item.step;
      elementOptions.default_value = item.default_value;
      elementOptions.min_value = item.min_value;
      elementOptions.max_value = item.max_value;
      elementOptions.min_label = item.min_label;
      elementOptions.max_label = item.max_label;
    }

    if (item.defaultValue) { elementOptions.defaultValue = item.defaultValue; }

    if (item.field_name) { elementOptions.field_name = item.field_name + ID.uuid(); }

    if (item.label) { elementOptions.label = item.label; }

    if (item.options) {
      if (item.options.length > 0) {
        elementOptions.options = item.options;
      } else {
        elementOptions.options = Toolbar._defaultItemOptions(elementOptions.element);
      }
    }

    return elementOptions;
  }

  _onClick(item) {
    // ElementActions.createElement(this.create(item));
    store.dispatch('create', this.create(item));
  }

  render() {
    return (
      <div className="react-form-builder-toolbar float-right">
        <h4>Narzędzia</h4>
        <ul>
          {
            this.state.items.map((item) => (<ToolbarItem data={item} key={item.key} onClick={this._onClick.bind(this, item)} onCreate={this.create} />))
          }
        </ul>
      </div>
    );
  }
}
