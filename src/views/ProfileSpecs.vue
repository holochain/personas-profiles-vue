<template>
  <v-container fluid>
    <v-app-bar app clipped-left>
      <v-toolbar>
        <v-toolbar-title>Profile Specs</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="addProfileSpec">
          <v-icon>mdi-plus</v-icon>
          Profile Spec
        </v-btn>
      </v-toolbar>
    </v-app-bar>
    <v-row dense>
      <v-col v-for="(profileSpec) in profileSpecs" :key="profileSpec.id" cols="6">
        <profile-spec-builder :key="profileSpec.id" :profileSpec="profileSpec" @delete-profile-spec="deleteProfileSpec"/>
      </v-col>
    </v-row>
    <v-footer app>
      <span>Holochain</span>
    </v-footer>
  </v-container>
</template>

<script>
import ProfileSpecBuilder from '../components/ProfileSpecBuilder.vue'
import { profileSpecs, newProfileSpec } from '../../test-data/profile-specs.js'

export default {
  name: 'ProfileSpecs',
  components: {
    ProfileSpecBuilder
  },
  data () {
    return {
      profileSpecs: profileSpecs
    }
  },
  methods: {
    addProfileSpec: function () {
      console.log('addProfileSpec')
      this.profileSpecs.push(newProfileSpec)
    },
    deleteProfileSpec: function (profileSpec) {
      console.log('deleteProfileSpec')
      let profileSpecId = profileSpec.id
      this.profileSpecs = this.profileSpecs.filter(function (profileSpec) {
        return profileSpec.id !== profileSpecId
      })
    }
  }
}
</script>
