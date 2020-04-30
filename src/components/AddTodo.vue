<template>
  <div class="add">
    <input v-model="name" type="text" placeholder="Write the todo name here (5 Characters minimum)" />
    <button :disabled="!isValid" @click="addTodo">Add</button>
  </div>
</template>

<script>
  export default {
    name: 'AddTodo',
    data() {
      return {
        name: ''
      }
    },
    computed: {
      isValid() {
        return this.name && this.name.length > 5;
      }
    },
    methods: {
      addTodo() {
        this.$emit('addTodo', { name: this.name, isCompleted: false });
        this.name = '';
      }
    },
  }
</script>

<style scoped>
  input {
    width: 80%;
  }

  button {
    width: 15%;
  }
</style>
