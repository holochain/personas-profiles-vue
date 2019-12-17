// Utilities
import { storyFactory } from '../.storybook/util/helpers'
import { text, boolean } from '@storybook/addon-knobs'


export default { title: 'BaseCard' }

const story = storyFactory({});

export const asDefault = () => story({
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
  template: `
    <v-card>
      <v-card-title v-if="title">{{ titleText }}</v-card-title>

      <v-card-text v-if="text">{{ cardText }}</v-card-text>

      <v-divider v-if="divider"></v-divider>

      <v-card-actions>
        <v-btn text>Cancel</v-btn>

        <v-spacer></v-spacer>

        <v-btn depressed>Accept</v-btn>
      </v-card-actions>
    </v-card>
  `
})
