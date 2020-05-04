import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    filter: '',
    todos: [],
  },
  getters: {
    filteredTodos(state) {
      return state.todos.filter(({ isCompleted }) =>
        state.filter === 'completed' ?
          isCompleted : (state.filter === 'toDo' ? !isCompleted : state.filter === ''));
    },
    selectedFilter(state) {
      return state.filter;
    },
    counter(state, getters) {
      return getters.filteredTodos.length;
    },
  },
  mutations: {
    syncState(state) {
      if (localStorage.state) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('state')))
        );
      }
    },
    addTodo(state, todo) {
      state.todos = [...state.todos, { ...todo, id: uuidv4() }];
    },
    deleteTodo(state, todo) {
      state.todos = state.todos.filter(({ id }) => id !== todo.id);
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(({ id }) => id === todo.id);
      state.todos.splice(index, 1, todo);
    },
    updateFilter(state, filter) {
      state.filter = filter;
    }
  },
  actions: {
    addTodo(context, todo) {
      context.commit('addTodo', todo);
    },
    deleteTodo(context, todo) {
      context.commit('deleteTodo', todo);
    },
    updateTodo(context, todo) {
      context.commit('updateTodo', todo);
    }
  }
});

store.subscribe((mutation, state) =>
  localStorage.setItem('state', JSON.stringify(state)));

export default store;