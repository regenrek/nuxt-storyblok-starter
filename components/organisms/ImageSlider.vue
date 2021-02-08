<template>
  <NjSection>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div ref="gallery" class="overflow-hidden">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="swiper-slide"
          >
            <nuxt-link :to="`#`">
              <SbImage
                :src="slide.image"
                :alt="slide.image.alt"
                :resize="{ width: '445', height: '594' }"
                :classes="{
                  aspectRatio: 'w-full',
                  image: 'object-cover w-full'
                }"
              />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div>
        <div
          class="relative flex flex-col items-start justify-center z-10 py-4 md:mb-8 lg:mb-0 lg:col-span-7 lg:pl-24 lg:pr-12 order-2 lg:order-2"
        >
          <transition name="fade" mode="out-in">
            <div v-if="slides[activeIndex]" :key="activeIndex" class="">
              <h3
                class="mb-8 text-dark text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl"
              >
                {{ slides[activeIndex].title }}
              </h3>

              <p v-if="slides[activeIndex].subtitle" class="text-h5 mb-10">
                {{ slides[activeIndex].subtitle }}
              </p>

              <nuxt-link :to="getBtnLink(slides[activeIndex])">
                Beitrag ansehen
              </nuxt-link>
            </div>
          </transition>

          <!-- Navigation -->
          <div class="navigation flex rotate-180">
            <button class="prev w-10 h-10 flex items-center justify-center">
              <img
                aria-label="Vorheriger Slide"
                src="/svg/arrowLeft_blue.svg"
                class="w-8 h-8"
              />
            </button>
            <button class="next w-10 h-10 flex items-center justify-center">
              <img
                style="transform: rotate(180deg)"
                aria-label="Nächster Slide"
                src="/svg/arrowLeft_blue.svg"
                class="w-8 h-8"
              />
            </button>
          </div>

          <!-- Pagination -->
          <div class="flex">
            <div class="nj-slider-pagination flex space-x-2" />
          </div>
        </div>
      </div>
    </div>
  </NjSection>
</template>

<script>
import swiper, { Navigation, Pagination } from 'swiper'

const Swiper = swiper
Swiper.use([Navigation, Pagination])

export default {
  props: {
    sliderItems: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      slider: null,
      activeIndex: 0,
      swiperOptions: {
        loop: true,
        //loopedSlides: 1,
        slidesPerView: 1.5,
        initialSlide: 3,
        centeredSlides: false,
        // breakpoints: {

        // },
        spaceBetween: 20,
        pagination: {
          el: '.nj-slider-pagination',
          clickable: true,
          bulletClass: 'bullet',
          bulletActiveClass: 'bullet--active',
          renderBullet(index, className) {
            const number = index <= 9 ? `0${index + 1}` : index + 1
            return `<span class="${className} block cursor-pointer">${number}</span>`
          }
        },
        navigation: {
          prevEl: '.prev',
          nextEl: '.next'
        }
      }
    }
  },
  computed: {
    slides() {
      return this.sliderItems.slice().reverse()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slider = new Swiper(this.$refs.gallery, this.swiperOptions)
      this.slider.on('slideChange', ({ realIndex }) => {
        this.activeIndex = realIndex
      })
    })

    this.$once('hook:destroyed', function () {
      if (this.slider) this.slider.destroy()
    })
  },
  methods: {
    getImage(item) {
      return item.image.filename || null
    },
    getBtnLink(slide) {
      return `/${slide.button?.link?.story?.url}`
    }
  }
}
</script>

<style lang="postcss" scoped>
@import 'swiper/swiper-bundle.css';

.safari-bg-fix {
  box-shadow: 9999px 9999px 0px 9999px #fff;
}

.swiper-slide:not(.swiper-slide-active) {
  user-select: none;
  pointer-events: none;
}
</style>
