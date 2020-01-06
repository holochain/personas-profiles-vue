<template>
  <v-card class="mx-auto">
    <v-list-item>
     <v-list-item-avatar>
       <template>
        <v-slide-x-reverse-transition mode="out-in">
          <v-icon
            :key="`icon-${isEditing}`"
            :color="isEditing ? 'success' : 'info'"
            @click="isEditing = !isEditing"
            v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'">
          </v-icon>
        </v-slide-x-reverse-transition>
      </template>
       <v-img :src="persona.fields[0].fieldValue"></v-img>
     </v-list-item-avatar>
     <v-list-item-content>
       <v-text-field v-model="persona.title" id="showSingleLineTextField" :disabled="!isEditing" label="Enter Field Value" :hint="'Enter your Persona Title'" persistent-hint v-if="isEditing"></v-text-field>

       <v-list-item-title class="headline" v-if="!isEditing">Persona - {{ persona.title }}</v-list-item-title>
       <v-list-item-subtitle></v-list-item-subtitle>
     </v-list-item-content>
     <v-list-item-action>
       <v-btn icon @click="addPersonaField(persona)">
         <v-icon>mdi-plus</v-icon>
       </v-btn>
     </v-list-item-action>
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
      <v-col v-for="(field) in personaFields" :key="field.fieldName" cols="12">
        <persona-field  :personaFieldValue="field"/>
      </v-col>
    </v-container>
  </v-card>
</template>

<script>
import PersonaField from './PersonaField'
export default {
  name: 'PersonaCard',
  components: {
    PersonaField
  },
  props: ['persona'],
  watch: {
    isEditing (save) {
      console.log('save ' + save)
      if (!save) {
        console.log('Saving Persona ')
        console.log(this.persona.title)
      }
    }
  },
  data () {
    return {
      personaFields: this.persona.fields,
      isEditing: ''
    }
  },
  methods: {
    addPersonaField (persona) {
      console.log(persona)
      this.persona.fields.push({})
    }
  }
}
</script>
