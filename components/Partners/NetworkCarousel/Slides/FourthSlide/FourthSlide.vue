<template>
  <SlideModel :slide="positionNodes" :lines="lines" />
</template>

<script>
import SlideModel from '../SlideModel.vue'
import { lines } from './lines'
import { positionNodes } from './positionNodes'
export default {
  name: 'FourthSlide',
  components: { SlideModel },
  data() {
    return {
      lines,
      positionNodes,
    }
  },
}
</script>
