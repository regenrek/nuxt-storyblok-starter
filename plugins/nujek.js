import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import { NjButton } from '@nujek/ui'

const settings = {
  'nj-button': {
    component: NjButton,
    props: {
      classes:
        'bg-yellow-200 rounded-lg border block inline-flex items-center justify-center'
      // ...More settings
    }
  }
}

//Vue.use(VueTailwind, settings)
