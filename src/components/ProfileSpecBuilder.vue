<template>
  <v-card class="mx-auto">
    <v-list-item>
     <v-list-item-avatar>
       <template>
        <v-slide-x-reverse-transition mode="out-in">
          <v-icon
            large
            class="ml-1"
            :key="`icon-${isEditing}`"
            :color="isEditing ? 'success' : 'info'"
            @click="isEditing = !isEditing"
            v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'">
          </v-icon>
        </v-slide-x-reverse-transition>
      </template>
     </v-list-item-avatar>
     <v-list-item-content>
       <v-text-field v-model="profileSpecName" class="ml-2" :disabled="!isEditing" label="Profile Spec Name" :hint="'Enter Profile Spec Name'" persistent-hint v-if="isEditing"></v-text-field>
       <v-list-item-title class="headline" v-if="!isEditing">Profile Spec - {{ profileSpecName }}</v-list-item-title>
       <v-list-item-subtitle></v-list-item-subtitle>
     </v-list-item-content>
     <v-list-item-action v-if="isEditing">
       <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-icon
              key="icon-delete"
              color="error"
              v-on="on">mdi-delete
            </v-icon>
          </template>
          <v-card>
            <v-card-title class="headline">Delete the Profile Spec</v-card-title>
            <v-card-text>This will remove {{profileSpecName}}.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
              <v-btn color="green darken-1" text @click="deleteSpec(profileSpec)">Proceed</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
     </v-list-item-action>
     <v-list-item-action>
       <v-btn text @click="addSpecField(profileSpec)">
         <v-icon>mdi-plus</v-icon>
         Add Field
       </v-btn>
     </v-list-item-action>
     <v-list-item-action>
       <v-dialog v-model="addProfileDialog" persistent max-width="390">
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon>mdi-clipboard-flow-outline</v-icon>
              Add Profile from Spec
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">Add a new Profile from Spec</v-card-title>
            <v-list-item>
              <v-list-item-content>
                <v-col cols="12">
                  <v-card-text>
                    This will create a profile from spec:
                  </v-card-text>
                  <v-card-text class="font-weight-bold mt-n5">
                    {{profileSpecName}}
                  </v-card-text>
                  <v-text-field v-model="profileName" label="Profile Name (defaults to Spec Name)" hint="Your recognisable name for the profile." persistent-hint class="ml-4"></v-text-field>
                </v-col>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="addProfileDialog = false">Cancel</v-btn>
              <v-btn color="green darken-1" text @click="addProfileFromSpec(profileSpec)">Proceed</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
     </v-list-item-action>
    </v-list-item>
    <v-container class="fill-height ma-0 pl-5" fluid>
      <v-col v-for="(field) in currentProfileSpecFields" :key="field.fieldName" cols="12">
        <profile-spec-field :profileSpecFieldValue="field" @save-profile-spec-field="saveField" @delete-profile-spec-field="deleteField"/>
      </v-col>
    </v-container>
  </v-card>
</template>

<script>
import ProfileSpecField from './ProfileSpecField.vue'
export default {
  name: 'ProfileSpecBuilder',
  components: {
    ProfileSpecField
  },
  props: ['newField', 'profileSpec'],
  data () {
    return {
      currentProfileSpecFields: this.profileSpec.specFields,
      profileSpecName: this.profileSpec.name,
      profileName: '',
      isEditing: '',
      dialog: false,
      addProfileDialog: false
    }
  },
  methods: {
    addSpecField (spec) {
      console.log(spec)
      this.profileSpec.specFields.push({})
    },
    addProfileFromSpec (spec) {
      console.log('addProfileFromSpec')
      this.profileName = this.profileSpec.name.toString()
      this.addProfileDialog = false
    },
    saveField (field, fieldData) {
      console.log('saveField')
      field.profileSpecId = this.profileSpec.id
      console.log(field.fieldName)
      // fields for Holochain entry
      // console.log(this.persona)
      // console.log(field)
      // console.log(fieldData)
    },
    deleteField (field) {
      console.log('delete field')
      let fieldName = field.fieldName
      console.log(fieldName)
      this.profileSpec.specFields = this.profileSpec.specFields.filter(function (field) {
        return field.fieldName !== fieldName
      })
    },
    deleteSpec (spec) {
      this.$emit('delete-profile-spec', spec)
    }
  }
}
</script>
