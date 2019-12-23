<template>
  <v-container fluid>
    <v-row dense>
      <v-col  :sm="12" :md="6" :lg="6">
        <persona-card personaTitle="@philt3r" />
      </v-col>
      <v-col  :sm="12" :md="6" :lg="6">
        <persona-card personaTitle="Personal" />
      </v-col>
      <v-col  :sm="12" :md="6" :lg="6">
        <persona-card personaTitle="Professional" />
      </v-col>
    </v-row>
    <v-footer app>
      <span>Holochain</span>
    </v-footer>
  </v-container>
</template>

<script>
import PersonaCard from '../components/PersonaCard.vue'

export default {
  name: 'Home',

  components: {
    PersonaCard
  }
}
</script>
