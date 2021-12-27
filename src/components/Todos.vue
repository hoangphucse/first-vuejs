<template>
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todoProps="todo"
    @item-completed="markCompleted"
    @deleted-item="deleteItem"
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

    const markCompleted = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    }

    const deleteItem = id => {
      console.log(id)
      todos.value = todos.value.filter(todo => todo.id !== id)
    }

    return {
      todos,
      markCompleted,
      deleteItem
    }
  }
}
</script>

<style>
</style>