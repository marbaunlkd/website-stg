<template>
  <section
    class="h-[3000px] flex justify-center items-center flex-col gap-4 bg-gray"
    @scroll="handleScroll"
  >
    <div
      class="w-[1300px] flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      :style="{ height: containerHeight[scene] }"
    >
      <div
        v-for="(item, index) in positionNodes[scene]"
        :id="index"
        :key="index"
        class="node"
        :style="handleNode(item)"
      />
      <div
        v-for="(item, index) in lines"
        :id="index"
        :key="index"
        class="line"
        :style="handleLine(item.from, item.to, item.borderColor)"
      />
    </div>
  </section>
</template>

<script>
import { calcDeg, calcDiag } from './calc'
import { sceneZero, sceneOne, sceneTwo, sceneThree, sceneFour } from './scenes'
import { lines } from './lines'

export default {
  name: 'NetworkAnimation',
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
    handleLine(from, to, borderColor) {
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
    handleNode(node) {
      const { top, left, size, border, background } = node
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
        } else if (scrollPos > 400 && scrollPos < 700) {
          this.scene = 1
        } else if (scrollPos > 700 && scrollPos < 1000) {
          this.scene = 2
        } else if (scrollPos > 1000 && scrollPos < 1500) {
          this.scene = 3
        } else if (scrollPos > 1500) {
          this.scene = 4
        }
      }, 200)
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
