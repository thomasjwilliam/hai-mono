import { mount } from '@vue/test-utils'
import AppButton from './AppButton.vue';

describe('AppButton', () => {
  it('renders properly', () => {
    const wrapper = mount(AppButton, {
      props: {
        label: 'Click me',
        size: "medium"
      }
    })
    expect(wrapper.text()).toContain('Click me')
  })
});
