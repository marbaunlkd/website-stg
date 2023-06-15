<template>
  <section
    id="about"
    data-section="about"
    class="bg-[#EDEDEF] pt-10 pb-5 lg:py-20"
  >
    <div class="container">
      <h2
        class="pb-4 font-bold text-2xl lg:text-5xl lg:pb-6 -tracking-[0.03em]"
        data-aos="fade"
      >
        {{ $t('portfolio.title') }}
      </h2>

      <p
        class="font-normal font-poppins text-xs pb-10 lg:max-w-[530px] lg:ml-[110px] lg:text-base !leading-4 lg:!leading-6"
      >
        {{ $t('portfolio.desc') }}
      </p>

      <div class="flex gap-5" @mouseleave="($event) => setSelected('XTELLAR')">
        <div class="hidden w-full max-w-[420px] h-[460px] relative lg:block">
          <nuxt-img
            v-for="(item, index) of itens"
            :key="`portfolio-image-${index}`"
            preload
            :src="`portfolio/${item.value.toLowerCase()}.png`"
            format="webp"
            fit="fill"
            quality="100"
            loading="lazy"
            :alt="$t(`portfolio.img.alt${index + 1}`)"
            :title="$t(`portfolio.img.title${index + 1}`)"
            class="w-full h-full grayscale absolute left-0 transition-opacity duration-300 eas opacity-0"
            :class="[
              {
                'opacity-100': item.value === selected,
              },
            ]"
          />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
          <div
            v-for="(item, index) of itens"
            :key="index"
            class="w-full bg-green px-6 py-6 transition-colors duration-300 ease-linear"
            :class="item.value === selected ? 'lg:bg-green' : 'lg:bg-white'"
            @mouseenter="($event) => setSelected(item.value)"
          >
            <h2
              class="text-base font-bold uppercase text-black mb-2 font-poppins max-w-xs"
            >
              {{ $t(`portfolio.title${item.value}`) }}
            </h2>
            <p
              class="text-xs font-normal font-poppins lg:text-sm lg:font-medium lg:max-w-[366px] !leading-[16px] lg:!leading-[18px]"
            >
              {{ $t(`portfolio.${item.value}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomePortfolio',
  data: function () {
    return {
      selected: 'XTELLAR',
      itens: [
        { value: 'XTELLAR' },
        { value: 'LOADSHARK' },
        { value: 'BABEL' },
        { value: 'ZAYA' },
      ],
    }
  },
  methods: {
    setSelected(value) {
      this.selected = value
    },
  },
}
</script>
