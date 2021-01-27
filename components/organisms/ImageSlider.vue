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
              <!-- <SbImage
                  :src="slide.image"
                  :alt="slide.image.alt"
                  :classes="{
                    aspectRatio: 'aspect-ratio-4/3 lg:aspect-ratio-2/3',
                    image: 'object-cover'
                  }"
                /> -->
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="bg-red-300">CONTENT</div>
      <!-- <transition name="fade" mode="out-in">
          <div
            v-if="slides[activeIndex]"
            :key="activeIndex"
            class="safari-bg-fix bg-white relative flex flex-col items-start justify-center z-10 py-4 md:mb-8 lg:mb-0 lg:col-span-7 lg:pl-24 lg:pr-12 order-2 lg:order-2"
          >
            <h3
              class="mb-8 text-dark text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl"
            >
              {{ slides[activeIndex].item.name }}
            </h3>

            <p
              v-if="
                slides[activeIndex].item.content.hero.length &&
                slides[activeIndex].item.content.hero[0].subtitle
              "
              class="text-h5 mb-10"
            >
              {{ slides[activeIndex].item.content.hero[0].subtitle }}
            </p>

            <NjButton :to="`/${slides[activeIndex].item.full_slug}`">
              Beitrag ansehen
            </NjButton>
          </div>
        </transition> -->
    </div>

    <!-- Pagination -->
    <!-- <div
        class="bg-white flex flex-col items-center justify-center py-4 relative z-10 lg:col-span-1 order-3 lg:order-3"
      >
        <div
          class="nj-slider-pagination w-full text-xl flex items-center justify-between lg:flex-col"
        />
      </div>
    </div> -->

    <!-- Navigation -->
    <!-- <div class="navigation py-2 hidden lg:flex xl:col-span-11 xl:col-start-2">
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
    </div> -->
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
        loopedSlides: 1,
        slidesPerView: 1.5,
        spaceBetween: 20,
        pagination: {
          el: '.nj-slider-pagination',
          clickable: true,
          bulletClass: 'bullet',
          bulletActiveClass: 'bullet--active',
          renderBullet(index, className) {
            const number = index <= 9 ? `0${index + 1}` : index + 1
            return `<span class="${className}">${number}</span>`
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
      return this.sliderItems
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
