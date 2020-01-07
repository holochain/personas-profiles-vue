export const profiles = [
  {
    id: 'QmhashyProfile1',
    name: 'Cat Owners of Toowoomba',
    fields: [
      {
        anchor: 'preferred_username',
        fieldName: 'Handle',
        linkContract: 'persist',
        description: 'How you are referenced in chat',
        mapping: {}
      },
      {
        anchor: 'avatar',
        fieldName: 'Avatar',
        linkContract: 'persist',
        description: 'Shows in the chat message feed and members list for others to see',
        mapping: {}
      },
      {
        anchor: 'profile-picture',
        fieldName: 'Profile Picture',
        linkContract: 'persist',
        description: 'Used on your cats profile page',
        mapping: {}
      },
      {
        anchor: 'cats-name',
        fieldName: "Cat's Name",
        linkContract: 'persist',
        description: 'Your cats name',
        mapping: {}
      },
      {
        anchor: 'cats-history',
        fieldName: "Cat's History",
        linkContract: 'request',
        description: 'Your cats history',
        mapping: {}
      }
    ]
  },
  {
    id: 'QmhashyProfile2',
    name: 'Cat Owners of Toowoomba Filled Out',
    fields: [
      {
        anchor: 'preferred_username',
        fieldName: 'Handle',
        linkContract: 'persist',
        description: 'How you are referenced in chat',
        mapping: {}
      },
      {
        anchor: 'avatar',
        fieldName: 'Avatar',
        linkContract: 'persist',
        description: 'Shows in the chat message feed and members list for others to see',
        mapping: {}
      },
      {
        anchor: 'cats-name',
        fieldName: "Cat's Name",
        linkContract: 'persist',
        description: 'Your cats name',
        mapping: {}
      },
      {
        anchor: 'cats-history',
        fieldName: "Cat's History",
        linkContract: 'request',
        description: 'Your cats history',
        mapping: {}
      }
    ]
  }
]
