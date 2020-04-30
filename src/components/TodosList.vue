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
    props: ['todos'],
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
