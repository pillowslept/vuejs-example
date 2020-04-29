<template>
  <div class="home">
    <AddTodo />
    <TodosList />
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
  components: {
    AddTodo,
    TodoActions,
    TodosList,
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
