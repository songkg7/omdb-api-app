<template>
  <h1>Movie!</h1>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
    this.$store.dispatch('movie/searchMovieWithId', {
      // movie/{id}
      id: this.$route.params.id,
    })
  }
}
</script>