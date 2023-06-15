<template>
  <section id="investment" class="bg-green py-10 lg:py-20">
    <div class="container">
      <h2 class="pb-4 font-bold text-2xl lg:text-[42px]" data-aos="fade">
        {{ $t('invest.title') }}
      </h2>

      <div
        class="flex flex-wrap pt-10 gap-y-8 gap-x-[60px] 2xl:gap-x-[130px] lg:ml-[110px] lg:pt-6"
        data-aos="fade"
      >
        <div
          v-for="(item, index) of itens"
          :key="`invest-${index}`"
          class="md:w-[100%] xl:max-w-[310px]"
          :class="item.classNames"
        >
          <svg-icon :name="item.icon" class="w-8 h-8 lg:w-16 lg:h-16" />
          <h3
            class="pb-2 pt-4 pt-text-base font-medium leading-5 lg:text-2xl"
            :class="item.titleClassNames"
          >
            {{ item.title }}
          </h3>
          <p class="text-xs font-normal font-poppins !leading-6 lg:text-base">
            <span
              v-for="(description, descriptionIndex) of item.descriptions"
              :key="`invest-description-${descriptionIndex}`"
              :class="descriptionIndex !== 0 ? 'mt-4 block' : ''"
            >
              <span v-html="description"></span>
            </span>
          </p>
        </div>
      </div>
      <a
        title="Inscreva sua startup"
        target="_Blank"
        class="max-w-max cursor-pointer block mt-5 lg:mt-[72px] rounded-[100px] font-bold text-xxs lg:text-base bg-black text-white self-center px-8 py-4 font-poppins lg:ml-[108px]"
        @click="$nuxt.$emit('openModalContact')"
      >
        {{ $t('invest.cta') }}
      </a>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeInvest',
  data: function () {
    return {
      itens: [
        {
          icon: 'circularEconomy',
          title: this.$t('invest.card1.title'),
          descriptions: [
            this.$t('invest.card1.info'),
            this.$t('invest.card1.info2'),
            this.$t('invest.card1.info3'),
          ],
          titleClassNames: 'lg:max-w-[200px]',
          classNames: 'lg:order-1',
        },
        {
          icon: 'carbonNeutrality',
          title: this.$t('invest.card2.title'),
          descriptions: [
            this.$t('invest.card2.info'),
            this.$t('invest.card2.info2'),
            this.$t('invest.card2.info3'),
            this.$t('invest.card2.info4'),
          ],
          titleClassNames: 'lg:max-w-[180px]',
          classNames: 'lg:order-2',
        },
        {
          icon: 'biotechnology',
          title: this.$t('invest.card3.title'),
          descriptions: [
            this.$t('invest.card3.info'),
            this.$t('invest.card3.info2'),
            this.$t('invest.card3.info3'),
          ],
          titleClassNames: '',
          classNames: 'lg:order-3',
        },
        {
          icon: 'biochemicals',
          title: this.$t('invest.card4.title'),
          descriptions: [
            this.$t('invest.card4.info'),
            this.$t('invest.card4.info2'),
            this.$t('invest.card4.info3'),
          ],
          titleClassNames: '',
          classNames: 'lg:order-4',
        },
        {
          icon: 'industry',
          title: this.$t('invest.card5.title'),
          descriptions: [
            this.$t('invest.card5.info'),
            this.$t('invest.card5.info2'),
          ],
          titleClassNames: '',
          classNames: 'lg:order-5',
        },
      ],
    }
  },
}
</script>
