<template>
  <persona-field :curatedFieldNames="[{ fieldName: 'Full Name', fieldType: 'singleLineText' },{ fieldName: 'Avatar', fieldType: 'image' }]"/>
</template>

<script>
import PersonaField from '../components/PersonaField.vue'

export default {
  name: 'Persona',

  components: {
    PersonaField
  }
}
</script>
