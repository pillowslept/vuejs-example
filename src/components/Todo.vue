<template>
  <div class="todo">
    <div class="info">
      <input type="checkbox" />
      <span>Todo title</span>
    </div>
    <button>X</button>
  </div>
</template>

<script>
  export default {
    name: 'Todo',
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
</style>
