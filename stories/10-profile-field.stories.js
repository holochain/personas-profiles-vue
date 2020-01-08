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
    template: `<profile-field size="thumbnail" :profileName="profileName" :profileFieldValue="profileFieldValue"></profile-field>`
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
    template: `<profile-field size="thumbnail" :profileName="profileName" :profileFieldValue="profileFieldValue"></profile-field>`
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
    template: `<profile-field size="image" :profileName="profileName" :profileFieldValue="profileFieldValue"></profile-field>`
  })
  // specs(() => newProfileFieldTests)
  return story
}
newImageField.story = {
  name: 'Image Not Mapped Yet'
}
// export const existingSingleLineTextField = () => {
//   const story = storyComponent({
//     props: {
//       personaFieldValue: {
//         default: object('Field', personaFieldValue1)
//       }
//     },
//     template: `<profile-field key="singleLineText" :newField="false" :personaFieldValue="personaFieldValue"></profile-field>`
//   })
//   console.log(personaFieldValue1)
//   specs(() => existingProfileFieldTests)
//   return story
// }
// existingSingleLineTextField.story = {
//   name: 'Existing Single Line Text Field'
// }
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
// export const existingBigPhotoField = () => {
//   const story = storyComponent({
//     props: {
//       personaFieldValue: {
//         default: object('Field', personaFieldValue3)
//       }
//     },
//     template: `<profile-field key="multiLineText" :newField="false" :personaFieldValue="personaFieldValue"></profile-field>`
//   })
//   console.log(personaFieldValue2)
//   // specs(() => existingProfileFieldTests)
//   return story
// }
// existingBigPhotoField.story = {
//   name: 'Existing Big Photo Field'
// }
