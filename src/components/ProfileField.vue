<template>
  <v-card width="100%" class="fill-height" fluid>
    <v-row align="center" justify="start" class="pa-1">
      <v-col cols="12">
        <v-combobox
          v-model="profileData"
          :items="thumbnailList"
          :search-input.sync="search"
          chips
          @change="change"
          color="blue-grey lighten-2"
          :label="profileFieldValue.fieldName + selectedPersona"
          item-text="fieldName"
          item-value="anchor"
          return-object
        >
        <!-- <template v-slot:no-data>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template> -->
          <template v-slot:selection="data">
            <v-list-item-avatar left>
              <img :src="data.item.fieldValue">
            </v-list-item-avatar>
          </template>
          <template v-slot:item="data">
            <template v-if="typeof data.item !== 'object'">
              <v-list-item-content v-text="data.item.fieldName"></v-list-item-content>
            </template>
            <template v-if="data.item.anchor !== ''">
              <v-list-item-avatar>
                <img :src="data.item.fieldValue">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="data.item.fieldName"></v-list-item-title>
                <v-list-item-subtitle v-html="'Persona - ' + data.item.personaTitle"></v-list-item-subtitle>
              </v-list-item-content>
            </template>
            <template v-else>
              <v-list-item-avatar>
                <v-icon>mdi-image-plus</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="'Upload a new ' + addThumbnailItem.fieldName"></v-list-item-title>
                <v-list-item-subtitle v-html="'Persona - ' + data.item.personaTitle"></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </template>
        </v-combobox>
      </v-col>
    </v-row>
    <v-dialog v-model="addThumbnailDialog" persistent max-width="390">
      <v-card>
       <v-card-title class="headline">Add a new {{addThumbnailItem.fieldName}}</v-card-title>
       <v-list-item class="d-flex justify-center">
         <v-image-input v-model="addThumbnailItem.fieldValue" :image-quality="0.85" clearable image-format="jpeg,png" :image-height="100" :image-width="100"/>
       </v-list-item>
       <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn color="green darken-1" text @click="addThumbnailDialog = false">Done</v-btn>
       </v-card-actions>
     </v-card>
   </v-dialog>
 </v-card>
</template>

<script>
import VImageInput from 'vuetify-image-input/a-la-carte'

import { personas } from '../../test-data/personas.js'
// import { profiles } from '../../test-data/profiles.js'

let personaThumbnails = personas.filter((persona) => persona.fields.some((field) => field.fieldType === 'thumbnail'))
  .map(persona => {
    let personaThumbnail = { ...persona }
    let thumbNailFields = []
    personaThumbnail.fields.filter((field) => field.fieldType === 'thumbnail').forEach(function (field) {
      thumbNailFields.push({ anchor: field.anchor, personaTitle: personaThumbnail.title, fieldName: field.fieldName, fieldValue: field.fieldValue })
    })
    return thumbNailFields
  })
var thumbNailFields = [].concat.apply([], personaThumbnails)
console.log(thumbNailFields)
export default {
  name: 'ProfileField',
  components: {
    VImageInput
  },
  data () {
    return {
      thumbnailList: thumbNailFields,
      selectedPersona: '',
      personasImages: [],
      profileData: null,
      search: null,
      addThumbnailDialog: false,
      addThumbnailItem: { anchor: '', personaTitle: this.profileName, fieldName: this.profileFieldValue.fieldName, fieldValue: '' }
    }
  },
  mounted () {
    this.thumbnailList.push(this.addThumbnailItem)
    console.log(this.thumbnailList)
  },
  methods: {
    change (field) {
      console.log('change')
      console.log(field)
      this.selectedPersona = ' (' + field.personaTitle + '-' + field.fieldName + ')'
      if (field.anchor === '') {
        this.addThumbnailDialog = true
      }
      let that = this
      this.$nextTick(() => {
        that.$emit('profile-field-changed', field)
      })
    },
    remove (item) {
      console.log('remove')
      this.$emit('profile-field-changed', this.selected)
      this.profileData = null
    }
  },
  props: ['profileName', 'profileFieldValue'],
  watch: {
    selected (response) {
      console.log(response)
    }
  }
}
</script>

<style lang="sass">
  //
</style>
