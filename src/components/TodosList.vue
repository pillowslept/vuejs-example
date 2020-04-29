<template>
  <div class="todos">
    <Todo />
    <Todo />
    <Todo />
    <Todo />
  </div>
</template>

<script>
  import Todo from '@/components/Todo'

  export default {
    name: 'TodosList',
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
