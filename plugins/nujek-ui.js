import Vue from 'vue'
import Nujek from '@nujek/ui/plugin'
import NjSection from '@nujek/ui/components/atoms/NjSection.vue'
import NjBurger from '@nujek/ui/components/atoms/NjBurger.vue'
import NjSidebar from '@nujek/ui/components/molecules/NjSidebar/NjSidebar.vue'

const settings = {
  NjSection: {
    component: NjSection,
    props: {
      fixedClasses: {
        wrapper:
          'prose md:prose-lg lg:prose-xl w-full py-8 md:10 xl:12 flex justify-center',
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
        bar: 'bg-red-600'
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
