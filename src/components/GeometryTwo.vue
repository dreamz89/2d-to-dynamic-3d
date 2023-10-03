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
    this.GEOMETRY = [[0,0], [7,12], [0,14]]

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