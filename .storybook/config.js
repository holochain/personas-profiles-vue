// Imports
import { configure, addDecorator } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { withTemplate } from './addon-show-vue-markup'
import { withVuetify } from './addon-vuetify'
import './test'
import { VAutocomplete } from 'vuetify/lib';
import { VCard } from 'vuetify/lib';
import { VCardTitle } from 'vuetify/lib';
import { VCardActions } from 'vuetify/lib';
import { VCardText } from 'vuetify/lib';
import { VBtn } from 'vuetify/lib';
import { VSpacer } from 'vuetify/lib';
import { VTextField } from 'vuetify/lib';
import { VContainer } from 'vuetify/lib';
import { VCol } from 'vuetify/lib';
import { VRow } from 'vuetify/lib';

import Vue from 'vue'
Vue.component('v-autocomplete', VAutocomplete);
Vue.component('v-card', VCard);
Vue.component('v-card-title', VCardTitle);
Vue.component('v-card-actions', VCardActions);
Vue.component('v-card-text', VCardText);
Vue.component('v-btn', VBtn);
Vue.component('v-spacer', VSpacer);
Vue.component('v-text-field', VTextField);
Vue.component('v-container', VContainer);
Vue.component('v-col', VCol);
Vue.component('v-row', VRow);

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(withTemplate)
addDecorator(withVuetify)

configure(require.context('../stories', true, /\.stories\.js$/), module)
