<template>
  <div class="todo">
    <input
      v-model="todo.isCompleted"
      @change="updateFilters"
      type="checkbox" />
    <span
      class="name"
      :class="{ 'completed': todo.isCompleted }">{{ todo.name }}</span>
    <button
      @click="deleteTodo">X</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    deleteTodo() {
      this.$emit('deleteTodo', this.todo);
    },
    updateFilters() {
      this.$emit('updateFilters');
    }
  }
};
</script>

<style scoped>
  .todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f1f1f1;
    border-bottom: 3px solid white;
    border-radius: 5px;
  }

  .name {
    font-weight: bold;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .completed {
    text-decoration-line: line-through;
  }
</style>
