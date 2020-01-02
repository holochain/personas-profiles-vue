import { storyFactory } from '../.storybook/util/helpers'
import { array } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { specs } from 'storybook-addon-specifications'
import PersonaField from '../src/components/PersonaField.vue'
import { personaFieldTests } from '../tests/unit/PersonaField.spec'
import personaNewFieldNotes from './notes/persona-field-new.md'
import { curatedFieldNames } from '../test-data/curated-field-names.js'

export default {
  title: 'Persona Field',
  parameters: {
    notes: personaNewFieldNotes
  }
}

const storyComponent = storyFactory({ PersonaField })

export const newField = () => {
  const story = storyComponent({
    props: {
      curatedFieldNames: {
        default: array('Field Names', curatedFieldNames)
      }
    },
    template: `<persona-field :newField="true" :curatedFieldNames="curatedFieldNames"></persona-field>`
  })
  specs(() => personaFieldTests)
  return story
}
newField.story = {
  name: 'New Field'
}

export const existingField = () => {
  const story = storyComponent({
    props: {
      curatedFieldNames: {
        default: array('Field Names', curatedFieldNames)
      }
    },
    template: `<persona-field :newField="false" :curatedFieldNames="curatedFieldNames"></persona-field>`
  })
  specs(() => personaFieldTests)
  return story
}
existingField.story = {
  name: 'Existing Field'
}
