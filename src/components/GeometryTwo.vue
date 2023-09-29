<template>
  <div>
    <ThreeDObjectGenerator :geometry="GEOMETRY" :editableHeight="1" />
  </div>
</template>

<script>
import ThreeDObjectGenerator from './ThreeDObjectGenerator.vue'

export default {
  components: {
    ThreeDObjectGenerator,
  },
  created() {
    this.GEOMETRY = [[0,0], [7,12], [0,14]]
  }
}
</script>