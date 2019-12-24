import { storyFactory } from '../.storybook/util/helpers'
import { object } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
// import { specs } from 'storybook-addon-specifications'
import ChunkSurfer from '../src/components/ChunkSurfer.vue'
// import { personaCardNewTests } from '../tests/unit/PersonaCardNew.spec'
// import personaNewNotes from './notes/persona-card-new.md'
import { track } from '../test-data/chunk-surfer.js'
export default {
  title: 'Chunk Surfer'
}

const storyComponent = storyFactory({ ChunkSurfer })

export const chunkSurfer = () => {
  const story = storyComponent({
    props: {
      track: {
        default: object('Track', track)
      }
    },
    template: `<chunk-surfer :track="track" />`
  })
  return story
}
chunkSurfer.story = {
  name: 'Asych Chunks'
}
