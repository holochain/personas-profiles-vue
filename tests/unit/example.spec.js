import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Vuetify'
    const wrapper = shallowMount(HelloWorld, {})
    expect(wrapper.text()).toContain(msg)
  })
})
