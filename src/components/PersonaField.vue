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
        <v-text-field id="showSingleLineTextField" label="Field Value" v-if="showSingleLineTextField"></v-text-field>
        <v-image-input v-model="imageData" :image-quality="0.85" clearable image-format="jpeg" v-if="showImage"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VImageInput from 'vuetify-image-input/a-la-carte'
export default {
  name: 'PersonaField',
  components: {
    VImageInput
  },
  data () {
    return {
      selected: [],
      imageData: '',
      showSingleLineTextField: false,
      showImage: false
    }
  },
  props: ['curatedFieldNames'],
  watch: {
    selected (fieldType) {
      console.log(fieldType)
      this.showSingleLineTextField = fieldType === 'singleLineText'
      this.showImage = fieldType === 'image'
    }
  }
}
</script>

<style lang="sass">
  //
</style>
