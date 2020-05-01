<template>
  <div class="about">
    <Message msg="Todos application" />
    <hr />
    <div class="options">
      <span class="option">Add</span>
      <span class="option">Mark as completed</span>
      <span class="option">Delete</span>
      <span class="option">Filter by states</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message';

export default {
  name: 'About',
  components: {
    Message,
  }
};
</script>

<style scoped>
  .options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
  }

  .option {
    width: 90%;
    padding: 1rem;
    background-color: #f1f1f1;
    border-bottom: 3px solid white;
    border-radius: 5px;
  }
</style>

