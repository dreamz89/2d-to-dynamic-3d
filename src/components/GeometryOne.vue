<template>
  <ThreeDObjectGenerator :geometry="GEOMETRY" :color="color" :editableHeight="height" />
</template>

<script>
import { GUI } from 'dat.gui'
import ThreeDObjectGenerator from '@/components/ThreeDObjectGenerator.vue'

export default {
  components: {
    ThreeDObjectGenerator,
  },
  data() {
    return {
      color: '#008080',
      height: 1
    }
  },
  created() {
    this.GEOMETRY = [[0,0],[0,10],[15,10],[7,15],[7,8],[7,0]]

    this.createGui()
  },
  methods: {
    createGui() {
      const gui = new GUI()
      gui.domElement.id = 'gui'
      gui.add(this, 'height').min(0).max(5).step(1)
      gui.addColor(this, 'color')
    }
  }
}
</script>