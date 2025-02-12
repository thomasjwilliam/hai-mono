import { mount } from '@vue/test-utils'
import PopupMenu from './PopupMenu.vue';

describe('PopupMenu', () => {
  it('renders properly', () => {
    const wrapper = mount(PopupMenu, {
      props: {
        text: 'Click me',
      }
    })
    expect(wrapper.text()).toContain('Click me')
  })
});
