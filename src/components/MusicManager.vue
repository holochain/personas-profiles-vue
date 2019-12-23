<template>
  <v-card outlined tile height="100%" width="100%">
    <v-row no-gutters>
      <v-col cols="4" class="ma-1 pa-1">
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Music</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-folder-plus</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-upload</v-icon>
          </v-btn>
        </v-toolbar>
        <v-treeview
          v-model="tree"
          :open="open"
          :items="items"
          activatable
          item-key="name"
          open-on-click>
          <template v-slot:prepend="{ item, open }">
            <v-btn icon @click="listTracks(item)">
              <v-icon>
                {{ open ? 'mdi-folder-open' : 'mdi-library-music' }}
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:label="{ item }">
            <v-btn icon @click="listTracks(item)">
              {{item.name}}
            </v-btn>
          </template>
        </v-treeview>
      </v-col>
      <v-divider v-if="tree" vertical></v-divider>
      <v-col class="ma-1 pa-1">
        <v-col v-for="(track) in tracks" :key="track.id" cols="12">
          <v-card class="mx-auto">
            <v-list-item class="ml-n3">
              <v-list-item-avatar v-if="track.playing===true" @click="showPlayer(track)">
                <v-icon x-large>mdi-pause-circle-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-avatar v-if="!track.playing===true" @click="showPlayer(track)">
                <v-icon x-large>mdi-play-circle-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline" v-text="track.title"></v-list-item-title>
                <v-list-item-subtitle>by @philt3r</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-img class="pl-2 pr-2">
              <div :id="'waveform-' + track.id" />
            </v-img>
            <v-card-actions>
              <v-list-item class="grow">
                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-footer app class="font-weight-medium" v-show="playerVisible">
          <v-row no-gutters align-content="center">
            <v-col cols="4">
              <h2>{{ playingTrack.title }}</h2>
              <v-btn icon @click="skip(-10)">
                <v-icon>mdi-skip-backward</v-icon>
              </v-btn>
              <v-btn icon @click="stopPlayer()">
                <v-icon>mdi-stop</v-icon>
              </v-btn>
              <v-btn icon @click="playPlayer()">
                <v-icon v-if="!playingTrack.playing===true">mdi-play</v-icon>
                <v-icon v-if="playingTrack.playing===true">mdi-pause</v-icon>
              </v-btn>
              <v-btn icon @click="skip(10)">
                <v-icon>mdi-skip-forward</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="8">
              <v-container bg fill-height grid-list-md text-xs-center>
                <v-layout row wrap align-center>
                  <v-flex>
                    <v-progress-linear height="10" striped reactive v-model="currentPlayBack" />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-col>
          </v-row>
        </v-footer>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
export default {
  name: 'MusicManager',
  data () {
    return {
      open: ['public'],
      tree: [],
      tracks: [],
      selectedFolder: '',
      playerVisible: false,
      playingTrack: {},
      playing: false,
      currentPlayBack: 0,
      wavesurfers: [],
      playingWaveSurfer: {},
      audioprocessEvent: true
    }
  },
  mounted: function () {
    this.$watch('tracks', function (tracks) {
      let that = this
      tracks.forEach(function (track) {
        let wavesurfer = WaveSurfer.create({
          container: '#waveform-' + track.id,
          waveColor: that.$vuetify.theme.currentTheme.primary,
          progressColor: 'hsla(200, 100%, 30%, 0.5)',
          cursorColor: that.$vuetify.theme.currentTheme.action,
          barWidth: 2,
          barHeight: 1
        })
        wavesurfer.on('audioprocess', function () {
          that.currentPlayBack = Math.round(wavesurfer.getCurrentTime() / wavesurfer.getDuration() * 100)
        })
        wavesurfer.on('seek', function (progress) {
          that.currentPlayBack = Math.round(progress * 100)
        })
        wavesurfer.load(track.src)
        if (that.wavesurfers.some(e => e.key === '#waveform-' + track.id)) {
          that.wavesurfers.filter(e => e.key === '#waveform-' + track.id)[0].wavesurfer = wavesurfer
        } else {
          that.wavesurfers.push({ 'key': '#waveform-' + track.id, 'wavesurfer': wavesurfer })
        }
      })
    }, { deep: false })
  },
  methods: {
    showPlayer (track) {
      this.playerVisible = true
      this.playingWaveSurfer = this.wavesurfers.filter(e => e.key === '#waveform-' + track.id)[0].wavesurfer
      this.playingTrack.playing = false
      this.playingTrack = track
      this.playPlayer()
    },
    playPlayer () {
      this.wavesurfers.forEach(eachwave => {
        if (eachwave.wavesurfer !== this.playingWaveSurfer) {
          eachwave.wavesurfer.pause()
        }
      })
      this.playingWaveSurfer.playPause()
      this.playingTrack.playing = this.playingWaveSurfer.isPlaying()
    },
    stopPlayer () {
      this.playingWaveSurfer.pause()
      this.currentPlayBack = 0
      this.playingTrack.playing = false
    },
    skip (seconds) {
      let currentTime = this.playingWaveSurfer.getCurrentTime() + parseFloat(seconds)
      if (currentTime < 0) { currentTime = 0 }
      this.currentPlayBack = Math.round(currentTime / this.playingWaveSurfer.getDuration() * 100)
    },
    scrub (offSet1, offSet2) {
      this.currentPlayBack = (offSet1 / offSet2) * 100
    },
    handleVolumeSlider () {
      this.playingWaveSurfer.setVolume(this.value)
    },
    listTracks (item) {
      if (this.selectedFolder !== item.id) {
        this.tracks = []
        if (item.tracks) {
          this.tracks = item.tracks
        }
      }
      this.selectedFolder = item.id
    }
  },
  props: ['items'],
  watch: {
    currentPlayBack: function (val) {
      console.log(val)
      this.playingWaveSurfer.setCurrentTime(val / 100 * this.playingWaveSurfer.getDuration())
    }
  }
}
</script>
