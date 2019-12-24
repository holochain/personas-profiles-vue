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
              <v-list-item-avatar v-if="track.playing===true" @click="playPauseTrack(track)">
                <v-icon x-large>mdi-pause-circle-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-avatar v-if="!track.playing===true" @click="playPauseTrack(track)">
                <v-icon x-large>mdi-play-circle-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline" v-text="track.title"></v-list-item-title>
                <v-list-item-subtitle>by @philt3r</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card class="d-flex flex-row ma-0 pa-0" flat tile>
              <v-card v-for="(chunk) in track.chunks" :key="track.id + chunk.index" width="100%" class="ma-0 pa-0" flat>
                <div :id="'waveform-' + track.id + chunk.index" />
              </v-card>
            </v-card>
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
              <v-btn icon @click="playPausePlayer()">
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
        track.chunks.forEach(function (chunk) {
          let wavesurfer = WaveSurfer.create({
            container: '#waveform-' + track.id + chunk.index,
            waveColor: that.$vuetify.theme.currentTheme.primary,
            progressColor: that.$vuetify.theme.currentTheme.action,
            cursorColor: '#00000000', // that.$vuetify.theme.currentTheme.action,
            barWidth: 2,
            barHeight: 1,
            backend: 'MediaElement'
          })
          let nextChunkId = Number(chunk.index) + 1
          wavesurfer.on('finish', function () {
            console.log('finished #waveform-' + track.id + chunk.index)
            if (that.wavesurfers.some(e => e.key === '#waveform-' + track.id + nextChunkId)) {
              that.playingWaveSurfer = that.wavesurfers.filter(e => e.key === '#waveform-' + track.id + nextChunkId)[0].wavesurfer
              that.playingWaveSurfer.stop()
              that.playingWaveSurfer.playPause()
              console.log('playing next #waveform-' + track.id + nextChunkId)
            }
          })
          wavesurfer.on('audioprocess', function () {
            let startPoint = Number(chunk.index) / track.chunks.length * 100
            that.currentPlayBack = startPoint + Math.round(wavesurfer.getCurrentTime() / wavesurfer.getDuration() * 100) / track.chunks.length
          })
          wavesurfer.on('seek', function (progress) {
            console.log(wavesurfer.container.id)
            if (that.playingTrack.id === track.id) {
              if (wavesurfer.container.id !== that.playingWaveSurfer.container.id) {
                that.playingWaveSurfer.stop()
                that.playingWaveSurfer = wavesurfer
                that.playingWaveSurfer.playPause()
              }
            }
          })
          wavesurfer.load(chunk.src)
          // wavesurfer.on('waveform-ready', function () {
          //   const pcm = wavesurfer.exportPCM(1024, 1024, true)
          //   // console.log('pcm', pcm)
          // })
          if (that.wavesurfers.some(e => e.key === '#waveform-' + track.id + chunk.index)) {
            that.wavesurfers.filter(e => e.key === '#waveform-' + track.id + chunk.index)[0].wavesurfer = wavesurfer
          } else {
            that.wavesurfers.push({ 'key': '#waveform-' + track.id + chunk.index, 'wavesurfer': wavesurfer })
          }
        })
      })
    }, { deep: false })
  },
  methods: {
    playPauseTrack (track) {
      this.playerVisible = true
      if (!this.playingWaveSurfer) {
        this.playingWaveSurfer = this.wavesurfers.filter(e => e.key === '#waveform-' + track.id + track.chunks[0].index)[0].wavesurfer
        this.playingTrack = track
        this.playingTrack.playing = true
        this.playingWaveSurfer.playPause()
      } else if (this.playingWaveSurfer.container.id.contains(this.track.id)) {
        this.playingWaveSurfer.playPause()
        this.playingTrack.playing = this.playingWaveSurfer.isPlaying()
      } else if (!this.playingWaveSurfer.container.id.contains(this.track.id)) {
        this.playingWaveSurfer = this.wavesurfers.filter(e => e.key === '#waveform-' + track.id + track.chunks[0].index)[0].wavesurfer
        this.playingTrack = track
        this.playingWaveSurfer.playPause()
        this.playingTrack.playing = this.playingWaveSurfer.isPlaying()
      }
    },
    playPausePlayer () {
      this.playingWaveSurfer.playPause()
      this.playingTrack.playing = this.playingWaveSurfer.isPlaying()
      // if (this.playingWaveSurfer.container.id.contains(this.playingTrack.id)) {
      //   this.playingWaveSurfer.playPause()
      //   this.playingTrack.playing = this.playingWaveSurfer.isPlaying()
      // } else {
      //
      // }
      // this.wavesurfers.forEach(eachwave => {
      //   if (eachwave.wavesurfer !== this.playingWaveSurfer) {
      //     eachwave.wavesurfer.pause()
      //   }
      // })
      // this.playingWaveSurfer.playPause()
      // this.playingTrack.playing = this.playingWaveSurfer.isPlaying()
    },
    stopPlayer () {
      this.wavesurfers.filter(e => e.key.startsWith('#waveform-' + this.playingTrack.id)).forEach(eachwave => {
        eachwave.wavesurfer.stop()
      })
      this.playingWaveSurfer = this.wavesurfers.filter(e => e.key === '#waveform-' + this.playingTrack.id + this.playingTrack.chunks[0].index)[0].wavesurfer
      this.playingWaveSurfer.setCurrentTime(0)
      this.playingTrack.playing = false
    },
    skip (seconds) {
      let currentTime = this.playingWaveSurfer.getCurrentTime() + parseFloat(seconds)
      if (currentTime < 0) { currentTime = 0 }
      this.playingWaveSurfer.setCurrentTime(currentTime)
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
      // this.playingWaveSurfer.setCurrentTime(val / 100 * this.playingWaveSurfer.getDuration())
    }
  }
}
</script>
