<template>
  <component :is="tag" :style="styleProps" class="l-text-component" @click="">
  {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useComponentCommon from '../../hooks/useComponentCommon'
import { transformToComponentProps, textDefaultProps, textStylePropNames} from '@'
const defaultProps = transformToComponentProps(textDefaultProps)

export default Vue.extend({
  name: 'l-text',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    ...defaultProps
  },
  setup (props) {
    const { styleProps, handleClick} = useComponentCommon(props, textStylePropNames)
    return {
      styleProps,
      handleClick
    }
  }
})
</script>