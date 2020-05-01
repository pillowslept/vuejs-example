<template>
  <div class="home">
    <AddTodo v-on:addTodo="addTodo" />
    <TodosList v-bind:todos="todos" v-on:deleteTodo="deleteTodo" v-on:updateFilters="updateFilters" />
    <Message v-if="!todos.length" msg="What's to be done" />
    <hr />
    <TodoActions v-on:updateFilter="updateFilter" />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import AddTodo from '@/components/AddTodo';
import TodosList from '@/components/TodosList';
import TodoActions from '@/components/TodoActions';
import Message from '@/components/Message';

export default {
  name: 'Home',
  data() {
    return {
      allTodos: [],
      todos: [],
      filter: ''
    };
  },
  components: {
    AddTodo,
    TodoActions,
    TodosList,
    Message,
  },
  mounted() {
    if (localStorage.allTodos) {
      this.allTodos = JSON.parse(localStorage.getItem('allTodos'));
      this.todos = [...this.allTodos];
    }
  },
  methods: {
    addTodo(todo) {
      this.allTodos = [...this.allTodos, { ...todo, id: uuidv4() }];
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
        this.filter === 'completed' ? isCompleted : (this.filter === 'toDo' ? !isCompleted : this.filter === ''));
      localStorage.setItem('allTodos', JSON.stringify(this.todos));
    }
  }
};
</script>
