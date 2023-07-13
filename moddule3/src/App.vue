<!-- Vue composed component
example1. Option API
-->

<script>
export default {
  data(){
    return{
      message: "Welcome to my mastering vue.js 3 app",
      date(){ return "<strong>13th july, 2023</strong>"},
      person:{fname:"Abdur",lname:"Rahim",getName(){return this.fname + " " +this.lname}}
    }
  }
}
</script>


<!-- <script setup>
const message = 'Welcome to my mastering vue.js 3'
const date = () => "<strong>13th july, 2023</strong>"
const person ={
  fname:"Abdur",
  lname:"Rahim",
  getName()
  {
    return this.fname + " " + this.lname;
  }
}
</script> -->

<template>
  <h1>{{ message }}</h1>
  <p>Today is <span v-html="date()"></span></p>
  <h3>name of the persone <span>{{ person.getName() }}</span></h3>
  
</template>

<style scoped>

</style>
