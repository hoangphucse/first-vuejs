<template>
  <p :class="['todo-item', todoProps.completed ? 'is-completed' : '']">
    <input type="checkbox" :checked="todoProps.completed" />
    {{ todoProps.title }}
    <button class="del-btn">Delete</button>
  </p>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TodoItem',
  props: ['todoProps'],
  setup() {
    const new_id = ref('my-new-id')
    return {
      new_id
    }
  }
}
</script>

<style>
.del-btn {
  background: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
  float: right;
  padding: 4px 6px;
}

.todo-item {
  background: #f4f4f4;
  padding: 10px;
  margin: 0;
  border-bottom: 1px #ccc dotted;
}

.is-completed {
  text-decoration: line-through;
}
</style>