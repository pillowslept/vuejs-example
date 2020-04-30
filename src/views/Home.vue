<template>
  <div class="home">
    <AddTodo v-on:addTodo="addTodo" />
    <TodosList v-bind:todos="todos" />
    <hr />
    <TodoActions />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo'
import TodosList from '@/components/TodosList'
import TodoActions from '@/components/TodoActions'

export default {
  name: 'Home',
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
    AddTodo,
    TodoActions,
    TodosList,
  },
  methods: {
    addTodo(todo) {
      this.todos = [...this.todos, { ...todo, id: Math.floor(Math.random() * 100) }]
    },
    deleteTodo(todo) {
      this.todos = this.filter(({ id }) => id !== todo.id);
    }
  }
}
</script>

<style scoped>
  .home {
    width: 50%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 950px) {
    .home {
      width: 70%;
    }
  }

  @media only screen and (max-width: 500px) {
    .home {
      width: 90%;
    }
  }
</style>
