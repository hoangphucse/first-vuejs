<template>
  <div id="app">
    <Navbar />

    <router-view />

    <Header />
    <Todos />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Todos from './components/Todos.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Header, Todos, Navbar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, sans-serif, sans-serif;
}
</style>