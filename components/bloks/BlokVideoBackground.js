import { forwardProps } from '@nujek/shared'
import VideoBackground from '~/components/organisms/VideoBackground'

export default {
  name: 'BlokVideoBackground',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(VideoBackground, {
      props: forwardProps(context.props.blok)
    })
  }
}
