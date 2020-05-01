<template>
  <div class="common-actions">
    <label>All <input v-model="filter" type="radio" value="" name="filter" @change="updateFilter" /></label>
    <label>Completed <input v-model="filter" type="radio" value="completed" name="filter" @change="updateFilter" /></label>
    <label>To do <input v-model="filter" type="radio" value="toDo" name="filter" @change="updateFilter" /></label>
  </div>
</template>

<script>
  export default {
    name: 'TodoActions',
    data() {
      return {
        filter: ''
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
