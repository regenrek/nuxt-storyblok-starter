import { forwardProps } from '@nujek/shared'
import TextImage from '~/components/organisms/TextImage'

export default {
  name: 'BlokTextImage',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(TextImage, {
      props: forwardProps(context.props.blok)
    })
  }
}
