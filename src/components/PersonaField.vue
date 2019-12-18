<template>
  <v-container class="fill-height ma-0 pa-0" fluid>
    <v-row align="center" justify="center">
      <v-col cols="1" align="center" class="pa-1">
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
         :items="curatedFieldNames"
         item-text="fieldName"
         item-value="fieldType"
         :search-input.sync="searchInput"
         persistent-hint
         v-model="selected">
       </v-autocomplete>
      </v-col>
      <v-col :sm="7" :md="7" :lg="7" align="center">
        <v-text-field id="showSingleLineTextField" :disabled="!isEditing" label="Enter Field Value" :hint="'Enter your ' + searchInput" persistent-hint v-if="showSingleLineTextField"></v-text-field>
        <v-image-input v-model="imageData" :disabled="!isEditing" :image-quality="0.85" clearable image-format="jpeg,png" v-if="showImage" />
        <v-image-input v-model="thumbnailData" :disabled="!isEditing" :image-quality="0.85" clearable image-format="jpeg,png" v-if="showThumbnail" :image-height="100" :image-width="100" />
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
      isEditing: this.newField,
      selected: [],
      searchInput: '',
      imageData: '',
      thumbnailData: '',
      showSingleLineTextField: false,
      showImage: false,
      showThumbnail: false
    }
  },
  props: ['curatedFieldNames', 'newField'],
  watch: {
    selected (fieldType) {
      console.log(fieldType)
      this.showSingleLineTextField = fieldType === 'singleLineText'
      this.showImage = fieldType === 'image'
      this.showThumbnail = fieldType === 'thumbnail'
    }
  }
}
</script>

<style lang="sass">
  //
</style>
