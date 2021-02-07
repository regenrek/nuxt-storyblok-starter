import { forwardProps } from '@nujek/shared'
import MenuCard from '~/components/organisms/MenuCard/MenuCard'

export default {
  name: 'BlokMenuCard',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(MenuCard, {
      props: forwardProps(context.props.blok)
    })
  }
}
