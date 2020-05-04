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
          name="filter" />
      </label>
      <label>
        Completed
        <input
          v-model="filter"
          type="radio"
          value="completed"
          name="filter" />
      </label>
      <label>
        To do
        <input
          v-model="filter"
          type="radio"
          value="toDo"
          name="filter" />
      </label>
    </div>
    <hr />
    <div class="counter">
      <b>Total: </b> {{ counter }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TodoActions',
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit('updateFilter', value);
      }
    },
    ...mapGetters(['counter', 'selectedFilter']),
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
