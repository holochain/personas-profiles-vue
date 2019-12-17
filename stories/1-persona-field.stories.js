import { storyFactory } from '../.storybook/util/helpers'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { specs } from 'storybook-addon-specifications';
import PersonaField from '../src/components/PersonaField/PersonaField.vue';
import { personaFieldTests } from '../tests/unit/PersonaField.spec';

export default {
  title: 'Persona Field',
};

const storyComponent = storyFactory({ PersonaField });

export const newField = () => {
  const story = storyComponent({
    props: {
      actions: {
        default: boolean('Actions', false)
      },
      cardText: {
        default: text('Card text', 'Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Donec sodales sagittis magna. Vestibulum dapibus nunc ac augue. Donec sodales sagittis magna. Duis vel nibh at velit scelerisque suscipit.')
      },
      divider: {
        default: boolean('Divider', false)
      },
      text: {
        default: boolean('Text', true)
      },
      title: {
        default: boolean('Show title', true)
      },
      titleText: {
        default: text('Title text', 'Card title')
      }
    },
    template: `<persona-field :curatedFieldNames="[{ fieldName: 'Full Name', fieldType: 'singleLineText' },{ fieldName: 'Avatar', fieldType: 'image' }]"></persona-field>`
  });
  specs(() => personaFieldTests);
  return story
}
newField.story = {
  name: 'New Field'
}
