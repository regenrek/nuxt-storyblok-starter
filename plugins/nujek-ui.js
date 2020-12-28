import Vue from 'vue'
import Nujek from '@nujek/ui/plugin'
// import { uiComponentsConfig } from '~/config'
import NjSection from '@nujek/ui/components/atoms/NjSection.vue'

const settings = {
  'nj-section': {
    component: NjSection,
    props: {
      classes: {
        wrapper: 'bg-blue-600',
        container: 'bg-red-600'
      },
      variants: {
        boxed: {
          wrapper: 'bg-red-200 flex justify-center',
          container: 'bg-red-400 max-w-2xl'
        },
        fullWidth: {
          wrapper: 'bg-yellow-200 w-full',
          container: 'bg-yellow-400 w-full'
        }
      }
    }
  }
}

Vue.use(Nujek, settings)
