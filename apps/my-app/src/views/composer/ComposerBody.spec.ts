import { mount } from '@vue/test-utils'
import ComposerBody from './ComposerBody.vue';

describe('UiVueHome', () => {
  it('renders properly', () => {
    const wrapper = mount(ComposerBody, {})
    expect(wrapper.text()).toContain('Welcome to Hai again!')
  })
});
