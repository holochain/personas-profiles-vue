<template>
  <v-card class="mx-auto">
    <v-list-item>
     <v-list-item-avatar>
       <v-img src="/img/holochain-circle.png"></v-img>
     </v-list-item-avatar>
     <v-list-item-content>
       <v-list-item-title class="headline">Persona - {{ personaTitle }}</v-list-item-title>
       <v-list-item-subtitle></v-list-item-subtitle>
     </v-list-item-content>
     <v-list-item-action>
       <v-btn icon :to="{name: 'image-manager'}">
         <v-icon>mdi-image-album</v-icon>
       </v-btn>
     </v-list-item-action>
     <v-list-item-action>
       <v-btn icon :to="{name: 'video-manager'}">
         <v-icon>mdi-library-video</v-icon>
       </v-btn>
     </v-list-item-action>
     <v-list-item-action>
       <v-btn icon :to="{name: 'music-manager'}">
         <v-icon>mdi-library-music</v-icon>
       </v-btn>
     </v-list-item-action>
   </v-list-item>
    <!-- <v-img
      class="white--text align-end"
      height="200px"
      src="/img/holochain-circle.png">
    </v-img> -->
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
import { curatedFieldNames } from '../../test-data/curated-field-names.js'

export default {
  name: 'PersonaCard',
  components: {
    PersonaField
  },
  data: () => ({
    curatedFieldNames: curatedFieldNames
  }),
  props: ['personaTitle', 'cardImage']
}
</script>
