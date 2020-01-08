import { storyFactory } from '../.storybook/util/helpers'
// import { object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import ProfileSpecs from '../src/views/ProfileSpecs.vue'
// import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'

export default {
  title: 'Profile Specs'
}

const storyComponent = storyFactory({ ProfileSpecs })

export const personasStory = () => {
  const story = storyComponent({
    template: `<profile-specs />`
  })
  // specs(() => personaCardNewTests)
  return story
}
personasStory.story = {
  name: 'List of Profile Specs'
}
