export const profileSpecs = [
  {
    id: 'QmhashyWebsiteProfileSpec',
    name: '@philt3r website',
    specFields: [
      {
        anchor: 'stage-name',
        fieldName: 'Stage Name',
        linkContract: 'persist',
        description: 'Alter ego for behinds the decks'
      },
      {
        anchor: 'avatar',
        fieldName: 'Avatar',
        linkContract: 'persist',
        description: 'Shows in the chat message feed and members list for others to see'
      },
      {
        anchor: 'profile-picture',
        fieldName: 'Profile Picture',
        linkContract: 'persist',
        description: 'Large photo for top of the page'
      },
      {
        anchor: 'biography',
        fieldName: 'Bio',
        linkContract: 'persist',
        description: 'Bio to get punters and promoters excited.'
      },
      {
        anchor: 'mixes',
        fieldName: 'Mixes',
        linkContract: 'request',
        description: 'List of recorded live DJ sets'
      },
      {
        anchor: 'phone-number',
        fieldName: 'Phone Number',
        linkContract: 'persist',
        description: 'Contact number for promoters to book on.'
      }
    ],
    customFields: [{
      fieldName: 'Mixes',
      fieldType: 'playlist',
      languages: [{ en: 'Mixes' }, { es: 'Mezclas' }]
    },
    {
      fieldName: 'Stage Name',
      fieldType: 'multiLineText',
      languages: [{ en: 'Stage Name' }, { es: 'Nombre del escenario' }]
    }
    ]
  },
  {
    id: 'QmhashyProfileSpec',
    name: 'Cat Owner',
    specFields: [
      {
        anchor: 'preferred-username',
        fieldName: 'Handle',
        linkContract: 'persist',
        description: 'How you are referenced in chat'
      },
      {
        anchor: 'avatar',
        fieldName: 'Avatar',
        linkContract: 'persist',
        description: 'Shows in the chat message feed and members list for others to see'
      },
      {
        anchor: 'cats-name',
        fieldName: "Cat's Name",
        linkContract: 'persist',
        description: 'Your cats name'
      },
      {
        anchor: 'cats-history',
        fieldName: "Cat's History",
        linkContract: 'request',
        description: 'Your cats history'
      }
    ],
    customFields: [{
      fieldName: "Cat's Name",
      fieldType: 'singleLineText',
      languages: [{ en: "Cat's Name" }, { es: 'Nombre de Gatos' }]
    },
    {
      fieldName: "Cat's History",
      fieldType: 'multiLineText',
      languages: [{ en: "Cat's History" }, { es: 'Historia de los Gatos' }]
    }
    ]
  }
]

export const newProfileSpec = {
  id: '',
  name: 'New Profile Spec',
  specFields: [],
  customFields: []
}
