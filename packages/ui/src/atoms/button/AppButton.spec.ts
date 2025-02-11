import { mount } from '@vue/test-utils'
import AppButton from './AppButton.vue';

describe('AppButton', () => {
  it('renders properly', () => {
    const wrapper = mount(AppButton, {
      props: {
        text: 'Click me',
      }
    })
    expect(wrapper.text()).toContain('Click me')
  })
});
