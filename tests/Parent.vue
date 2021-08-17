<template>
  <h1>Parent</h1>
  <Child msg='HARIL' />
</template>

<script>
import Child from './Child'

export default {
  name: 'Parent',
  components: { Child },
}
</script>

<style scoped></style>
