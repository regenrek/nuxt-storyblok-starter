import { forwardProps } from '@nujek/shared'
import Hero from '~/components/organisms/hero'

export default {
  name: 'BlokHero',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(Hero, {
      props: forwardProps(context.props.blok)
    })
  }
}
