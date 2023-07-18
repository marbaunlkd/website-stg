<template>
  <section class="bg-white py-10 lg:py-20 mentors-section">
    <div class="container">
      <h2 class="pb-4 font-bold text-2xl lg:text-[42px] lg:pb-6">
        {{ $t('mentors.title') }}
      </h2>
      <p
        class="font-normal font-poppins text-xs pb-10 lg:text-base lg:ml-[110px] lg:max-w-[530px] !leading-4 lg:!leading-6"
      >
        {{ $t('mentors.desc') }}
      </p>
      <p class="font-bold text-xs lg:hidden">
        {{ $t('mentors.filter.title') }}
      </p>
    </div>

    <div class="hidden lg:block container !pb-10">
      <p
        class="font-bold text-base ml-[110px] pb-4 mr-6 min-w-max font-poppins"
      >
        {{ $t('mentors.filter.title') }}
      </p>

      <div class="pl-[106px] flex flex-wrap gap-y-4 items-center w-full">
        <div
          v-for="(item, index) of filters"
          :key="index"
          class="border-solid border font-poppins border-black py-2 px-4 text-base font-bold min-w-max max-w-max rounded-[100px] mr-2 cursor-pointer"
          :class="[
            {
              'bg-black': selectedFilter === item,
              'text-white': selectedFilter === item,
            },
          ]"
          @click.prevent="selectedFilter = item"
        >
          {{ $t(`mentors.filter.${item}`) }}
        </div>
      </div>
    </div>

    <div class="container !pr-0 !pb-10 !pt-2 lg:hidden">
      <VueSlickCarousel v-bind="options.slick" class="flex items-center w-full">
        <div
          v-for="(item, index) of filters"
          :key="index"
          class="border-solid border font-poppins border-black py-2 px-4 text-xs font-bold min-w-max max-w-max rounded-[100px] mr-2"
          :class="[
            {
              'bg-black': selectedFilter === item,
              'text-white': selectedFilter === item,
            },
          ]"
          @click.prevent="selectedFilter = item"
        >
          {{ $t(`mentors.filter.${item}`) }}
        </div>
      </VueSlickCarousel>
    </div>

    <div class="container">
      <div class="lg:ml-[110px] lg:flex lg:gap-4">
        <vue-slider
          v-if="filteredMentors.length > 5"
          v-model="sliderValue"
          :adsorb="true"
          width="2px"
          tooltip="none"
          :min="0"
          :max="sliderMaxValue"
          direction="ttb"
          class="hidden lg:block"
          v-bind="options.desktopSlider"
        ></vue-slider>

        <div
          class="h-[324px] overflow-hidden lg:h-[284px] lg:flex-1 relative"
          :class="[
            { 'grid items-center': filteredMentors.length < 6 },
            { 'lg:ml-[30px]': filteredMentors.length < 6 },
          ]"
        >
          <div id="mentors-list" class="transition-all relative duration-300">
            <div
              v-for="(mentor, index) of filteredMentors"
              :id="`mentor-${index}`"
              :key="index"
              class="min-h-[57px] transition-all duration-300 mentor flex justify-between w-full items-center py-4 lg:justify-start lg:gap-[10%] lg:!min-h-0"
              :class="[
                {
                  '!min-h-[97px]': mentor.slug === selectedMentor,
                },
              ]"
            >
              <p
                class="cursor-pointer transition-all duration-300 font-medium text-xs font-poppins lg:min-w-[200px] lg:text-base lg:font-normal lg:hover:underline"
                :class="[
                  {
                    'text-[#9D9D9D]': mentor.slug !== selectedMentor,
                    'lg:!font-bold': mentor.slug === selectedMentor,
                    'lg:text-lg': mentor.slug === selectedMentor,
                    'text-sm': mentor.slug === selectedMentor,
                  },
                ]"
                @click.prevent="
                  ;(selectedMentorIndex = index), (sliderValue = index)
                "
              >
                {{ mentor.name }}
              </p>

              <p
                class="transition-all duration-300 hidden text-base lg:block font-poppins"
                :class="[
                  {
                    'text-[#9D9D9D]': mentor.slug !== selectedMentor,
                    'lg:text-lg': mentor.slug === selectedMentor,
                  },
                ]"
              >
                {{ $t(`mentors.filter.${mentor.vertical}`) }}
              </p>

              <transition>
                <nuxt-img
                  preload
                  :src="require(`~/assets/img/mentors/${mentor.image}`)"
                  format="webp"
                  fit="fill"
                  quality="100"
                  loading="lazy"
                  sizes="100px sm:100vw lg:300px"
                  class="w-16 h-16 absolute left-[40%] lg:left-[60%] -translate-x-[70%] lg:w-[220px] lg:h-[220px] lg:z-10 lg:right-[14%] lg:translate-x-0 transition-opacity duration-300 opacity-0"
                  :class="[
                    {
                      'opacity-100': mentor.slug === selectedMentor,
                      'delay-300': mentor.slug === selectedMentor,
                      '!-top-[200%]': filteredMentors.length === 1,
                      '!-top-[80%]': filteredMentors.length === 2,
                      '!-top-[16%]': filteredMentors.length === 4,
                    },
                  ]"
                />
              </transition>

              <a
                :href="`${mentor.link}`"
                target="_blank"
                class="transition-all absolute left-[65%] lg:left-[87%] duration-300 opacity-0 flex items-center min-w-max gap-2 cursor-pointer lg:ml-auto"
                :class="[
                  {
                    'opacity-100': mentor.slug === selectedMentor,
                    'color-[#9D9D9D]': mentor.slug !== selectedMentor,
                    '!translate-y-[20px]': filteredMentors.length === 1,
                    '!translate-y-[100px]': filteredMentors.length === 4,
                  },
                ]"
              >
                <span class="font-bold text-xs lg:text-sm">{{
                  $t('mentors.filter.more')
                }}</span>
                <svg-icon name="arrowCircle" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <vue-slider
          v-if="filteredMentors.length > 5"
          v-model="sliderValue"
          :adsorb="true"
          height="2px"
          tooltip="none"
          :min="0"
          :max="sliderMaxValue"
          class="mt-[10px] lg:hidden"
          v-bind="options.mobileSlider"
        ></vue-slider>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeMentors',
  data() {
    return {
      options: {
        slick: {
          dots: false,
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: false,
          arrows: false,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },

        mobileSlider: {
          dotOptions: [
            {
              style: {
                width: '44px',
                borderRadius: '100px',
                boxShadow: 'none',
              },
            },
          ],
        },

        desktopSlider: {
          dotOptions: [
            {
              style: {
                height: '44px',
                borderRadius: '100px',
                boxShadow: 'none',
              },
            },
          ],
        },
      },
      filters: [
        'all',
        'Innovation',
        'Business',
        // 'ChemistryAndPlastic',
        // 'Investments',
        'FinanceAndStrategy',
        'SustainableDevelopment',
        'ResearchAndDevelopment',
        'HumanResources',
      ],

      mentors: [
        {
          slug: 'antonio-queiroz',
          name: 'Antonio Queiroz',
          image: 'Antonio-Queiroz.png',
          vertical: 'Innovation',
          link: 'https://www.linkedin.com/in/antonio-queiroz-0468b93/',
        },
        {
          slug: 'mark-nikolich',
          name: 'Mark Nikolich',
          image: 'Mark-Nikolich.png',
          vertical: 'Business',
          link: 'https://www.linkedin.com/in/mark-nikolich-8a37077/',
        },
        {
          slug: 'edison-terra',
          name: 'Edison Terra',
          image: 'Edison-Terra.png',
          vertical: 'Business',
          link: 'https://www.linkedin.com/in/edison-terra/',
        },
        {
          slug: 'pedro-freitas',
          name: 'Pedro Freitas',
          image: 'Pedro-Freitas.png',
          vertical: 'FinanceAndStrategy',
          link: 'https://www.linkedin.com/in/pedro-van-langendonck-teixeira-de-freitas-620161/',
        },
        {
          slug: 'guilherme-baeta',
          name: 'Guilherme Baeta',
          image: 'Guilherme-Baeta.png',
          vertical: 'Innovation',
          link: 'https://www.linkedin.com/in/guilherme-baeta/',
        },
        {
          slug: 'celso-procknor',
          name: 'Celso Procknor',
          image: 'Celso-Procknor.png',
          vertical: 'Innovation',
          link: 'https://www.linkedin.com/in/celsoprocknor/',
        },
        {
          slug: 'adilson-arli',
          name: 'Adilson Arli',
          image: 'Adilson-Arli.png',
          vertical: 'Innovation',
          link: 'https://www.linkedin.com/in/innovationadilsondasilva/',
        },
        {
          slug: 'scott-mitchel',
          name: 'Scott Mitchel',
          image: 'Scott-Mitchel.png',
          vertical: 'ResearchAndDevelopment',
          link: 'https://www.linkedin.com/in/scott-mitchell-35438b10/',
        },
        {
          slug: 'patricia-viotto',
          name: 'Patricia Viotto',
          image: 'Patricia-Viotto.png',
          vertical: 'HumanResources',
          link: 'https://www.linkedin.com/in/patr%C3%ADcia-viotto-bbab20/',
        },
        {
          slug: 'fabio-lamon',
          name: 'Fabio Lamon',
          image: 'Fabio-Lamon.png',
          vertical: 'ResearchAndDevelopment',
          link: 'https://www.linkedin.com/in/fabio-lamon-917b338/',
        },
        {
          slug: 'gus-hutras',
          name: 'Gus Hutras',
          image: 'Gus-Hutras.png',
          vertical: 'ResearchAndDevelopment',
          link: 'https://www.linkedin.com/in/gus-hutras-286a4567/',
        },
        {
          slug: 'yuki-kabe',
          name: 'Yuki Kabe',
          image: 'Yuki-Kabe.png',
          vertical: 'SustainableDevelopment',
          link: 'https://www.linkedin.com/in/yuki-hamilton-onda-kabe-0339364a/',
        },
        {
          slug: 'dan-macEachran',
          name: 'Dan MacEachran',
          image: 'Dan-MacEachran.png',
          vertical: 'ResearchAndDevelopment',
          link: 'https://www.linkedin.com/in/dmaceachran/',
        },
        {
          slug: 'jake-harrison',
          name: 'Jake Harrison',
          image: 'Jake-Harrison.png',
          vertical: 'ResearchAndDevelopment',
          link: 'https://www.linkedin.com/in/jakeharrison/',
        },
        {
          slug: 'josh-taylor',
          name: 'Josh Taylor',
          image: 'Josh-Taylor.png',
          vertical: 'ResearchAndDevelopment',
          link: 'https://www.linkedin.com/in/josh-taylor-83528a7/',
        },
        {
          slug: 'dirk-haench',
          name: 'Dirk Haench',
          image: 'Dirk-Haench.png',
          vertical: 'ResearchAndDevelopment',
          link: 'https://www.linkedin.com/in/dirk-haensch-6173a9a/',
        },
        {
          slug: 'mauro-oviedo',
          name: 'Mauro Oviedo',
          image: 'Mauro-Oviedo.png',
          vertical: 'ResearchAndDevelopment',
          link: 'https://www.linkedin.com/in/mauro-oviedo-898a5b162/',
        },
        {
          slug: 'roberto-werneck',
          name: 'Roberto Werneck',
          image: 'Roberto-Werneck.png',
          vertical: 'ResearchAndDevelopment',
          link: 'https://www.linkedin.com/in/roberto-werneck-ba6129/',
        },
        {
          slug: 'alessandro-bernardi',
          name: 'Alessandro Bernardi',
          image: 'Alessandro-Bernardi.png',
          vertical: 'ResearchAndDevelopment',
          link: 'https://www.linkedin.com/in/alessandro-bernardi-a328268/',
        },
        {
          slug: 'isabel-figueiredo',
          name: 'Isabel Figueiredo',
          image: 'Isabel-Figueiredo.png',
          vertical: 'Business',
          link: 'https://www.linkedin.com/in/isabel-figueiredo-a0a586a0/',
        },
      ],
      filteredMentors: [],
      selectedMentor: '',
      selectedMentorIndex: 0,
      sliderValue: 0,
      selectedFilter: 'all',
    }
  },
  computed: {
    sliderMaxValue() {
      return this.filteredMentors.length - 1
    },
  },
  watch: {
    sliderValue() {
      const nextIndex = this.sliderValue
      const isMobile = window.innerWidth < 1024

      if (
        this.filteredMentors.length > 5 &&
        document.querySelector('.vue-slider-dot')
      ) {
        if (nextIndex === this.sliderMaxValue) {
          document.querySelector('.vue-slider-dot').style[
            isMobile ? 'width' : 'height'
          ] = '85px'
        } else {
          document.querySelector('.vue-slider-dot').style[
            isMobile ? 'width' : 'height'
          ] = '14px'
        }
      }

      const current = document.getElementById(`mentor-${nextIndex}`)

      if (current && this.selectedFilter === 'all') {
        const nextSlug = this.mentors[nextIndex].slug
        this.setSelectedMentor(nextSlug, nextIndex)
        return
      }

      const nextSlug = this.filteredMentors[nextIndex].slug
      this.setSelectedMentor(nextSlug, nextIndex)
    },
    selectedFilter() {
      this.selectedMentorIndex = 0
      this.sliderValue = 0

      if (this.selectedFilter === 'all') {
        this.filteredMentors = this.mentors
        this.selectedMentor = this.mentors[0].slug

        return
      }

      const filteredMentors = this.mentors.filter(
        (mentor) => mentor.vertical === this.selectedFilter
      )

      this.filteredMentors = filteredMentors
      this.selectedMentor = filteredMentors[0].slug
    },
  },
  mounted() {
    this.filteredMentors = this.mentors
    this.selectedMentor = this.mentors[0].slug
  },
  methods: {
    setSelectedMentor(slug, selectedIndex) {
      this.selectedMentor = slug
      const isMobile = window.innerWidth < 1024

      const list = document.getElementById('mentors-list')
      const img = document.getElementById(`mentor-${selectedIndex}`).children[2]
      const link = document.getElementById(`mentor-${selectedIndex}`)
        .children[3]

      const base = 47
      const forward = selectedIndex * base
      let forwardImage = forward + base
      let forwardLink = forward + base * 3

      if (isMobile) {
        forwardImage = forward + base * 3.3
        forwardLink = forward + base * 3.3
      }

      if (this.filteredMentors.length <= 5) {
        list.style.transform = `translateY(0)`
        img.style.transform = `translateY(${base}px)`
        link.style.transform = `translateY(140px)`

        if (isMobile) {
          img.style.transform = `translateY(120px)`
          link.style.transform = `translateY(140px)`
        }
      } else {
        list.style.transform = `translateY(-${forward}px)`
        img.style.transform = `translateY(+${forwardImage}px)`
        link.style.transform = `translateY(+${forwardLink}px)`
      }

      this.selectedMentorIndex = selectedIndex
    },
  },
}
</script>

<style lang="postcss">
.mentors-section {
  .mentor {
    @apply border-b border-gray;

    &:last-of-type {
      @apply border-none;
    }

    img {
      top: 0;
    }

    a {
      top: 0;
    }

    &:first-child {
      img {
        transform: translateY(141px);

        @media (min-width: 1024px) {
          transform: translateY(47px);
        }
      }

      a {
        transform: translateY(162px);

        @media (min-width: 1024px) {
          transform: translateY(141px);
        }
      }
    }
  }

  .vue-slider-rail,
  .vue-slider-process,
  .vue-slider-dot-handle {
    background-color: #000;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 1s ease;
  }

  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-enter {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
