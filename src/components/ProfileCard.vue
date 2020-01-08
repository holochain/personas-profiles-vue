<template>
  <v-card class="mx-auto">
    <v-list-item>
     <v-list-item-avatar>
       <v-img :src="avatarData" class="ml-5"></v-img>
       <template>
        <v-slide-x-reverse-transition mode="out-in">
          <v-icon
            large
            class="ml-1 "
            :key="`icon-${isEditing}`"
            :color="isEditing ? 'success' : 'info'"
            @click="isEditing = !isEditing"
            v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'">
          </v-icon>
        </v-slide-x-reverse-transition>
      </template>
     </v-list-item-avatar>
     <v-list-item-content>
       <v-text-field v-model="profile.title" id="showSingleLineTextField" class="ml-2" :disabled="!isEditing" label="Enter Field Value" :hint="'Enter your Profile Title'" persistent-hint v-if="isEditing"></v-text-field>
       <v-list-item-title class="headline ml-2" v-if="!isEditing">Profile - {{ profile.title }}</v-list-item-title>
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
            <v-card-title class="headline">Delete the profile</v-card-title>
            <v-card-text>This will remove {{profile.title}}.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
              <v-btn color="green darken-1" text @click="deleteProfile(profile)">Proceed</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
     </v-list-item-action>
     <v-list-item-action>
       <v-btn icon @click="addProfileField(profile)">
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
      <v-col v-for="(field) in profileFields" :key="field.fieldName" cols="12">
        <profile-field :profileFieldValue="field" @save-profile-field="saveField" @delete-profile-field="deleteField"/>
      </v-col>
    </v-container>
  </v-card>
</template>

<script>
import ProfileField from './ProfileField'
export default {
  name: 'ProfileCard',
  components: {
    ProfileField
  },
  props: ['profile'],
  data () {
    return {
      profileFields: this.profile.fields,
      isEditing: '',
      avatarData: this.profile.fields[0].fieldValue,
      dialog: false
    }
  },
  methods: {
    addProfileField (profile) {
      console.log(profile)
      this.profile.fields.push({})
    },
    saveField (field, fieldData) {
      field.profileId = this.profile.id
      console.log(field.fieldName)
      if (field.fieldName === 'Avatar') {
        this.avatarData = fieldData
      }
      // fields for Holochain entry
      // console.log(this.profile)
      // console.log(field)
      console.log(fieldData)
    },
    deleteField (field) {
      console.log('delete field')
      let fieldName = field.fieldName
      console.log(fieldName)
      this.profileFields = this.profileFields.filter(function (field) {
        return field.fieldName !== fieldName
      })
    },
    deleteProfile (profile) {
      this.$emit('delete-profile', profile)
    }
  }
}
</script>
