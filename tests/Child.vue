<template>
  <div>Child: {{ msg }}</div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
