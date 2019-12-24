<template>
  <image-manager :photos="photos"/>
</template>

<script>
import ImageManager from '../components/ImageManager.vue'
import { photos } from '../../test-data/image-manager.js'

export default {
  name: 'Images',
  components: {
    ImageManager
  },
  data () {
    return {
      photos: photos
    }
  }
}
</script>
