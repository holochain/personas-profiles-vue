export const profileSpecs = [
  {
    id: 'QmhashyProfileSpec',
    name: 'Cat Owner',
    specFields: [
      {
        anchor: 'preferred_username',
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
