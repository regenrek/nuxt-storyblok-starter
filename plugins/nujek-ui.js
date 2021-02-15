import Vue from 'vue'
import Nujek from '@nujek/ui/dist/runtime/plugin.js'
import {
  NjSection,
  NjBurger,
  NjSidebar
} from '@nujek/ui/dist/runtime/components'

const settings = {
  NjSection: {
    component: NjSection,
    props: {
      fixedClasses: {
        // https://github.com/tailwindlabs/tailwindcss-typography#overriding-max-width
        wrapper:
          'prose md:prose-lg lg:prose-xl max-w-none w-full py-8 md:py-10 xl:py-12 flex justify-center w-full',
        container: 'px-6 w-full'
      },
      variants: {
        'section-xl': {
          container: 'max-w-screen-xl'
        },
        'section-lg': {
          container: 'max-w-screen-lg'
        },
        spacer: {
          wrapper: 'py-6 md:py-8 lg:py-10 xl:py-12'
        }
      }
    }
  },
  NjBurger: {
    component: NjBurger,
    props: {
      classes: {
        bar: 'bg-gray-800'
      }
    }
  },
  NjSidebar: {
    component: NjSidebar,
    props: {
      classes: {
        sidenav: 'bg-gradient-to-r from-green-400 to-blue-500'
      }
    }
  }
}

Vue.use(Nujek, settings)
