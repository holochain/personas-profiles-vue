<template>
  <image-manager :items="items"/>
</template>

<script>
import ImageManager from '../components/ImageManager.vue'
import { items } from '../../test-data/image-manager.js'

export default {
  name: 'Images',
  components: {
    ImageManager
  },
  data () {
    return {
      items: items
    }
  }
}
</script>
