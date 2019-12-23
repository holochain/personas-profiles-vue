<template>
  <v-card class="mx-auto">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Persona Manager - {{ personaTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :to="{name: 'image-manager'}">
        <v-icon>mdi-image-album</v-icon>
      </v-btn>
      <v-btn icon :to="{name: 'video-manager'}">
        <v-icon>mdi-library-video</v-icon>
      </v-btn>
      <v-btn icon :to="{name: 'music-manager'}">
        <v-icon>mdi-library-music</v-icon>
      </v-btn>
    </v-toolbar>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
    </v-img>
    <v-container class="fill-height ma-0 pl-5" fluid>
      <v-row>
        <persona-field :newField="false" :curatedFieldNames="curatedFieldNames"/>
      </v-row>
      <v-row>
        <persona-field :newField="true" :curatedFieldNames="curatedFieldNames" />
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import PersonaField from './PersonaField'
import { curatedFieldNames } from '../../test-data/persona-card.js'

export default {
  name: 'PersonaCard',
  components: {
    PersonaField
  },
  data () {
    return {
      curatedFieldNames: curatedFieldNames
    }
  },
  props: ['personaTitle']
}
</script>
