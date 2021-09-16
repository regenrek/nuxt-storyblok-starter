import { forwardProps } from '@nujek/shared'
import { VARIANTS } from '~/components/organisms/TextImage/const'

import TextImageBanner from '~/components/organisms/TextImage/TextImageBanner'
import TextImageGrid from '~/components/organisms/TextImage/TextImageGrid'

const componentList = {
  Grid: [VARIANTS.IMAGE_LEFT_TEXT_RIGHT, VARIANTS.TEXT_LEFT_IMAGE_RIGHT],
  Banner: [VARIANTS.STACKED_IMAGE_BANNER.key]
}

const _getKey = (value) => {
  return Object.keys(componentList).find(key =>
    componentList[key].includes(value)
  )
}

// @TODO Not working...
// const component = (name) =>
//   import(`~/components/organisms/TextImage/${name}.vue`)

const components = [TextImageBanner, TextImageGrid]

export default {
  name: 'BlokTextImage',
  props: ['blok'],
  functional: true,
  render (h, context) {
    const name = 'TextImage' + _getKey(context.props.blok.variant)
    const c = components.find(x => x.name === name)
    return h(c, {
      props: forwardProps(context.props)
    })
  }
}
