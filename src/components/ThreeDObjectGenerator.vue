<template>
  <div>
    {{ geometry }}
  </div>
</template>

<script>
export default {
  props: {
    geometry: Array,
    editableHeight: Number
  }
}
</script>