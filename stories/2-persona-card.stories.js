import { storyFactory } from '../.storybook/util/helpers'
import { text } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { specs } from 'storybook-addon-specifications'
import PersonaCard from '../src/components/PersonaCard.vue'
import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'
import personaNewNotes from './notes/persona-card-new.md'

export default {
  title: 'Persona Card',
  parameters: {
    notes: personaNewNotes
  }
}

const storyComponent = storyFactory({ PersonaCard })

export const newPersona = () => {
  const story = storyComponent({
    props: {
      personaTitle: {
        default: text('Persona Title', 'New Persona')
      }
    },
    template: `<persona-card :personaTitle="personaTitle" />`
  })
  specs(() => personaCardNewTests)
  return story
}
newPersona.story = {
  name: 'New Persona'
}
