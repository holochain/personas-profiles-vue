import { storyFactory } from '../.storybook/util/helpers'
import { array } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import ImageManager from '../src/components/ImageManager.vue'
// import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'
// import personaNewNotes from './notes/persona-card-new.md'
import { items } from '../test-data/image-manager.js'

export default {
  title: 'Image Manager'
}

const storyComponent = storyFactory({ ImageManager })

export const imageManager = () => {
  const story = storyComponent({
    props: {
      items: {
        default: array('Photo Folders', items)
      }
    },
    template: `<image-manager :items="items" />`
  })
  return story
}
imageManager.story = {
  name: 'List'
}
