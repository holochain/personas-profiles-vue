import { storyFactory } from '../.storybook/util/helpers'
import { object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { specs } from 'storybook-addon-specifications'
import PersonaField from '../src/components/PersonaField.vue'
import { newPersonaFieldTests, existingPersonaFieldTests } from '../tests/unit/PersonaField.spec'
import personaNewFieldNotes from './notes/persona-field-new.md'
import { personas } from '../test-data/personas.js'
const personaFieldValue0 = personas[0].fields[0]
const personaFieldValue1 = personas[0].fields[1]
const personaFieldValue2 = personas[0].fields[2]
const personaFieldValue3 = personas[0].fields[3]

export default {
  title: 'Persona Field',
  parameters: {
    notes: personaNewFieldNotes
  }
}

const storyComponent = storyFactory({ PersonaField })
export const newField = () => {
  const story = storyComponent({
    template: `<persona-field :newField="true"></persona-field>`
  })
  specs(() => newPersonaFieldTests)
  return story
}
newField.story = {
  name: 'New Field'
}

export const existingSingleLineTextField = () => {
  const story = storyComponent({
    props: {
      personaFieldValue: {
        default: object('Field', personaFieldValue1)
      }
    },
    template: `<persona-field key="singleLineText" :newField="false" :personaFieldValue="personaFieldValue"></persona-field>`
  })
  console.log(personaFieldValue1)
  specs(() => existingPersonaFieldTests)
  return story
}
existingSingleLineTextField.story = {
  name: 'Existing Single Line Text Field'
}

export const existingAvatarField = () => {
  const story = storyComponent({
    props: {
      personaFieldValue: {
        default: object('Field', personaFieldValue0)
      }
    },
    template: `<persona-field key="avatar" :newField="false" :personaFieldValue="personaFieldValue"></persona-field>`
  })
  console.log(personaFieldValue0)
  // specs(() => existingPersonaFieldTests)
  return story
}
existingAvatarField.story = {
  name: 'Existing Avatar Field'
}

export const existingBigPhotoField = () => {
  const story = storyComponent({
    props: {
      personaFieldValue: {
        default: object('Field', personaFieldValue3)
      }
    },
    template: `<persona-field key="multiLineText" :newField="false" :personaFieldValue="personaFieldValue"></persona-field>`
  })
  console.log(personaFieldValue2)
  // specs(() => existingPersonaFieldTests)
  return story
}
existingBigPhotoField.story = {
  name: 'Existing Big Photo Field'
}
