<template>
  <profile-manager />
</template>

<script>
import ProfileManager from '../components/ProfileManager.vue'

export default {
  name: 'Profile',
  components: {
    ProfileManager
  },
  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
