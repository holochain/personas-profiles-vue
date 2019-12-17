import { mount, createLocalVue } from '@vue/test-utils'
import PersonaField from '../../src/components/PersonaField.vue'
const localVue = createLocalVue()

export const personaFieldTests = describe('Persona Field', () => {
  const mountFunction = options => {
    return mount(PersonaField, {
      localVue,
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
        curatedFieldNames: [{ fieldName: 'Full Name', fieldType: 'text' }, { fieldName: 'Avatar', fieldType: 'image' }]
      }
    })
    const fieldNames = wrapper.find('.v-autocomplete')
    expect(fieldNames.props('items')[0].fieldName).toBe('Full Name')
  })

  it('Selecting a text type of field shows a text input', done => {
    const wrapper = mountFunction({
      propsData: {
        curatedFieldNames: [{ fieldName: 'Full Name', fieldType: 'singleLineText' }, { fieldName: 'Avatar', fieldType: 'image' }]
      }
    })
    wrapper.vm.selected = 'singleLineText'
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.showSingleLineTextField).toBe(true)
      expect(wrapper.find('.v-text-field').exists()).toBe(true)
      done()
    })
  })
})
