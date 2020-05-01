<template>
  <div class="add">
    <input v-on:keyup.enter="addTodo" v-model="name" type="text"
      placeholder="Write here (5 Characters minimum)" />
    <button :disabled="!isValid" @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      name: ''
    };
  },
  computed: {
    isValid() {
      return this.name && this.name.length > 5;
    }
  },
  methods: {
    addTodo() {
      if (this.isValid) {
        this.$emit('addTodo', { name: this.name, isCompleted: false });
        this.name = '';
      }
    }
  },
};
</script>

<style scoped>
  .add {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  input[type=text] {
    width: 70%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    width: 15%;
  }
</style>
