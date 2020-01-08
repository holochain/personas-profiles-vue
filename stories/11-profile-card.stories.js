import { storyFactory } from '../.storybook/util/helpers'
import { object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import ProfileCard from '../src/components/ProfileCard.vue'
// import { profileCardNewTests } from '../tests/unit/ProfileCardNew.spec'
// import profileNewNotes from './notes/profile-card-new.md'
import { profiles } from '../test-data/profiles.js'

export default {
  title: 'Profile Card'
}

const storyComponent = storyFactory({ ProfileCard })

export const notMappedProfile = () => {
  const story = storyComponent({
    props: {
      profile: {
        default: object('Profile', profiles[0])
      }
    },
    template: `<profile-card :profile="profile" />`
  })
  // specs(() => profileCardNewTests)
  return story
}
notMappedProfile.story = {
  name: 'Default Holochain Profile'
}

export const philt3rProfile = () => {
  const story = storyComponent({
    props: {
      profile: {
        default: object('Profile', profiles[1])
      }
    },
    template: `<profile-card :profile="profile" />`
  })
  // specs(() => profileCardNewTests)
  return story
}
philt3rProfile.story = {
  name: '@philt3r Profile'
}
