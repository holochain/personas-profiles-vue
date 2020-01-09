export const profiles = [
  {
    id: 'QmhashyProfile1',
    name: 'Cat Owners of Toowoomba',
    fields: [
      {
        anchor: 'preferred_username',
        fieldName: 'Handle',
        fieldType: 'singleLineText',
        linkContract: 'persist',
        description: 'How you are referenced in chat'
      },
      {
        anchor: 'avatar',
        fieldName: 'Avatar',
        fieldType: 'thumbnail',
        linkContract: 'persist',
        description: 'Shows in the chat message feed and members list for others to see'
      },
      {
        anchor: 'profile-picture',
        fieldName: 'Profile Picture',
        fieldType: 'image',
        linkContract: 'persist',
        description: 'Used on your cats profile page'
      },
      {
        anchor: 'cats-name',
        fieldName: 'Cats Name',
        fieldType: 'singleLineText',
        linkContract: 'persist',
        description: 'Your cats name'
      },
      {
        anchor: 'cats-history',
        fieldName: 'Cats History',
        fieldType: 'multiLineText',
        linkContract: 'request',
        description: 'Your cats history'
      }
    ]
  },
  {
    id: 'Qmhashyphilt3rProfile2',
    name: '@philt3r website',
    fields: [
      {
        anchor: 'stage-name',
        fieldName: 'Stage Name',
        fieldType: 'singleLineText',
        linkContract: 'persist',
        description: 'Alter ego for behinds the decks',
        mapping: { 'persona': '@philt3r', 'tag': 'stage-name' }
      },
      {
        anchor: 'avatar',
        fieldName: 'Avatar',
        fieldType: 'thumbnail',
        linkContract: 'persist',
        description: 'Shows in the chat message feed and members list for others to see',
        mapping: { 'persona': '@philt3r', 'tag': 'avatar' }
      },
      {
        anchor: 'profile-picture',
        fieldName: 'Profile Picture',
        fieldType: 'image',
        linkContract: 'persist',
        description: 'Large photo for top of the page',
        mapping: { 'persona': '@philt3r', 'tag': 'profile-picture' }
      },
      {
        anchor: 'biography',
        fieldName: 'Bio',
        fieldType: 'multiLineText',
        linkContract: 'persist',
        description: 'Bio to get punters and promoters excited.',
        mapping: { 'persona': '@philt3r', 'tag': 'biography' }
      },
      {
        anchor: 'mixes',
        fieldName: 'Mixes',
        fieldType: 'playlist',
        linkContract: 'request',
        description: 'List of recorded live DJ sets',
        mapping: { 'persona': '@philt3r', 'tag': 'mixes' }
      },
      {
        anchor: 'phone-number',
        fieldName: 'Phone Number',
        fieldType: 'singleLineText',
        linkContract: 'persist',
        description: 'Contact number for promoters to book on.',
        mapping: { 'persona': 'Personal', 'tag': 'phone-number' }
      }
    ]
  },
  {
    id: 'Qmhashyphilt3rProfile2',
    name: '@philt3r website',
    fields: [
      {
        anchor: 'avatar',
        fieldName: 'Avatar',
        fieldType: 'thumbnail',
        linkContract: 'persist',
        description: 'Shows in the chat message feed and members list for others to see',
        mapping: { 'persona': '@philt3r', 'tag': 'avatar' }
      },
      {
        anchor: 'profile-picture',
        fieldName: 'Profile Picture',
        fieldType: 'image',
        linkContract: 'persist',
        description: 'Large photo for top of the page',
        mapping: { 'persona': '@philt3r', 'tag': 'profile-picture' }
      }
    ]
  }
]
