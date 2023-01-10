import { shallowMount } from '@vue/test-utils'
import LText from '../../src/components/LText'
import { textDefaultProps } from '../../src/defaultProps'

describe('LText.vue', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value： { href: ''}
    })
  })
  it('default LText render', () => {
    const msg = 'test'
    const props = {
      ...textDefaultProps,
      text: msg
    }
    const wrapper = shallowMount(LText, { props })
    expect(wrapper.text()).toBe(msg)
    expect(wrapper.element.tagName).toBe('DIV')
    const style = wrapper.attributes().style
    console.log(style)
    expect(style.includes('font-size')).toBeTruthy()
    expect(style.includes('action'))
  })
  it('LText with actionType and URL should trigger location href change', () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      tag: 'h2'
    }
    const wrapper = shallowMount(LText, { props })
    await wrapper.trigger('click')
    expect(window.location.href).toBe('http://dummy.url')
  })
  it('LText with isEditing should not trigger location change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      tag: 'h2',
      isEditing: true
    }
    const wrapper = shallowMount(LText, { props })
  })
})
export defaut defineComponent({
  name: 'l-text',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    ...defaultProps
  },
  setup (props) {
    const { styleProps, handleClick } = useComponentCommon(props, textStyle)
    return {
      styleProps,
      handleClick
    }
  }
})