import { mount, createLocalVue } from '@vue/test-utils'
import PersonaCard from '../../src/components/PersonaCard.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

export const personaCardNewTests = describe('New Persona', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = options => {
    return mount(PersonaCard, {
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
        personaTitle: 'New Persona'
      }
    })
    const title = wrapper.find('.v-list-item__title')
    expect(title.text()).toContain('New Persona')
  })
})
