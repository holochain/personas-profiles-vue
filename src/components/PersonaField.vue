<template>
  <v-container class="fill-height ma-0 pa-0" fluid>
    <v-row align="center" justify="start">
      <v-col cols="1" align="center" justify="center" class="pa-1">
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
      </v-col>
      <v-col :sm="4" :md="4" :lg="4">
        <v-autocomplete
         label="Select a Field Name"
         :hint="!isEditing ? 'Click the icon to edit this field' : 'Click the tick to save this field'"
         :disabled="!isEditing"
         :items="fieldNames"
         item-text="fieldName"
         item-value="fieldType"
         :search-input.sync="searchInput"
         persistent-hint
         @change="change"
         v-model="selected"
         return-object>
       </v-autocomplete>
      </v-col>
      <v-col :sm="7" :md="7" :lg="7" align="center">
        <v-text-field v-model="selectedData" id="showSingleLineTextField" :disabled="!isEditing" label="Enter Field Value" :hint="'Enter your ' + searchInput" persistent-hint v-if="showSingleLineTextField"></v-text-field>
        <v-image-input v-model="selectedData" :disabled="!isEditing" :image-quality="0.85" clearable image-format="jpeg,png" v-if="showImage && isEditing" />
        <v-img :src="selectedData" v-if="showImage && !isEditing" />
        <v-image-input v-model="selectedData" :disabled="!isEditing" :image-quality="0.85" clearable image-format="jpeg,png" v-if="showThumbnail && isEditing" :image-height="100" :image-width="100" />
        <v-img :src="selectedData" height="100px" width="100px" v-if="showThumbnail && !isEditing" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VImageInput from 'vuetify-image-input/a-la-carte'
import { curatedFieldNames } from '../../test-data/curated-field-names.js'

export default {
  name: 'PersonaField',
  components: {
    VImageInput
  },
  data () {
    return {
      fieldNames: curatedFieldNames,
      isEditing: this.newField,
      selected: [],
      searchInput: '',
      selectedData: {},
      showSingleLineTextField: false,
      showImage: false,
      showThumbnail: false,
      showBigPhoto: false,
      selectedPersonaField: this.personaFieldValue
    }
  },
  methods: {
    change (field) {
      console.log(field)
    }
  },
  props: ['newField', 'personaFieldValue'],
  watch: {
    selected (field) {
      console.log(field.fieldType)
      if (field.fieldType === undefined) {
        this.isEditing = true
      }
      this.showSingleLineTextField = field.fieldType === 'singleLineText'
      this.showImage = field.fieldType === 'image'
      this.showThumbnail = field.fieldType === 'thumbnail'
      this.showBigPhoto = field.fieldType === 'bigPhoto'
      console.log(this.showSingleLineTextField)
    },
    isEditing (save) {
      console.log('save ' + save)
      if (!save) {
        console.log('Saving ')
        console.log(this.selected)
        console.log(' data ')
        console.log(this.selectedData)
      }
    }
  },
  mounted () {
    if (this.personaFieldValue) {
      let fieldName = this.selectedPersonaField.fieldName
      let fieldType = this.selectedPersonaField.fieldType
      console.log({ fieldName: fieldName, fieldType: fieldType })
      this.selected = { fieldName: fieldName, fieldType: fieldType }
      this.selectedData = this.selectedPersonaField.fieldValue
    }
  }
}
</script>

<style lang="sass">
  //
</style>
