<template>
  <div>
    <ThreeDObjectGenerator :geometry="GEOMETRY" :editableHeight="height" />
  </div>
</template>

<script>
import ThreeDObjectGenerator from '@/components/ThreeDObjectGenerator.vue'

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
    this.GEOMETRY = [[0,0],[0,10],[15,10],[7,15],[7,8],[7,0]]
  }
}
</script>