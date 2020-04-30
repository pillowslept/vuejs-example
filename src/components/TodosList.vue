<template>
  <div class="todos">
    <div v-bind:key="todo.id" v-for="todo in todos">
      <Todo v-bind:todo="todo" />
    </div>
  </div>
</template>

<script>
  import Todo from '@/components/Todo'

  export default {
    name: 'TodosList',
    data() {
      return {
        todos: [
          {
            id: 1,
            name: 'Take a walk',
            isCompleted: false,
          },
          {
            id: 2,
            name: 'Take a shower',
            isCompleted: true,
          },
          {
            id: 3,
            name: 'Go to sleep',
            isCompleted: false,
          }
        ]
      }
    },
    components: {
      Todo,
    }
  }
</script>

<style scoped>
  .todos {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
