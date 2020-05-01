<template>
  <div class="todos">
    <div v-bind:key="todo.id" v-for="todo in todos">
      <Todo v-bind:todo="todo" v-on:deleteTodo="deleteTodo" v-on:updateFilters="updateFilters" />
    </div>
  </div>
</template>

<script>
import Todo from '@/components/Todo';

export default {
  name: 'TodosList',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      this.$emit('deleteTodo', todo);
    },
    updateFilters() {
      this.$emit('updateFilters');
    }
  }
};
</script>

<style scoped>
  .todos {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
