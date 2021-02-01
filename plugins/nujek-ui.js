import Vue from 'vue'
import Nujek from '@nujek/ui/plugin'
import NjSection from '@nujek/ui/components/atoms/NjSection.vue'
import NjBurger from '@nujek/ui/components/atoms/NjBurger.vue'
import NjSidebar from '@nujek/ui/components/molecules/NjSidebar/NjSidebar.vue'

const settings = {
  NjSection: {
    component: NjSection,
    props: {
      classes: {
        wrapper: 'bg-blue-600',
        container: 'bg-red-600'
      },
      variants: {
        header: {
          wrapper: 'bg-teal-200 flex justify-center w-full',
          container: 'bg-red-400 max-w-screen-xl px-6 md:px-0 w-full'
        },
        boxed: {
          wrapper: 'bg-teal-200 flex justify-center w-full',
          container: 'bg-red-400 max-w-screen-lg px-6 md:px-0 w-full'
        },
        fullWidth: {
          wrapper: 'bg-yellow-200 w-full',
          container: 'bg-yellow-400 w-full'
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
