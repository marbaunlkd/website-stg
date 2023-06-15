<template>
  <section id="programs" class="bg-white pt-10 pb-5 lg:py-20">
    <div class="container w-full flex items-center justify-between">
      <h2 class="pb-4 font-bold text-2xl container lg:text-5xl">
        {{ $t('programs.title') }}
      </h2>
      <button
        class="md:hidden next-slide rotate-180 flex items-center mr-4 justify-center border-2 border-black rounded-full min-h-[32px] min-w-[32px]"
        @click="prevSlide"
      >
        <svg-icon
          name="arrow-right"
          class="w-[9px] h-[13px] cursor-pointer text-black fill-current"
        />
      </button>
      <button
        class="md:hidden next-slide flex items-center justify-center border-2 border-black rounded-full min-h-[32px] min-w-[32px]"
        @click="nextSlide"
      >
        <svg-icon
          name="arrow-right"
          class="w-[9px] h-[13px] cursor-pointer text-black fill-current"
        />
      </button>
    </div>

    <VueSlickCarousel
      v-bind="slickOptions"
      ref="carouselPrograms"
      class="mt-10 pl-5 flex items-center md:!hidden lg:max-w-[1440px] lg:mx-auto lg:pl-[180px]"
      @beforeChange="onSlideChange"
    >
      <div
        v-for="(item, index) of $i18n.locale === 'pt' ? programsPT : programsEN"
        :key="`program=${index}`"
        class="w-full max-w-[200px] overflow-hidden min-w-[200px] relative h-full min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6 transition-all duration-500 ease-linear mr-4 lg:mr-[27px] lg:min-h-[448px] lg:max-h-[448px] lg:max-w-[277px] lg:min-w-[277px]"
        :class="[
          {
            '!bg-green': $data[`showMenu${item.value}`],
            [item.heightClassName]: $data[`showMenu${item.value}`],
          },
        ]"
      >
        <transition name="slide-fade">
          <div
            v-if="!$data[`showMenu${item.value}`]"
            class="w-full h-full flex-1 flex flex-wrap justify-between"
          >
            <div>
              <h4 class="font-medium text-xl text-white lg:text-2xl lg:mb-4">
                {{ $t(`programs.card${item.value}.title`) }}
              </h4>
              <p
                class="font-normal text-xs text-white leading-4 lg:text-sm font-poppins"
              >
                {{ $t(`programs.card${item.value}.desc`) }}
              </p>
              <p
                v-if="item.value === 2"
                class="text-white mt-4 font-poppins font-bold text-xs"
              >
                {{ $t('programs.cta') }}
              </p>
            </div>
            <div
              class="w-10 h-10 rounded-full flex justify-center items-center border-2 border-white cursor-pointer mt-auto"
              @click.prevent="toggle(item.value), setSlider(item.value)"
            >
              <p class="w-[17px] h-[2px] bg-white"></p>
              <p
                :class="[
                  {
                    hidden: $data[`showMenu${item.value}`],
                  },
                ]"
                class="absolute w-[2px] h-[17px] bg-white"
              ></p>
            </div>
          </div>
        </transition>
        <transition name="slide-open">
          <div
            v-if="$data[`showMenu${item.value}`]"
            class="w-full h-full absolute flex-1 top-0 left-0 flex flex-wrap justify-between p-6"
          >
            <div>
              <h4 class="font-medium text-xl">{{ $t('programs.benefits') }}</h4>
              <ul
                class="max-w-[152px] lg:w-full list-disc pt-4 text-xs lg:text-sm font-normal font-poppins leading-4 pl-[15px] flex flex-col gap-2"
              >
                <li
                  v-for="(benefit, benefitIndex) in item.benefits"
                  :key="benefitIndex"
                >
                  {{
                    $t(
                      `programs.card${item.value}.benefits.t${benefitIndex + 1}`
                    )
                  }}
                </li>
              </ul>
            </div>
            <div
              class="w-10 h-10 rounded-full flex justify-center items-center border-2 border-black cursor-pointer mt-auto delay-btn"
              @click.prevent="($event) => toggle(item.value)"
            >
              <p class="w-[17px] h-[2px] bg-black"></p>
            </div>
          </div>
        </transition>
      </div>
    </VueSlickCarousel>
    <div
      class="mt-10 pl-5 gap-6 hidden md:flex flex-wrap justify-center items-center lg:max-w-[1440px] lg:mx-auto"
      data-aos="fade"
    >
      <div
        v-for="(item, index) of $i18n.locale === 'pt' ? programsPT : programsEN"
        :key="`program=${index}`"
        class="w-full max-w-[200px] overflow-hidden min-w-[200px] relative h-full min-h-[288px] bg-black !flex flex-col justify-between px-6 py-6 transition-all duration-500 ease-linear md:min-h-[322px] md:max-h-[322px] md:max-w-[428px] md:min-w-[428px] xl:min-h-[448px] xl:max-h-[448px] xl:max-w-[277px] xl:min-w-[277px]"
        :class="[
          {
            '!bg-green': $data[`showMenu${item.value}`],
            [item.heightClassName]: $data[`showMenu${item.value}`],
          },
        ]"
      >
        <transition name="slide-fade">
          <div
            v-if="!$data[`showMenu${item.value}`]"
            class="w-full h-full flex-1 flex flex-wrap justify-between"
          >
            <div>
              <h4 class="font-medium text-xl text-white lg:text-2xl lg:mb-4">
                {{ $t(`programs.card${item.value}.title`) }}
              </h4>
              <p
                class="font-medium font-poppins text-xs text-white lg:text-sm !leading-[18px]"
              >
                {{ $t(`programs.card${item.value}.desc`) }}
              </p>
              <!-- <p
                v-if="item.value === 2"
                class="text-white mt-4 font-poppins font-bold text-xs"
              >
                {{ $t('programs.cta') }}
              </p> -->
              <a
                v-if="item.value === 2"
                :title="$t('programs.cta')"
                target="_Blank"
                class="max-w-max cursor-pointer mt-6 block rounded-[100px] font-medium text-sm bg-green text-black self-center px-4 py-2 hover:bg-[#18A790] transition-all duration-300 font-poppins"
                @click="$nuxt.$emit('openModalContact')"
              >
                {{ $t('programs.cta') }}
              </a>
            </div>
            <div
              class="w-10 h-10 rounded-full flex justify-center items-center border-2 border-white cursor-pointer mt-auto"
              @click.prevent="toggle(item.value), setSlider(item.value)"
            >
              <p class="w-[17px] h-[2px] bg-white"></p>
              <p
                :class="[
                  {
                    hidden: $data[`showMenu${item.value}`],
                  },
                ]"
                class="absolute w-[2px] h-[17px] bg-white"
              ></p>
            </div>
          </div>
        </transition>
        <transition name="slide-open">
          <div
            v-if="$data[`showMenu${item.value}`]"
            class="w-full h-full absolute flex-1 top-0 left-0 flex flex-wrap justify-between p-6"
          >
            <div>
              <h4 class="font-medium text-xl lg:text-2xl">
                {{ $t('programs.benefits') }}
              </h4>
              <ul
                class="list-disc pt-4 text-sm font-medium font-poppins !leading-[18px] pl-[15px] flex flex-col gap-3"
              >
                <li
                  v-for="(benefit, benefitIndex) in item.benefits"
                  :key="benefitIndex"
                >
                  {{
                    $t(
                      `programs.card${item.value}.benefits.t${benefitIndex + 1}`
                    )
                  }}
                </li>
              </ul>
            </div>
            <div
              class="w-10 h-10 rounded-full flex justify-center items-center border-2 border-black cursor-pointer mt-auto delay-btn"
              @click.prevent="($event) => toggle(item.value)"
            >
              <p class="w-[17px] h-[2px] bg-black"></p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomePrograms',
  data() {
    return {
      slickOptions: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        variableWidth: true,
      },
      showMenu1: false,
      showMenu2: false,
      showMenu3: false,
      showMenu4: false,
      programsPT: [
        { value: 1, benefits: 4, heightClassName: 'min-h-[404px]' },
        { value: 2, benefits: 5, heightClassName: 'min-h-[524px]' },
        { value: 3, benefits: 5, heightClassName: 'min-h-[524px]' },
        { value: 4, benefits: 3, heightClassName: 'min-h-[380px]' },
      ],
      programsEN: [
        { value: 1, benefits: 4, heightClassName: 'min-h-[404px]' },
        { value: 2, benefits: 5, heightClassName: 'min-h-[524px]' },
        { value: 3, benefits: 5, heightClassName: 'min-h-[524px]' },
        { value: 4, benefits: 3, heightClassName: 'min-h-[380px]' },
      ],
    }
  },

  methods: {
    toggle(item) {
      this[`showMenu${item}`] = !this[`showMenu${item}`]
    },
    setSlider(value) {
      const isMobile = window.innerWidth < 1024
      if (isMobile) {
        this.$refs.carouselPrograms.goTo(value - 1)
      }
    },
    onSlideChange(event) {
      this[`showMenu${event + 1}`] = false
    },
    nextSlide() {
      this.$refs.carouselPrograms.next()
    },
    prevSlide() {
      this.$refs.carouselPrograms.prev()
    },
  },
}
</script>

<style>
.slick-track {
  display: flex;
  align-items: center;
}

.slide-enter-active {
  transition-duration: 0.5s;
  transition-timing-function: linear;
}

.slide-leave-active {
  transition-duration: 0.5s;
  transition-timing-function: linear;
}

.slide-enter-active .daley-btn {
  transition-delay: 5000ms;
}

.slide-enter-to,
.slide-leave {
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
}
</style>
