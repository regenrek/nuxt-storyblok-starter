import { forwardProps } from '@nujek/shared'
import BlokHero2 from './BlokHero2'

export default {
  name: 'BlokHero',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(BlokHero2, {
      props: forwardProps(context.props.blok)
    })
  }
}
