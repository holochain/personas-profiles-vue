<template>
  <v-card width="100%" class="fill-height" flat>
    <v-row align="center" justify="start" class="pa-1">
      <v-col cols="4">
        <v-autocomplete
          label="Select a Field Name"
          :hint="!isEditing ? 'Click the Edit icon to edit this field' : 'Click the tick icon to save this field'"
          :disabled="!isEditing"
          v-bind:items="autocompleteFieldNames"
          item-text="fieldName"
          item-value="anchor"
          :search-input.sync="searchInput"
          persistent-hint
          no-filter
          @change="change"
          v-model="selected"
          return-object>
       </v-autocomplete>
      </v-col>
      <v-col cols="8" align="center">
        <v-text-field v-model="selected.description" :disabled="!isEditing" label="Enter Reason" :hint="'Describe why you need ' + searchInput" persistent-hint ></v-text-field>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-slide-x-reverse-transition mode="out-in">
        <v-btn text :color="isEditing ? 'success' : 'info'" @click="isEditing = !isEditing">{{isEditing ? 'save' : 'edit'}}
          <v-icon
            :key="`icon-${isEditing}`"
            :color="isEditing ? 'success' : 'info'"
            v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'">
          </v-icon>
        </v-btn>
      </v-slide-x-reverse-transition>
      <v-slide-x-reverse-transition mode="out-in" v-if="isEditing">
        <v-dialog key="delete" v-model="dialog" persistent max-width="290">
           <template v-slot:activator="{ on }">
             <v-btn color="red darken-1" dark text v-on="on">Delete
               <v-icon
                 key="icon-delete" color="error">mdi-delete
               </v-icon>
             </v-btn>
           </template>
           <v-card>
             <v-card-title class="headline">Delete the field</v-card-title>
             <v-card-text>This will remove the {{this.selected.fieldName}} field from the profile spec.</v-card-text>
             <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
               <v-btn color="red darken-1" text @click="deleteField()">Proceed</v-btn>
             </v-card-actions>
           </v-card>
         </v-dialog>
      </v-slide-x-reverse-transition>
    </v-card-actions>
  </v-card>
</template>

<script>
import { fieldNames } from '../../test-data/field-names.js'

export default {
  name: 'ProfileSpecField',
  components: {
  },
  data () {
    return {
      dialog: false,
      autocompleteFieldNames: fieldNames,
      isEditing: this.newField,
      selected: [],
      searchInput: null,
      description: ''
    }
  },
  methods: {
    change (field) {
      console.log('change')
      console.log(field)
      let that = this
      this.$nextTick(() => {
        console.log(that.autocompleteFieldNames)
      })
    },
    deleteField () {
      console.log('delete')
      console.log(this.selectedPersonaField)
      this.dialog = false
      this.$emit('delete-profile-spec-field', this.selected)
    }
  },
  props: ['newField', 'profileSpecFieldValue'],
  watch: {
    selected (field) {
      // console.log(field.anchor)
      if (field.fieldName === undefined) {
        this.isEditing = true
      }
    },
    isEditing (save) {
      if (!save) {
        // console.log('Saving ')
        // console.log(this.selected)
        // console.log(' data ')
        // console.log(this.selectedData)
        this.$emit('save-profile-spec-field', this.selected, this.selectedData)
      }
    }
  },
  mounted () {
    if (this.profileSpecFieldValue) {
      let anchor = this.profileSpecFieldValue.anchor
      let fieldName = this.profileSpecFieldValue.fieldName
      let linkContract = this.profileSpecFieldValue.linkContract
      let description = this.profileSpecFieldValue.description
      this.selected = { anchor: anchor, fieldName: fieldName, linkContract: linkContract, description: description }
    }
  }
}
</script>

<style lang="sass">
  //
</style>
