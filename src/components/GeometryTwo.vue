<template>
  <div>
    <ThreeDObjectGenerator :geometry="GEOMETRY" :editableHeight="height" />
  </div>
</template>

<script>
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

    setTimeout(() => {
      this.height = 2
    }, 1000)

    setTimeout(() => {
      this.height = 1
    }, 2000)
  }
}
</script>