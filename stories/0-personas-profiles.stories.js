import { storyFactory } from '../.storybook/util/helpers'
export default {
  title: 'Personas & Profiles'
}

const storyComponent = storyFactory({ })

export const description = () => {
  const story = storyComponent({
    template: `
    <ul>
      <li>Personas have a language en-AU</li>
    </ul>
    `
  })
  return story
}
description.story = {
  name: 'Description'
}
