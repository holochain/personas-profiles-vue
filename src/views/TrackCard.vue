<template>
  <v-col cols="12">
    <track-card  ref="trackCard" @playing="pauseOtherTracks" :track="items[0].children[0].tracks[2]"/>
  </v-col>
</template>

<script>
import TrackCard from '../components/TrackCard.vue'
import { items } from '../../test-data/music-manager.js'

export default {
  name: 'Music',
  components: {
    TrackCard
  },
  data () {
    return {
      items: items
    }
  },
  methods: {
    pauseOtherTracks: function () {
      //
    }
  }
}
</script>
