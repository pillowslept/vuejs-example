<template>
  <div class="todos">
    <transition-group name="list">
      <div v-bind:key="todo.id" v-for="(todo, index) in todos">
        <TodoItem :key="index" v-bind:todo="todo" v-on:deleteTodo="deleteTodo" v-on:updateFilters="updateFilters" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  name: 'TodosList',
  props: ['todos'],
  components: {
    TodoItem,
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

  .list-enter-active, .list-leave-active {
    transition: opacity .5s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
  }
</style>
