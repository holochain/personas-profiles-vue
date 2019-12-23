import { storyFactory } from '../.storybook/util/helpers'
// import { text, boolean } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import ImageManager from '../src/components/ImageManager.vue'
// import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'
// import personaNewNotes from './notes/persona-card-new.md'
export default {
  title: 'Image Manager'
}

const storyComponent = storyFactory({ ImageManager })

export const imageManager = () => {
  const story = storyComponent({
    template: `<image-manager />`
  })
  return story
}
imageManager.story = {
  name: 'List'
}
