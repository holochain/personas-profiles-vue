<template>
  <v-card class="mx-auto">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Persona Manager - {{ profileTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :to="{name: 'image-manager'}">
        <v-icon>mdi-circle-edit-outline</v-icon>
      </v-btn>
    </v-toolbar>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
    </v-img>
    <v-container class="fill-height ma-0 pl-5" fluid>
      <v-row>
      </v-row>
      <v-row>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'PersonaCard',
  components: {

  },
  props: ['profileTitle', 'cardImage']
}
</script>
