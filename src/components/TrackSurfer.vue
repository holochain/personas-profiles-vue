<template>
  <v-card class="d-flex flex-row ma-0 pa-0" flat tile>
    <v-card v-for="(chunk) in track.chunks" :key="track.id + chunk.index" width="100%" class="ma-0 pa-0" flat>
      <div :id="'waveform-' + track.id + chunk.index" />
    </v-card>
  </v-card>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
export default {
  name: 'TrackSurfer',
  components: {

  },
  data () {
    return {
      firstPlay: true,
      duration: 0,
      playedTime: 0,
      currentChunk: this.track.chunks[0]
    }
  },
  props: ['track', 'play'],
  methods: {
    skipForward: function () {
      console.log('skip f')
      let skipTime = this.currentChunk.player.chunkSurfer.getCurrentTime() + this.duration / 25
      this.currentChunk.player.chunkSurfer.setCurrentTime(skipTime)
    },
    skipBackward: function () {
      console.log('skip b')
      let skipTime = Math.max(0, this.currentChunk.player.chunkSurfer.getCurrentTime() - this.duration / 25)
      this.currentChunk.player.chunkSurfer.setCurrentTime(skipTime)
    },
    stop: function (stop) {
      console.log('stop')
      this.currentChunk.player.seek = true
      this.currentChunk.player.chunkSurfer.stop()
      this.currentChunk = this.track.chunks[0]
      this.$emit('played', 0, 'stop')
    }
  },
  mounted: function () {
    let that = this
    this.track.chunks.sort((a, b) => parseFloat(a.index) - parseFloat(b.index))
    this.track.chunks.forEach(function (chunk) {
      console.log('creating ' + chunk.index)
      chunk.player.chunkSurfer = WaveSurfer.create({
        container: '#waveform-' + that.track.id + chunk.index,
        waveColor: that.$vuetify.theme.currentTheme.primary,
        progressColor: that.$vuetify.theme.currentTheme.action,
        cursorColor: '#00000000', // that.$vuetify.theme.currentTheme.action,
        barWidth: 2,
        barHeight: 1,
        backend: 'MediaElement'
      })

      // let nextChunkId = Number(chunk.index) + 1
      // chunk.player.chunkSurfer.on('finish', function () {
      //   if (chunk.player.seek) {
      //     return
      //   }
      //   console.log('finish')
      //   if (that.track.chunks[nextChunkId]) {
      //     that.currentChunk = that.track.chunks[nextChunkId]
      //     that.currentChunk.player.chunkSurfer.play()
      //   }
      // })

      // chunk.player.chunkSurfer.on('audioprocess', function () {
      //   if (chunk.player.seek) {
      //     return
      //   }
      //   let playedTime = chunk.player.chunkSurfer.getCurrentTime()
      //   that.track.chunks.forEach(function (seekChunk) {
      //     if(Number(seekChunk.index) < Number(chunk.index)){
      //       playedTime = playedTime + seekChunk.duration
      //     }
      //   })
      //   that.playedTime = playedTime
      //   that.$emit('played', playedTime, 'audioprocess')
      // })

      // chunk.player.chunkSurfer.on('seek', function () {
      //   if (chunk.player.seek) {
      //     chunk.player.seek = false
      //     return
      //   }
      //   let playedTime = chunk.player.chunkSurfer.getCurrentTime()
      //   that.currentChunk = chunk
      //   that.track.chunks.forEach(function (seekChunk) {
      //     console.log('seeking ' + seekChunk.index)
      //     if(Number(seekChunk.index) < Number(chunk.index)){
      //       seekChunk.player.seek = true
      //       seekChunk.player.chunkSurfer.setCurrentTime(seekChunk.duration)
      //       playedTime = playedTime + seekChunk.duration
      //     } else if (Number(seekChunk.index)> Number(chunk.index)) {
      //       seekChunk.player.seek = true
      //       seekChunk.player.chunkSurfer.stop()
      //     }
      //   })
      //   if(that.play) {
      //     chunk.player.chunkSurfer.play()
      //   }
      //   that.playedTime = playedTime
      //   that.$emit('played', playedTime, 'seek')
      // })
      if (chunk.pcm) {
        console.log('loading peaks for ' + chunk.index)
        chunk.player.chunkSurfer.load(chunk.src, chunk.pcm)
      } else {
        chunk.player.chunkSurfer.load(chunk.src)
      }

      chunk.player.chunkSurfer.on('waveform-ready', function () {
        chunk.duration = chunk.player.chunkSurfer.getDuration()
        that.duration = that.duration + chunk.duration
        that.$emit('duration', that.duration)
        console.log('wave ready ' + chunk.index)
        if (!chunk.pcm) {
          var pcmData = chunk.player.chunkSurfer.exportPCM(1024, 10000, false)
          console.log('Chunk:' + chunk.index)
          console.log('pcm: ' + pcmData)
          console.log('')
          console.log('')
        }
      })
      chunk.player.chunkSurfer.on('ready', function () {
        console.log('ready ' + chunk.index)
        chunk.duration = chunk.player.chunkSurfer.getDuration()
        that.duration = that.duration + chunk.duration
        that.$emit('duration', that.duration)
        console.log('wave ready ' + chunk.index)
      })
    })
    this.currentChunk = this.track.chunks[0]
  },
  watch: {
    play: function (play) {
      if (play) { // So there is aregistered user interaction on each wavesurfer
        if (this.firstPlay) {
          this.track.chunks.forEach(function (seekChunk) {
            seekChunk.player.chunkSurfer.play()
            seekChunk.player.chunkSurfer.stop()
          })
          this.firstPlay = false
        }
        this.currentChunk.player.chunkSurfer.play()
      } else {
        this.currentChunk.player.chunkSurfer.pause()
      }
    }
  }
}
</script>
