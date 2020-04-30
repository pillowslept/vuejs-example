<template>
  <div class="common-actions">
    <label>All <input v-model="filter" type="radio" value="all" name="filter" @change="updateFilter" /></label>
    <label>Completed <input v-model="filter" type="radio" value="completed" name="filter" @change="updateFilter" /></label>
    <label>Deleted <input v-model="filter" type="radio" value="deleted" name="filter" @change="updateFilter" /></label>
  </div>
</template>

<script>
  export default {
    name: 'TodoActions',
    data() {
      return {
        filter: 'all'
      }
    },
    methods: {
      updateFilter() {
        this.$emit('updateFilter', this.filter);
      }
    },
  }
</script>

<style scoped>
  .common-actions {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
