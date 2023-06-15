<template>
  <section
    class="h-[638px] md:h-[3000px] bg-gray flex justify-center"
    @scroll="handleScroll"
  >
    <div
      class="w-[320px] flex flex-col items-center gap-[10px] mt-[104px] md:w-[1300px] md:h-[653px] md:sticky md:top-[160px] md:mb-[80px]"
    >
      <div class="flex flex-col w-[280px] md:w-[640px] xl:gap-6 xl:self-start">
        <h1 class="font-bold text-2xl md:text-5xl">Parceiros</h1>
        <p class="font-poppins text-xs md:text-base xl:ml-[110px]">
          O fazer junto potencializa resultados. Nos conectamos tanto com as
          instituições locais, quanto com as mundialmente renomadas. São
          conexões que compartilham expertise e proporcionam o que as startups
          mais precisam.
        </p>
      </div>
      <div
        class="w-[1300px] relative hidden xl:flex"
        :style="{ height: containerHeight[scene] }"
      >
        <a
          v-for="(item, index) in positionNodes[scene]"
          :id="index"
          :key="index"
          :href="item.link ? item.link : null"
          :style="handleNode(item, 0)"
          class="node"
        />
        <div
          v-for="(item, index) in lines"
          :id="index"
          :key="index"
          class="line"
          :style="handleLine(item)"
        />
      </div>
      <div class="mx-auto xl:hidden">
        <Carousel />
      </div>
    </div>
  </section>
</template>

<script>
import { calcDeg, calcDiag } from './calc'
import { lines } from './NetworkAnimation/Lines'
import {
  sceneZero,
  sceneOne,
  sceneTwo,
  sceneThree,
  sceneFour,
} from './NetworkAnimation/Scenes'

import Carousel from './NetworkCarousel/Carousel.vue'

export default {
  name: 'Partners',
  components: {
    Carousel,
  },
  data() {
    return {
      positionNodes: {
        0: sceneZero,
        1: sceneOne,
        2: sceneTwo,
        3: sceneThree,
        4: sceneFour,
      },
      lines,
      containerHeight: {
        0: '467.24px',
        1: '470.24px',
        2: '473.24px',
        3: '473px',
        4: '470px',
      },
      scene: 0,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleLine({ from, to, borderColor }) {
      let x1 = 0
      let y1 = 0
      let x2 = 0
      let y2 = 0
      {
        const { left, top, size } = this.positionNodes[this.scene][from]
        x1 = left + size
        y1 = top + size
      }
      {
        const { left, top, size } = this.positionNodes[this.scene][to]
        x2 = left + size
        y2 = top + size
      }
      const diffX = x2 - x1
      const diffY = y2 - y1
      const deg = calcDeg(diffY, diffX)
      const diag = calcDiag(diffY, diffX)
      return {
        width: `${diag}px`,
        top: `${y1}px`,
        left: `${x1}px`,
        transform: `rotate(${deg}deg)`,
        'border-color': borderColor,
        transition: 'top 0.5s, left 0.5s, transform 0.5s, width 0.5s',
      }
    },
    handleNode({ top, left, size, border, background }) {
      return {
        top: `${top}px`,
        left: `${left}px`,
        width: `${size * 2}px`,
        height: `${size * 2}px`,
        border,
        background,
        transition: 'top 0.5s, left 0.5s, width 0.5s, height 0.5s',
      }
    },
    handleScroll() {
      let timeoutId = () => {}

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const scrollPos = window.scrollY

        if (scrollPos < 400) {
          this.scene = 0
        } else if (scrollPos > 400 && scrollPos < 800) {
          this.scene = 1
        } else if (scrollPos > 800 && scrollPos < 1200) {
          this.scene = 2
        } else if (scrollPos > 1200 && scrollPos < 1600) {
          this.scene = 3
        } else if (scrollPos > 1600) {
          this.scene = 4
        }
      }, 150)
    },
  },
}
</script>

<style scoped>
.node {
  border-radius: 9999px;
  position: absolute;
  z-index: 10;
}

.line {
  border-top-width: 1px;
  border-style: solid;
  position: absolute;
  transform-origin: top left;
}
</style>
