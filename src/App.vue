<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left>
      <v-toolbar-title>Personas & Profiles 🇦🇺</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height>
          <router-view :key="currentPath"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    currentPath: ''
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
  mounted () {
    this.currentPath = this.$route.path
  }
}
</script>
