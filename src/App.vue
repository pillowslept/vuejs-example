<template>
  <div id="app">
    <Header />
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  .main-container {
    margin-top: 1rem;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
