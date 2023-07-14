<script setup>
/**
 * template syntax
 * text binding and mustache
 */
    const title = "My first Web application"
    const des = 'Resize this responsive page to see the effect!'
</script>

<template>

<div class="p-5 bg-primary text-white text-center">
  <h1>{{ title }}</h1>
  <p v-text="des"></p> 
</div>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped>

</style>