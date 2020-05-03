<template>
  <div id="app">
    <TheHeader />
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader,
  }
};
</script>

<style>
  body {
    margin: 0;
  }

  .main-container {
    margin-top: 1rem;
    width: 50%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 950px) {
    .main-container {
      width: 70%;
    }

    button {
      padding: 6px 10px !important;
    }
  }

  @media only screen and (max-width: 500px) {
    .main-container {
      width: 90%;
    }
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  button {
    background-color: #ffffff;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    display: inline-block;
    cursor: pointer;
    color: #42b983;
    font-weight: bold;
    padding: 6px 24px;
    text-shadow: 0px 1px 0px #ffffff;
  }

  button:hover {
    background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
    background-color: #f6f6f6;
  }

  button:disabled {
    cursor: not-allowed;
    color: #666666;
  }
</style>
