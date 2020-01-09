<template>
  <v-card class="mx-auto pb-3 pt-2">
    <v-list-item-title class="headline ml-2 mb-2">Profile - {{ profile.name }}</v-list-item-title>
    <v-col v-for="(field) in profileFields" :key="field.fieldName" cols="12" class="ma-0 pt-0 pb-1">
      <profile-field :profileName="profile.name" :profileFieldValue="field" :fieldType="field.fieldType" @save-profile-field="saveField" @delete-profile-field="deleteField"/>
    </v-col>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="green darken-1" text>Done</v-btn>
    </v-card-actions>
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
