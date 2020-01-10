import { storyFactory } from '../.storybook/util/helpers'
import { object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { specs } from 'storybook-addon-specifications'
import PersonaField from '../src/components/PersonaField.vue'
import { newPersonaFieldTests, existingPersonaFieldTests } from '../tests/unit/PersonaField.spec'
import personaNewFieldNotes from './notes/persona-field-new.md'
import { personas } from '../test-data/personas.js'

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
        default: object('Field', personas[1].fields[1])
      }
    },
    template: `<persona-field key="singleLineText" :newField="false" :personaFieldValue="personaFieldValue"></persona-field>`
  })
  specs(() => existingPersonaFieldTests)
  return story
}
existingSingleLineTextField.story = {
  name: 'Existing Single Line Text Field'
}

export const existingMultiLineTextField = () => {
  const story = storyComponent({
    props: {
      personaFieldValue: {
        default: object('Field', personas[1].fields[2])
      }
    },
    template: `<persona-field key="multiLineText" :newField="false" :personaFieldValue="personaFieldValue"></persona-field>`
  })
  specs(() => existingPersonaFieldTests)
  return story
}
existingMultiLineTextField.story = {
  name: 'Existing Multi Line Text Field'
}

export const existingAvatarField = () => {
  const story = storyComponent({
    props: {
      personaFieldValue: {
        default: object('Field', personas[1].fields[0])
      }
    },
    template: `<persona-field key="avatar" :newField="false" :personaFieldValue="personaFieldValue"></persona-field>`
  })
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
        default: object('Field', personas[1].fields[3])
      }
    },
    template: `<persona-field key="multiLineText" :newField="false" :personaFieldValue="personaFieldValue"></persona-field>`
  })
  // specs(() => existingPersonaFieldTests)
  return story
}
existingBigPhotoField.story = {
  name: 'Existing Big Photo Field'
}
