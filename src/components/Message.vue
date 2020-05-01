<template>
  <div class="container">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .container {
    text-align: center;
  }
</style>
