import { storyFactory } from '../.storybook/util/helpers'
import { object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { specs } from 'storybook-addon-specifications'
import PersonaCard from '../src/components/PersonaCard.vue'
import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'
import personaNewNotes from './notes/persona-card-new.md'
import { personas, newPersona } from '../test-data/personas.js'

export default {
  title: 'Persona Card',
  parameters: {
    notes: personaNewNotes
  }
}

const storyComponent = storyFactory({ PersonaCard })

export const newPersonaStory = () => {
  const story = storyComponent({
    props: {
      persona: {
        default: object('Persona', newPersona)
      }
    },
    template: `<persona-card :persona="persona" />`
  })
  // specs(() => personaCardNewTests)
  return story
}
newPersonaStory.story = {
  name: 'New Persona'
}

export const defaultHolochainPersona = () => {
  const story = storyComponent({
    props: {
      persona: {
        default: object('Persona', personas[1])
      }
    },
    template: `<persona-card :persona="persona" />`
  })
  specs(() => personaCardNewTests)
  return story
}
defaultHolochainPersona.story = {
  name: 'Default Holochain Persona'
}

export const philt3rPersona = () => {
  const story = storyComponent({
    props: {
      persona: {
        default: object('Persona', personas[0])
      }
    },
    template: `<persona-card :persona="persona" />`
  })
  // specs(() => personaCardNewTests)
  return story
}
philt3rPersona.story = {
  name: '@philt3r Persona'
}
