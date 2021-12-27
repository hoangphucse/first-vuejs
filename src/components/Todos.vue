<template>
  <AddTodo @add-todo="addTodo" />
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
import AddTodo from './AddTodo.vue'
// import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
export default {
  name: 'Todos',
  components: { TodoItem, AddTodo },
  setup() {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'
    const todos = ref([])

    const getTodos = async () => {
      try {
        const res = await axios.get(BASE_URL, {
          params: {
            _limit: 10
          }
        })
        todos.value = res.data
      } catch (error) {
        console.log(error)
      }
    }
    getTodos()

    const markCompleted = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    }

    const deleteItem = async id => {
      try {
        await axios.delete(`${BASE_URL}/${id}`)
        todos.value = todos.value.filter(todo => todo.id !== id)
      } catch (error) {
        console.log(error)
      }
    }

    const addTodo = async newTodo => {
      try {
        await axios.post(BASE_URL, {
          newTodo
        })
        todos.value.push(newTodo)
      } catch (error) {
        console.log(error)
      }
    }

    return {
      todos,
      markCompleted,
      deleteItem,
      addTodo
    }
  }
}
</script>

<style>
</style>