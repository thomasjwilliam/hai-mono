import { mount } from '@vue/test-utils'
import UiVueHome from './ui-vue-home.vue';

describe('UiVueHome', () => {
  it('renders properly', () => {
    const wrapper = mount(UiVueHome, {})
    expect(wrapper.text()).toContain('Welcome to UiVueHome')
  })
});
