<template>
  <div class="h-[314px] w-[320px]">
    <a
      v-for="(item, index) in slide"
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
</template>

<script>
import { calcDeg, calcDiag } from '../../calc'

export default {
  name: 'SlideModel',
  props: {
    slide: {
      type: Object,
      required: true,
    },
    lines: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleLine({ from, to, borderColor }) {
      let x1 = 0
      let y1 = 0
      let x2 = 0
      let y2 = 0
      {
        const { left, top, size } = this.slide[from]
        x1 = left + size
        y1 = top + size
      }
      {
        const { left, top, size } = this.slide[to]
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
/* stylelint-disable-next-line */
.node {
  border-radius: 9999px;
  position: absolute;
  z-index: 10;
}
/* stylelint-disable-next-line */
.line {
  border-top-width: 1px;
  border-style: solid;
  position: absolute;
  transform-origin: top left;
}
</style>
