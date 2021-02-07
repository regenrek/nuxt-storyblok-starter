export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: [Object, String],
      default: () => {}
    },
    image2: {
      type: [Object, String],
      default: () => {}
    },
    bgImage: {
      type: Object,
      default: () => {}
    },
    description: {
      type: Object,
      default() {
        return {}
      }
    },
    textRight: {
      type: Boolean,
      default: false
    },
    bgImageClass: {
      type: String,
      default: ''
    },
    button: {
      type: Array,
      default() {
        return []
      }
    },
    variant: {
      type: String,
      default: ''
    }
  }
}
