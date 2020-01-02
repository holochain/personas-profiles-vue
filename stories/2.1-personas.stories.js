import { storyFactory } from '../.storybook/util/helpers'
// import { object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import Personas from '../src/views/Personas.vue'
// import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'

export default {
  title: 'Personas'
}

const storyComponent = storyFactory({ Personas })

export const personasStory = () => {
  const story = storyComponent({
    template: `<personas />`
  })
  // specs(() => personaCardNewTests)
  return story
}
personasStory.story = {
  name: 'List of Personas'
}
