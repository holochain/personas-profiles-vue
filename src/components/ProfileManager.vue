<template>
  <v-card class="mx-auto" flat height="100%" width="900px">
    <v-toolbar color="white">
      <v-toolbar-title>@philt3r +61 417 301 024</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="navigate('#bio')">
        <v-icon>mdi-face</v-icon>
        Bio
      </v-btn>
      <v-btn text @click="navigate('#mixes')">
        <v-icon>mdi-playlist-play</v-icon>
        Mixes
      </v-btn>
      <v-btn text @click="navigate('#videos')">
        <v-icon>mdi-library-video</v-icon>
        Videos
      </v-btn>
      <v-btn text @click="navigate('#photos')">
        <v-icon>mdi-camera</v-icon>
        Photos
      </v-btn>
    </v-toolbar>
    <v-toolbar v-if="isEditing">
      <v-toolbar-title>Big Picture</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-autocomplete flat hide-details class="mx-4" :items="mappings"></v-autocomplete>
    </v-toolbar>
    <v-img
      class="white--text align-end"
      height="400px"
      src="Psyland-Main-Stage.jpg">
    </v-img>
    <v-toolbar v-if="isEditing">
      <v-toolbar-title>Bio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-autocomplete flat hide-details class="mx-4" :items="mappings" select="@philt3r - Big Picture"></v-autocomplete>
    </v-toolbar>
    <v-container fluid class="pa-6" id="bio">
      <v-row justify="center">
        <p>@philt3r is not a metaphor for a side affect, but rather a side affect of a metamorphosis. For a decade, he has planted smiles and swivelled dials along that great stretch of party paradise that is the east-coast of Australia. @philt3r’s sets started out spanning more genres than a well thought out German street parade, but now it's techno, phat, dark, dystopic TECHNO!</p>
        <p>@philt3r can read a crowd better than airport security, and take them further up than their overpriced tickets. But that's what we like about @philt3r, his lack of tickets on himself. A regular on the festival scene, he is a resident at Psyland, and plays heaps of festivals inc Esoteric Festival, Dragon Dreaming (4x), Rainbow Serpent Festival, Burning Seed (6x), Squared Senses (2x), earthcore, Local Produce (2x), Sugarloaf, Digital HotDog (3x) and ShipReKt along with club gigs across states. @philt3r has also guest DJ’d on KISS FM for B-Tham’s show Friction.</p>
        <p>@philt3r has released 2 previous EP’s and is hard at work on his new EP “Agents of Anarchy”, a dark dystopic minimal techno EP using the power of music to bring about positive change in society.</p>
        <p>So get your 'TECHNO!' on with @philt3r at your next attempt to escape reality and keep your ears open for </p>
        <img src="agents-of-anarchy-symbol.png" alt="agents of anarchy symbol" />
      </v-row>
    </v-container>
    <v-toolbar v-if="isEditing">
      <v-toolbar-title>Mixes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-autocomplete flat hide-details class="mx-4" :items="mappings"></v-autocomplete>
    </v-toolbar>
    <v-container fluid class="pa-6" id="mixes">
      <v-row>
        <h2>Mixes</h2>
        <v-col v-for="(track) in tracks" :key="track.id" cols="12">
          <track-card ref="trackCard" :track="track" @playing="pauseOtherTracks" />
        </v-col>
      </v-row>
    </v-container>
    <v-toolbar v-if="isEditing">
      <v-toolbar-title>Videos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-autocomplete flat hide-details class="mx-4" :items="mappings"></v-autocomplete>
    </v-toolbar>
    <v-container fluid class="pa-6" id="videos">
      <v-row>
        <h2>Videos</h2>
        <v-col v-for="(video) in videos" :key="video.id" cols="12">
          <video style="display:block; margin: 0 auto;" :src="video.src" type="video/mpeg" width="800">
                    <!-- Here be the video -->
          </video>
        </v-col>
      </v-row>
    </v-container>
    <v-footer app class="font-weight-medium">
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Profile Manager - https://philt3r.com{{ profileTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon
          :key="`icon-${isEditing}`"
          @click="isEditing = !isEditing"
          v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'">
        </v-icon>
        <v-btn icon href="https://philt3r.com" target="_blank">
          <v-icon>mdi-web</v-icon>
        </v-btn>
        <v-btn icon :to="{name: 'persona'}">
          <v-icon>mdi-account-edit</v-icon>
        </v-btn>
      </v-toolbar>
    </v-footer>
  </v-card>
</template>

<script>
import TrackCard from '../components/TrackCard.vue'
import { mappings } from '../../test-data/profile-manager.js'
import { items } from '../../test-data/music-manager.js'

export default {
  name: 'ProfileManager',
  components: {
    TrackCard
  },
  data () {
    return {
      isEditing: false,
      mappings: mappings,
      tracks: items[0].children[0].tracks,
      videos: items[0].children[1].videos
    }
  },
  props: ['profileTitle'],
  methods: {
    navigate (id) {
      this.$vuetify.goTo(id, { duration: 1, offset: 50 })
    },
    pauseOtherTracks: function (trackId) {
      let that = this
      this.tracks.forEach(function (track, i) {
        if (trackId !== track.id) {
          that.$refs.trackCard[i].pausedByOtherTrack()
        }
      })
    }
  }
}
</script>
