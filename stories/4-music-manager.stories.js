import { storyFactory } from '../.storybook/util/helpers'
import { array } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import MusicManager from '../src/components/MusicManager.vue'
// import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'
// import personaNewNotes from './notes/persona-card-new.md'
import { items } from '../test-data/music-manager.js'
export default {
  title: 'Music Manager'
}

const storyComponent = storyFactory({ MusicManager })

export const imageManager = () => {
  const story = storyComponent({
    props: {
      items: {
        default: array('Music Folders', items)
      }
    },
    template: `<music-manager :items="items"/>`
  })
  return story
}
imageManager.story = {
  name: 'List'
}
