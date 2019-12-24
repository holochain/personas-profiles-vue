import { storyFactory } from '../.storybook/util/helpers'
import { array } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import ProfileManager from '../src/components/ProfileManager.vue'
// import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'
// import personaNewNotes from './notes/persona-card-new.md'
import { items } from '../test-data/music-manager.js'
export default {
  title: 'Profile Manager'
}

const storyComponent = storyFactory({ ProfileManager })

export const profileManager = () => {
  const story = storyComponent({
    props: {
      items: {
        default: array('Music Folders', items)
      }
    },
    template: `<profile-manager />`
  })
  return story
}
profileManager.story = {
  name: 'List'
}
