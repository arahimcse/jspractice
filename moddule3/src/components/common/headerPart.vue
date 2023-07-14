<script setup>
/**
 * use module for code more user friedly
 */
import {data} from '../../assets/js/header'

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
  <p v-if="data>50">Data is greater than 50</p>
  <p v-else-if="data<50">Data is Less than 50</p>
  <p v-else>Data is equal to 50</p>
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
      {{ data }}
    </ul>
  </div>
</nav>
</template>

<style scoped>

</style>