<template>
  <div class="todos">
    <div v-bind:key="todo.id" v-for="todo in todos">
      <Todo v-bind:todo="todo" v-on:deleteTodo="deleteTodo" />
    </div>
  </div>
</template>

<script>
  import Todo from '@/components/Todo'

  export default {
    name: 'TodosList',
    props: ['todos'],
    components: {
      Todo,
    },
    methods: {
      deleteTodo(todo) {
        this.$emit('deleteTodo', todo);
      }
    }
  }
</script>

<style scoped>
  .todos {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
