<template>
  <v-card tile height="100%" width="100%">
    <v-app-bar app clipped-left>
      <v-toolbar>
        <v-toolbar-title>Profiles</v-toolbar-title>
      </v-toolbar>
    </v-app-bar>
    <v-row align="start">
      <profile-card :profile="profile" :personas="personas"/>
    </v-row>
    <v-footer app>
      <span>Holochain</span>
    </v-footer>
  </v-card>
</template>

<script>
import { profiles } from '../../test-data/profiles.js'
import { personas } from '../../test-data/personas.js'
import ProfileCard from '../components/ProfileCard.vue'

export default {
  name: 'Profiles',
  components: {
    ProfileCard
  },
  data () {
    return {
      personas: personas,
      profile: profiles[0]
    }
  }
}
</script>
