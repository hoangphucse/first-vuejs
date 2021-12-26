<template>
  <TodoItem
    v-for="todo in todos"
    v-bind:key="todo.id"
    v-bind:todoProps="todo"
  />
</template>

<script>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
export default {
  name: 'Todos',
  components: { TodoItem },
  setup() {
    const todos = ref([
      {
        id: 1,
        title: 'Thúy Hằng',
        completed: false
      },
      {
        id: 2,
        title: 'Vân Anh',
        completed: true
      },
      {
        id: 3,
        title: 'Thiên Hà',
        completed: false
      }
    ])
    return {
      todos
    }
  }
}
</script>

<style>
</style>