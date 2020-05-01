<template>
  <div class="home">
    <AddTodo v-on:addTodo="addTodo" />
    <TodosList v-bind:todos="todos" v-on:deleteTodo="deleteTodo" />
    <Message v-if="!todos.length" msg="What's to be done" />
    <hr />
    <TodoActions v-on:updateFilter="updateFilter" />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo'
import TodosList from '@/components/TodosList'
import TodoActions from '@/components/TodoActions'
import Message from '@/components/Message'

export default {
  name: 'Home',
  created() {
    this.todos = [...this.allTodos];
  },
  data() {
    return {
      allTodos: [
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
      ],
      todos: [],
      filter: ''
    }
  },
  components: {
    AddTodo,
    TodoActions,
    TodosList,
    Message,
  },
  methods: {
    addTodo(todo) {
      this.allTodos = [...this.allTodos, { ...todo, id: Math.floor(Math.random() * 100) }];
      this.updateFilters();
    },
    deleteTodo(todo) {
      this.allTodos = this.allTodos.filter(({ id }) => id !== todo.id);
      this.updateFilters();
    },
    updateFilter(filter) {
      this.filter = filter;
      this.updateFilters();
    },
    updateFilters() {
      this.todos = this.allTodos.filter(({ isCompleted }) =>
        this.filter === 'completed' ? isCompleted : (this.filter === 'toDo' ? !isCompleted : this.filter === ''))
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
