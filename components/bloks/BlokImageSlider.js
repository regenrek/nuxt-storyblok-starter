import { forwardProps } from '@nujek/shared'
import ImageSlider from '~/components/organisms/ImageSlider'

export default {
  name: 'BlokImageSlider',
  functional: true,
  props: ['blok'],
  render (h, context) {
    return h(ImageSlider, {
      props: forwardProps(context.props.blok)
    })
  }
}
