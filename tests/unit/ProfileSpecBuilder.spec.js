import { mount, createLocalVue } from '@vue/test-utils'
import ProfileSpecBuilder from '../../src/components/ProfileSpecBuilder.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import { profileSpecs } from '../../test-data/profile-specs.js'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

export const profileSpecBuilderNewTests = describe('New Profile Spec', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = options => {
    return mount(ProfileSpecBuilder, {
      localVue,
      vuetify,
      router,
      created () {
        this.$vuetify.lang = {
          t: () => {}
        }
        this.$vuetify.theme = { dark: false }
      },
      ...options
    })
  }

  it('Renders without crashing', () => {
    const wrapper = mountFunction({
      propsData: {
        profileSpec: profileSpecs[0]
      }
    })
    const title = wrapper.find('.v-list-item__title')
    expect(title.text()).toContain('Profile Spec - Cat Owner')
  })
})
