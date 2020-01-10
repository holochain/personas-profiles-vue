<template>
  <v-container fluid>
    <v-app-bar app clipped-left>
      <v-toolbar>
        <v-toolbar-title>Personas 🇦🇺</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="addPersona()">
          <v-icon>mdi-plus</v-icon>
          Persona
        </v-btn>
      </v-toolbar>
    </v-app-bar>
    <v-row dense>
      <v-col v-for="(persona) in personas" :key="persona.id" cols="6">
        <persona-card :persona="persona" @delete-persona="deletePersona"/>
      </v-col>
    </v-row>
    <v-footer app>
      <span>Holochain</span>
    </v-footer>
  </v-container>
</template>

<script>
import PersonaCard from '../components/PersonaCard.vue'
import { personas, newPersona } from '../../test-data/personas.js'

export default {
  name: 'Personas',
  components: {
    PersonaCard
  },
  data () {
    return {
      personas: personas
    }
  },
  methods: {
    addPersona: function () {
      console.log('addPersona')
      this.personas.push(newPersona)
    },
    deletePersona: function (persona) {
      console.log('deletePersona')
      console.log(persona)
      let personaId = persona.id
      this.personas = this.personas.filter(function (persona) {
        return persona.id !== personaId
      })
    }
  }
}
</script>
