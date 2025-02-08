import { mount } from '@vue/test-utils'
import AppButton from './AppButton.vue';

describe('AppButton', () => {
  it('renders properly', () => {
    const wrapper = mount(AppButton, {})
    expect(wrapper.text()).toContain('Welcome to AppButton')
  })
});
