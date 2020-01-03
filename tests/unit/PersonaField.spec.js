import { mount, createLocalVue } from '@vue/test-utils'
import PersonaField from '../../src/components/PersonaField.vue'
const localVue = createLocalVue()

export const newPersonaFieldTests = describe('New Field', () => {
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
    const wrapper = mountFunction({})
    const fieldNames = wrapper.find('.v-autocomplete')
    console.log(fieldNames.props('items'))
    expect(fieldNames.props('items')[0].fieldName).toBe('Full Name')
  })

  // it('Selecting a text type of field shows a text input', done => {
  //   const wrapper = mountFunction({
  //     propsData: {
  //       curatedFieldNames: curatedFieldNames
  //     }
  //   })
  //   wrapper.vm.selected = { fieldName: 'Full Name', fieldType: 'singleLineText' }
  //   wrapper.vm.$nextTick(() => {
  //     expect(wrapper.vm.showSingleLineTextField).toBe(true)
  //     expect(wrapper.find('.v-text-field').exists()).toBe(true)
  //     done()
  //   })
  // })
})

export const existingPersonaFieldTests = describe('Existing Field', () => {
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
    const wrapper = mountFunction({})
    const fieldNames = wrapper.find('.v-autocomplete')
    expect(fieldNames.props('items')[0].fieldName).toBe('Full Name')
  })
})
