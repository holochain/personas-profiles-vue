<template>
  <v-card class="mx-auto">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Persona - Family</v-card-title>
    </v-img>
    <v-container class="fill-height ma-0 pl-5" fluid>
      <v-row>
        <persona-field :isEditing="true" :curatedFieldNames="curatedFieldNames"/>
      </v-row>
      <v-row>
        <persona-field :isEditing="true" :curatedFieldNames="curatedFieldNames" />
      </v-row>
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
  data () {
    return {
      curatedFieldNames: [{ fieldName: 'Full Name', fieldType: 'singleLineText' }, { fieldName: 'Avatar', fieldType: 'thumbnail' }, { fieldName: 'Big Picture', fieldType: 'image' }]
    }
  }
}
</script>
