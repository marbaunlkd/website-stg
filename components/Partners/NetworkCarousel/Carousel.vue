<template>
  <div class="flex flex-col gap-[18px] w-full">
    <div class="flex gap-4 self-end mr-5">
      <button
        class="w-8 h-8 flex justify-center items-center border-2 border-solid rounded-full rotate-180 disabled:border-[#BEBEBF]"
        @mousedown="prevClickScrollX"
      >
        <svg-icon class="w-2 h-3 text-black" name="arrow-right" />
      </button>
      <button
        class="w-8 h-8 flex justify-center items-center border-2 border-solid rounded-full disabled:border-[#BEBEBF]"
        @click="nextClickScrollX"
      >
        <svg-icon class="w-2 h-3 text-black" name="arrow-right" />
      </button>
    </div>
    <div ref="scrollX" class="overflow-x-hidden scroll-smooth">
      <div class="h-[340px] flex relative w-auto">
        <a
          v-for="(item, index) in nodes"
          :id="index"
          :key="index"
          :href="item.link ? item.link : null"
          class="node"
          :style="handleNode(item)"
        />
        <div
          v-for="(item, index) in lines"
          :id="index"
          :key="index"
          class="line"
          :style="handleLine(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { calcDeg, calcDiag } from '../calc'

import { nodes } from './nodes'
import { lines } from './lines'
export default {
  name: 'CarouselSlide',
  data() {
    return {
      lines,
      nodes,
    }
  },
  methods: {
    prevClickScrollX() {
      this.$refs.scrollX.scrollLeft -= 320
    },
    nextClickScrollX() {
      this.$refs.scrollX.scrollLeft += 320
    },
    handleLine({ from, to, borderColor }) {
      let x1 = 0
      let y1 = 0
      let x2 = 0
      let y2 = 0
      {
        const { left, top, size } = this.nodes[from]
        x1 = left + size
        y1 = top + size
      }
      {
        const { left, top, size } = this.nodes[to]
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
      }
    },
    handleNode({ top, left, size, border, background, backgroundSize }) {
      return {
        top: `${top}px`,
        left: `${left}px`,
        width: `${size * 2}px`,
        height: `${size * 2}px`,
        border,
        background,
        transition: 'top 0.5s, left 0.5s, width 0.5s, height 0.5s',
        'background-size': backgroundSize,
        'z-index': size === 60 ? '10' : '1',
      }
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