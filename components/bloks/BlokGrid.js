import { forwardProps } from '@nujek/shared'
import Grid from '~/components/organisms/Grid.vue'
export default {
  name: 'BlokGrid',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(Grid, {
      props: forwardProps(context.props.blok)
    })
  }
}
