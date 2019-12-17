import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { VApp } from 'vuetify/lib';
import { VContainer } from 'vuetify/lib';

import { makeDecorator } from '@storybook/addons'
import deepmerge from 'deepmerge'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import '../../src/plugins/vuetify';

Vue.use(Vuetify)

export default makeDecorator({
  name: 'withVuetify',
  parameterName: 'vuetify',
  wrapper: (storyFn, context, { parameters = {} }) => {
    // Reduce to one new URL?
    const searchParams = new URL(window.location).searchParams
    const dark = true // searchParams.get('eyes-variation') === 'dark'
    const rtl = searchParams.get('eyes-variation') === 'rtl'
    const vuetify = new Vuetify(deepmerge({
      rtl,
      theme: { dark }
    }, parameters))
    const WrappedComponent = storyFn(context)

    return Vue.extend({
      vuetify,
      components: { VApp, VContainer, WrappedComponent },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped-component />
          </v-container>
        </v-app>
      `
    })
  }
})
