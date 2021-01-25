import { forwardProps } from '@nujek/shared'
import Header from '~/components/organisms/Header'

export default {
  name: 'BlokHeader',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(Header, {
      props: forwardProps(context.props.blok)
    })
  }
}
