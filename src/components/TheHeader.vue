<template>
  <div class="header">
    <div class="information">
      <img alt="Vue logo" src="../assets/logo.png">
      <span class="title">Todos application</span>
    </div>
    <div class="actions">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style scoped>
  img {
    width: 25px;
  }

  .header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
  }

  .information {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .actions a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  .actions a.router-link-exact-active {
    color: #42b983;
  }

  @media only screen and (max-width: 400px) {
    .title {
      display: none;
    }
  }
</style>
