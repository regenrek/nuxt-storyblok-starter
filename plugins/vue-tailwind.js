import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import { TButton, TTag } from 'vue-tailwind/dist/components'

const settings = {
  't-button': {
    component: TButton,
    props: {
      fixedClasses:
        'block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      classes:
        'text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600',
      variants: {
        secondary:
          'text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600',
        error:
          'text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600',
        success:
          'text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600',
        link: 'text-blue-500 underline hover:text-blue-600'
      }
    }
  },
  't-tag': {
    component: TTag,
    props: {
      fixedClasses: '',
      classes: '',
      variants: {
        title: 'text-2xl leading-8 font-extrabold text-gray-900 tracking-tight',
        subtitle: 'text-lg leading-6 font-medium text-gray-900',
        error: 'text-red-500',
        badge:
          'inline-flex items-center px-3 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800',
        avatar:
          'inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 overflow-hidden leading-none text-center'
      }
    }
  }
}

Vue.use(VueTailwind, settings)
