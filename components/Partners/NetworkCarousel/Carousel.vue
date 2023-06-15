<template>
  <div class="flex flex-col gap-[18px]">
    <div class="flex gap-4 self-end mr-5">
      <button
        :disabled="slideIndex === 0 ? true : false"
        class="w-8 h-8 flex justify-center items-center border-2 border-solid rounded-full rotate-180 disabled:border-[#BEBEBF]"
        @click="prevSlide"
      >
        <svg-icon
          :class="`w-2 h-3 ${
            slideIndex === 0 ? 'text-[#BEBEBF]' : 'text-black'
          }`"
          name="arrow-right"
        />
      </button>
      <button
        :disabled="slideIndex === 5 ? true : false"
        class="w-8 h-8 flex justify-center items-center border-2 border-solid rounded-full disabled:border-[#BEBEBF]"
        @click="nextSlide"
      >
        <svg-icon
          :class="`w-2 h-3 ${
            slideIndex === 5 ? 'text-[#BEBEBF]' : 'text-black'
          }`"
          name="arrow-right"
        />
      </button>
    </div>
    <div class="h-[316px] w-[320px] relative">
      <VueSlickCarousel
        ref="carousel"
        class="overflow-hidden"
        v-bind="settings"
        @afterChange="afterPageChange"
      >
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
        <FourthSlide />
        <FifthSlide />
        <SixthSlide />
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import FirstSlide from './Slides/FirstSlide/FirstSlide.vue'
import SecondSlide from './Slides/SecondSlide/SecondSlide.vue'
import ThirdSlide from './Slides/ThirdSlide/ThirdSlide.vue'
import FourthSlide from './Slides/FourthSlide/FourthSlide.vue'
import FifthSlide from './Slides/FifthSlide/FifthSlide.vue'
import SixthSlide from './Slides/SixthSlide/SixthSlide.vue'

export default {
  name: 'CarouselSlide',
  components: {
    FirstSlide,
    SecondSlide,
    ThirdSlide,
    FourthSlide,
    FifthSlide,
    SixthSlide,
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        draggable: true,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 8000,
        speed: 300,
        initialSlide: 0,
        infinite: false,
      },
      slideIndex: 0,
    }
  },
  methods: {
    prevSlide() {
      this.$refs.carousel.prev()
    },
    nextSlide() {
      this.$refs.carousel.next()
    },
    afterPageChange(index) {
      this.slideIndex = index
    },
  },
}
</script>
