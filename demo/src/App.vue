<script>
export default {
  setup() {
    const message = "this is abdur rahim"
    function date(){return 'this'} 
    const person = {firstName:"abdur", lastName:"rahim", getFullName(){return this.firstName + this.lastName}}

    return {
      message,
      date,
      person,
    };
  }
}
</script>

<!-- <script setup>
const message = "Abdur Rahim1"
const date = () => "Abdur Rahim2"
const person = { firstName:"Abdur ", lastName:"Rahim3", getFullName(){return this.firstName+this.lastName}}
</script> -->

<!-- <script> 
export default{
  data() {
    return{
      message:"dur Rahim",
      date(){return "abdur Rahim"},
      person:{firsstname:"abdur", lastName:'rahim', getFullName(){return this.firsstname + this.lastName}}
      }

    }
  }
</script> -->
<template>
  {{ message }}
  <h2 v-html="date()"></h2>
  <h3>{{ person.getFullName() }}</h3>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
