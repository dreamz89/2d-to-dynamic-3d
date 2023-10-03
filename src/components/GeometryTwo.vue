<template>
  <ThreeDObjectGenerator :geometry="GEOMETRY" :editableHeight="height" />
</template>

<script>
import { GUI } from 'dat.gui'
import ThreeDObjectGenerator from './ThreeDObjectGenerator.vue'

export default {
  components: {
    ThreeDObjectGenerator,
  },
  data() {
    return {
      height: 1
    }
  },
  created() {
    this.GEOMETRY = [[0,0], [7,12], [0,14]]

    this.createGui()
  },
  methods: {
    createGui() {
      const gui = new GUI()
      gui.domElement.id = 'gui'
      gui.add(this, 'height').min(0).max(5).step(1)
    }
  }
}
</script>