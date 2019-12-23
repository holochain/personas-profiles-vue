<template>
  <music-manager :items="items"/>
</template>

<script>
import MusicManager from '../components/MusicManager.vue'
import { items } from '../../test-data/music-manager.js'

export default {
  name: 'Music',
  components: {
    MusicManager
  },
  data () {
    return {
      items: items
    }
  }
}
</script>
