<template>
  <image-manager :items="items"/>
</template>

<script>
import ImageManager from '../components/ImageManager.vue'
export default {
  name: 'Images',
  components: {
    ImageManager
  },
  data () {
    return {
      items: [
        {
          name: '@philt3r',
          path: '@philt3r',
          children: [
            {
              name: '2019',
              path: '@philt3r/2019',
              photos: [
                {
                  title: 'On Stage Dragon Dreaming 2017',
                  id: 'QmhashyStuff'
                },
                {
                  title: 'photo2.png',
                  id: 'QmhashyStuff2'
                },
                {
                  title: 'photo3.png',
                  id: 'QmhashyStuff3'
                },
                {
                  title: 'photo4.png',
                  id: 'QmhashyStuff4'
                }
              ]
            },
            {
              name: '2018',
              path: '@philt3r/2018'
            },
            {
              name: '2017',
              path: '@philt3r/2017'
            }
          ]
        },
        {
          name: 'Personal',
          children: [
            {
              name: '2019'
            },
            {
              name: '2018'
            },
            {
              name: '2017'
            }
          ]
        },
        {
          name: 'Professional'
        }
      ]
    }
  }
}
</script>
