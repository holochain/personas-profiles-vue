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
    id: 'Qmhashyphilt3rProfile',
    name: '@philt3r website',
    fields: [
      {
        anchor: 'stage-name',
        fieldName: 'Stage Name',
        linkContract: 'persist',
        description: 'Alter ego for behinds the decks',
        mapping: { 'persona': '@philt3r', 'tag': 'stage-name' }
      },
      {
        anchor: 'avatar',
        fieldName: 'Avatar',
        linkContract: 'persist',
        description: 'Shows in the chat message feed and members list for others to see',
        mapping: { 'persona': '@philt3r', 'tag': 'avatar' }
      },
      {
        anchor: 'profile-picture',
        fieldName: 'Profile Picture',
        linkContract: 'persist',
        description: 'Large photo for top of the page',
        mapping: { 'persona': '@philt3r', 'tag': 'profile-picture' }
      },
      {
        anchor: 'biography',
        fieldName: 'Bio',
        linkContract: 'persist',
        description: 'Bio to get punters and promoters excited.',
        mapping: { 'persona': '@philt3r', 'tag': 'biography' }
      },
      {
        anchor: 'mixes',
        fieldName: 'Mixes',
        linkContract: 'request',
        description: 'List of recorded live DJ sets',
        mapping: { 'persona': '@philt3r', 'tag': 'mixes' }
      },
      {
        anchor: 'phone-number',
        fieldName: 'Phone Number',
        linkContract: 'persist',
        description: 'Contact number for promoters to book on.',
        mapping: { 'persona': 'Personal', 'tag': 'phone-number' }
      }
    ]
  }
]
