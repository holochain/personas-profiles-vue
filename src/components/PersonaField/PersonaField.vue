<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col>
        <v-autocomplete
         label="Field Name"
         :items="curatedFieldNames"
         item-text="fieldName"
         item-value="fieldType"
         v-model="selected">
       </v-autocomplete>
      </v-col>
      <v-col>
        <v-text-field id="" label="Field Value" v-if="showSingleLineTextField"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PersonaField',
  data () {
    return {
      selected:[],
      showSingleLineTextField: false
    }
  },
  props: ['curatedFieldNames'],
  watch: {
    selected (fieldType) {
      console.log(fieldType);
      this.showSingleLineTextField = fieldType === 'singleLineText'
    }
  }
}
</script>

<style lang="sass">
  //
</style>
