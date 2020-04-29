<template>
  <div class="common-actions">
    <label>All <input type="checkbox" /></label>
    <label>Completed <input type="checkbox" /></label>
    <label>Deleted <input type="checkbox" /></label>
  </div>
</template>

<script>
  export default {
    name: 'TodoActions',
  }
</script>

<style scoped>
  .common-actions {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
