<template>
  <v-card outlined tile height="100%" width="100%">
    <v-row no-gutters>
      <v-col cols="4" class="ma-1 pa-1">
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Images</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-folder-plus</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-upload</v-icon>
          </v-btn>
        </v-toolbar>
        <v-treeview
          v-model="tree"
          :open="open"
          :items="items"
          activatable
          item-key="name"
          open-on-click>
          <template v-slot:prepend="{ item, open }">
            <v-btn icon @click="listPhotos(item)">
              <v-icon>
                {{ open ? 'mdi-folder-open' : 'mdi-folder-image' }}
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:label="{ item }">
            <v-btn icon @click="listPhotos(item)">
              {{item.name}}
            </v-btn>
          </template>
        </v-treeview>
      </v-col>
      <v-divider v-if="tree" vertical></v-divider>
      <v-col class="ma-1 pa-1">
        <v-row>
          <v-col v-for="photo in photos" :key="photo.name" class="d-flex child-flex" cols="4">
            <v-card flat tile class="d-flex">
              <v-img v-if="photo.title!=='mdi-upload'" aspect-ratio="1" class="grey lighten-2 white--text align-end" icon :key="`icon-${photo.id}`" @click="photo.footerVisible = !photo.footerVisible">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
                <v-card-title>{{photo.title}}</v-card-title>
              </v-img>
              <v-img v-else aspect-ratio="1" class="grey lighten-2 white--text align-end">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center">
                    <v-btn icon :key="`icon-${photo.id}`" @click="photo.footerVisible = !photo.footerVisible">
                      <v-icon class="material-icons" style="font-size: 100px">mdi-upload</v-icon>
                    </v-btn>
                  </v-row>
                </template>
                <v-card-title>Upload a Photo</v-card-title>
              </v-img>
            </v-card>
            <v-footer :key="`footer-${photo.id}`" app class="font-weight-medium" v-if="photo.footerVisible">
              <v-row no-gutters align-content="center">
                <p>footer {{photo.title}}</p>
              </v-row>
            </v-footer>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ImageManager',
  data: () => ({
    open: ['public'],
    files: {
      png: 'mdi-file-image',
      jpg: 'mdi-file-image'
    },
    tree: [],
    uploadPhoto: {
      title: 'mdi-upload',
      footerVisible: false
    },
    photos: [{
      title: 'mdi-upload',
      footerVisible: false
    }]
  }),
  methods: {
    listPhotos (item) {
      console.log(item.path)
      if (item.photos) {
        console.log(item.photos)
        this.photos = item.photos
        if (this.photos[this.photos.length - 1].title !== 'mdi-upload') {
          this.photos.push(this.uploadPhoto)
        }
      } else {
        this.photos = [this.uploadPhoto]
      }
    }
  },
  props: ['items']
}
</script>
