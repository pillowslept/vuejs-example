<template>
  <div class="todo">
    <div class="info">
      <input v-model="todo.isCompleted" type="checkbox" />
      <span class="name" v-bind:class="{ 'completed': todo.isCompleted }">{{ todo.name }}</span>
    </div>
    <button @click="deleteTodo">X</button>
  </div>
</template>

<script>
  export default {
    name: 'Todo',
    props: ['todo'],
    methods: {
      deleteTodo() {
        this.$emit('deleteTodo', this.todo);
      }
    }
  }
</script>

<style scoped>
  .todo {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f1f1f1;
    border-bottom: 3px solid white;
    border-radius: 5px;
  }

  .name {
    font-weight: bold;
    margin-left: 1rem;
  }

  .completed {
    text-decoration-line: line-through;
  }
</style>
