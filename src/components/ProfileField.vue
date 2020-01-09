<template>
  <v-card width="100%" flat class="ma-0 pa-0">
    <profile-field-image :profileName="profileName" :profileFieldValue="profileFieldValue" :fieldType="fieldType" v-if="fieldType === 'thumbnail' || fieldType === 'image'"/>
    <profile-field-text :profileName="profileName" :profileFieldValue="profileFieldValue" :fieldType="fieldType" v-if="fieldType === 'singleLineText'"/>
  </v-card>
</template>

<script>
import ProfileFieldImage from './ProfileFieldImage.vue'
import ProfileFieldText from './ProfileFieldText.vue'
export default {
  name: 'ProfileField',
  components: {
    ProfileFieldImage,
    ProfileFieldText
  },
  props: ['fieldType', 'profileName', 'profileFieldValue']
}
</script>
