<template>
  <div class="home">
    <AddTodo />
    <TodosList v-bind:todos="filteredTodos" />
    <Message v-if="!filteredTodos.length" msg="What's to be done" />
    <TodoActions />
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo';
import TodosList from '@/components/TodosList';
import TodoActions from '@/components/TodoActions';
import Message from '@/components/Message';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    AddTodo,
    TodoActions,
    TodosList,
    Message,
  },
  computed: {
    ...mapGetters(['filteredTodos'])
  },
};
</script>
