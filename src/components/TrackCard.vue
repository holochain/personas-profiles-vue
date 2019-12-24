<template>
  <v-card class="mx-auto">
    <v-list-item class="ml-n3">
      <v-list-item-avatar v-if="isPlaying" @click="pauseTrack">
        <v-icon x-large>mdi-pause-circle-outline</v-icon>
      </v-list-item-avatar>
      <v-list-item-avatar v-if="!isPlaying" @click="playTrack">
        <v-icon x-large>mdi-play-circle-outline</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline" v-text="track.title"></v-list-item-title>
        <v-list-item-subtitle>by @philt3r</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <track-surfer ref="track" :track="track" :play="isPlaying" @duration="updateDuration" @played="updatePlayed"/>
    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="end">
          <span class="subheading mr-2">Played {{this.played}} min</span>
          <span class="subheading mr-2">of {{this.duration}} min</span>
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
    <v-footer app class="font-weight-medium" v-if="playerVisible">
      <v-row no-gutters align-content="center">
        <v-col cols="4">
          <h2>{{ track.title }}</h2>
          <v-btn icon @click="this.$refs.track.skipBackward">
            <v-icon>mdi-skip-backward</v-icon>
          </v-btn>
          <v-btn icon @click="stopTrack">
            <v-icon>mdi-stop</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon v-if="!isPlaying" @click="playTrack">mdi-play</v-icon>
            <v-icon v-if="isPlaying" @click="pauseTrack">mdi-pause</v-icon>
          </v-btn>
          <v-btn icon @click="this.$refs.track.skipForward">
            <v-icon>mdi-skip-forward</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="8">
          <v-container bg fill-height grid-list-md text-xs-center>
            <v-layout row wrap align-center>
              <v-flex>
                <v-progress-linear height="10" striped v-model="progress" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-col>
      </v-row>
    </v-footer>
  </v-card>
</template>

<script>
import TrackSurfer from './TrackSurfer.vue'
export default {
  name: 'TrackCard',
  components: {
    TrackSurfer
  },
  data () {
    return {
      duration: 0,
      played: 0,
      isPlaying: false,
      playerVisible: false,
      progress: 0
    }
  },
  props: ['track'],
  methods: {
    playTrack () {
      this.playerVisible = true
      this.isPlaying = true
      this.$emit('playing', this.track.id)
    },
    pauseTrack: function () {
      if (this.isPlaying === true) {
        this.isPlaying = false
      }
    },
    stopTrack () {
      this.$refs.track.stop()
      this.isPlaying = false
    },
    pausedByOtherTrack: function () {
      if (this.isPlaying === true) {
        this.isPlaying = false
      }
      this.playerVisible = false
    },
    updateDuration: function (duration) {
      this.duration = (duration / 60).toFixed(2)
    },
    updatePlayed: function (played, source) {
      this.played = (played / 60).toFixed(2)
      this.progress = this.played / this.duration * 100
    }
  }
}
</script>
