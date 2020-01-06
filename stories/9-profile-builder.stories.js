import { storyFactory } from '../.storybook/util/helpers'
import { object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { specs } from 'storybook-addon-specifications'
import ProfileSpecBuilder from '../src/components/ProfileSpecBuilder.vue'
import { profileSpecBuilderNewTests } from '../tests/unit/ProfileSpecBuilder.spec'
import profileSpecBuilderNotes from './notes/profile-spec-builder.md'
import { profileSpecs, newProfileSpec } from '../test-data/profile-specs.js'

export default {
  title: 'Profile Spec Builder',
  parameters: {
    notes: profileSpecBuilderNotes
  }
}

const storyComponent = storyFactory({ ProfileSpecBuilder })

export const editPersonaStory = () => {
  const story = storyComponent({
    props: {
      profileSpec: {
        default: object('Profile Spec', profileSpecs[0])
      }
    },
    template: `<profile-spec-builder :profileSpec="profileSpec" />`
  })
  console.log(profileSpecs)
  // specs(() => profileSpecBuilderNewTests)
  return story
}
editPersonaStory.story = {
  name: 'Profile Spec'
}

export const newPersonaStory = () => {
  const story = storyComponent({
    props: {
      profileSpec: {
        default: object('Profile Spec', newProfileSpec)
      }
    },
    template: `<profile-spec-builder :profileSpec="profileSpec" />`
  })
  console.log(newProfileSpec)
  specs(() => profileSpecBuilderNewTests)
  return story
}
newPersonaStory.story = {
  name: 'New Profile Spec'
}
