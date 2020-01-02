import { storyFactory } from '../.storybook/util/helpers'
import { object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import TrackSurfer from '../src/components/TrackSurfer.vue'
// import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'
// import personaNewNotes from './notes/persona-card-new.md'
import { track } from '../test-data/track-surfer.js'
export default {
  title: 'Track Surfer'
}

const storyComponent = storyFactory({ TrackSurfer })

export const trackSurfer = () => {
  const story = storyComponent({
    props: {
      track: {
        default: object('Track', track)
      }
    },
    template: `<track-surfer :track="track" />`
  })
  return story
}
trackSurfer.story = {
  name: 'Load Peaks'
}
