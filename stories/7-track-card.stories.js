import { storyFactory } from '../.storybook/util/helpers'
import { object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import TrackCard from '../src/components/TrackCard.vue'
// import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'
// import personaNewNotes from './notes/persona-card-new.md'
import { track } from '../test-data/track-surfer.js'
export default {
  title: 'Track Card'
}

const storyComponent = storyFactory({ TrackCard })

export const trackCard = () => {
  const story = storyComponent({
    props: {
      track: {
        default: object('Track', track)
      }
    },
    template: `<track-card :track="track" :play="false"/>`
  })
  console.log(track)
  return story
}
trackCard.story = {
  name: 'Artist View'
}

export const anonTrackCard = () => {
  const story = storyComponent({
    props: {
      track: {
        default: object('Track', track)
      }
    },
    template: `<track-card :track="track" :play="false"/>`
  })
  console.log(track)
  return story
}
anonTrackCard.story = {
  name: 'Anonymous Listener View'
}
