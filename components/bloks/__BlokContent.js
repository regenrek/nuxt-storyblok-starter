import NjContent from '@nujek/ui/components/molecules/NjContent/NjContent'
// import { forwardProps } from '../../utils'

const forwardProps = (props) => {
  const pure = {}
  for (const prop in props) {
    if (props[prop] !== undefined) {
      pure[prop] = props[prop]
    }
  }
  return pure
}

export default {
  name: 'BlokContent',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(NjContent, {
      props: forwardProps(context.props.blok)
    })
  }
}
