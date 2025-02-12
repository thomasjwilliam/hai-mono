import { mount } from '@vue/test-utils'
import Header from './Header.vue';

describe('Header', () => {
  it('renders properly', () => {
    const wrapper = mount(Header, {
      props: {
        text: 'Click me',
      }
    })
    expect(wrapper.text()).toContain('Click me')
  })
});
