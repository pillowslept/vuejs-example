<template>
  <div>
    <hr />
    <div class="common-actions">
      <label>
        All
        <input
          v-model="filter"
          type="radio"
          value=""
          name="filter"
          @change="updateFilter" />
      </label>
      <label>
        Completed
        <input v-model="filter"
          type="radio"
          value="completed"
          name="filter"
          @change="updateFilter" />
      </label>
      <label>
        To do
        <input
          v-model="filter"
          type="radio"
          value="toDo"
          name="filter"
          @change="updateFilter" />
      </label>
    </div>
    <hr />
    <div class="counter">
      <b>Total: </b> {{ counter }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoActions',
  props: ['counter'],
  data() {
    return {
      filter: '',
    };
  },
  methods: {
    updateFilter() {
      this.$emit('updateFilter', this.filter);
    },
  },
};
</script>

<style scoped>
  .common-actions {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  label {
    cursor: pointer;
  }

  .counter {
    display: flex;
    justify-content: flex-end;
  }
</style>
