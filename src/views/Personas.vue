<template>
  <v-container fluid>
    <v-row dense>
      <v-col  :sm="12" :md="6" :lg="6">
        <persona-card />
      </v-col>
      <v-col  :sm="12" :md="6" :lg="6">
        <persona-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PersonaCard from '../components/PersonaCard.vue'

export default {
  name: 'Persona',
  components: {
    PersonaCard
  }
}
</script>
