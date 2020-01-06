<template>
  <v-container fluid>
    <v-row dense>
      <v-col  :sm="12" :md="6" :lg="6">
        <persona-card :persona="personas[0]" />
      </v-col>
    </v-row>
    <v-footer app>
      <span>Holochain</span>
    </v-footer>
  </v-container>
</template>

<script>
import PersonaCard from '../components/PersonaCard.vue'
import { personas } from '../../test-data/personas.js'

export default {
  name: 'Personas',
  components: {
    PersonaCard
  },
  data () {
    return {
      personas: personas
    }
  }
}
</script>
