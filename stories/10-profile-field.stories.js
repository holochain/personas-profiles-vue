import { storyFactory } from '../.storybook/util/helpers'
import { object, text } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import ProfileField from '../src/components/ProfileField.vue'
// import { newProfileFieldTests, existingProfileFieldTests } from '../tests/unit/ProfileField.spec'
// import personaNewFieldNotes from './notes/profile-field-new.md'
// import { personas } from '../test-data/personas.js'
import { profiles } from '../test-data/profiles.js'

export default {
  title: 'Profile Field'
}

let profileAvatarFieldNoMapping = profiles[0].fields[1]
const storyComponent = storyFactory({ ProfileField })
export const newField = () => {
  const story = storyComponent({
    props: {
      profileFieldValue: {
        default: object('Profile Field', profileAvatarFieldNoMapping)
      },
      profileName: {
        default: text('Profile Name', profiles[0].name)
      }
    },
    template: `<profile-field fieldType="thumbnail" :profileName="profileName" :profileFieldValue="profileFieldValue"></profile-field>`
  })
  // specs(() => newProfileFieldTests)
  return story
}
newField.story = {
  name: 'Avatar Not Mapped Yet'
}

export const existingAvatarField = () => {
  const story = storyComponent({
    props: {
      profileFieldValue: {
        default: object('Profile Field', profiles[1].fields[1])
      },
      profileName: {
        default: text('Profile Name', profiles[1].name)
      }
    },
    template: `<profile-field fieldType="thumbnail" :profileName="profileName" :profileFieldValue="profileFieldValue"></profile-field>`
  })
  // specs(() => existingProfileFieldTests)
  return story
}
existingAvatarField.story = {
  name: 'Existing Avatar Field'
}

export const newImageField = () => {
  const story = storyComponent({
    props: {
      profileFieldValue: {
        default: object('Profile Field', profiles[0].fields[2])
      },
      profileName: {
        default: text('Profile Name', profiles[0].name)
      }
    },
    template: `<profile-field fieldType="image" :profileName="profileName" :profileFieldValue="profileFieldValue"></profile-field>`
  })
  // specs(() => newProfileFieldTests)
  return story
}
newImageField.story = {
  name: 'Image Not Mapped Yet'
}

export const existingImageField = () => {
  const story = storyComponent({
    props: {
      profileFieldValue: {
        default: object('Profile Field', profiles[1].fields[2])
      },
      profileName: {
        default: text('Profile Name', profiles[1].name)
      }
    },
    template: `<profile-field fieldType="image" :profileName="profileName" :profileFieldValue="profileFieldValue"></profile-field>`
  })
  // specs(() => existingProfileFieldTests)
  return story
}
existingImageField.story = {
  name: 'Existing Big Photo Field'
}

export const newSingleLineTextField = () => {
  const story = storyComponent({
    props: {
      profileFieldValue: {
        default: object('Profile Field', profiles[0].fields[0])
      },
      profileName: {
        default: text('Profile Name', profiles[0].name)
      }
    },
    template: `<profile-field fieldType="singleLineText" :profileName="profileName" :profileFieldValue="profileFieldValue"></profile-field>`
  })
  // specs(() => newProfileFieldTests)
  return story
}

newSingleLineTextField.story = {
  name: 'New Single Line Text Field'
}
//
// export const existingAvatarField = () => {
//   const story = storyComponent({
//     props: {
//       personaFieldValue: {
//         default: object('Field', personaFieldValue0)
//       }
//     },
//     template: `<profile-field key="avatar" :newField="false" :personaFieldValue="personaFieldValue"></profile-field>`
//   })
//   console.log(personaFieldValue0)
//   // specs(() => existingProfileFieldTests)
//   return story
// }
// existingAvatarField.story = {
//   name: 'Existing Avatar Field'
// }
//
