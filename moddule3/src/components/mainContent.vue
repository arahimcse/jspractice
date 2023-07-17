<script setup>
/**
 * Raw HTML
 * 
 * {{ }} display plain data in template
 * v-html used in tag attributes and display data as a html 
 */
const vHtml  = `<a class="nav-link active" href="#">Active</a>`
const plainHtml = `<a class="nav-link" href="#">Link</a>`


/**
 * 
 * Attribute Bindings​
 * Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive:
 * 
 * <div v-bind:id="dynamicId"></div>
 * The v-bind directive instructs Vue to keep the element's id attribute in sync with the component's dynamicId property. If the bound value is null or undefined, then the attribute will be removed from the rendered element.
 * 
 * 
 * Shorthand​
 * Because v-bind is so commonly used, it has a dedicated shorthand syntax:
 * 
 * <div :id="dynamicId"></div>
 * For the rest of the guide, we will be using the shorthand syntax in code examples, as that's the most common usage for Vue developers.
 */

const classBind = 'rahim'
const isDisable = true


/**
 * Dynamically Binding Multiple Attributes​
 * If you have a JavaScript object representing multiple attributes that looks like this:
 */

const container = {id:'rahim', class:'arahim'}

/**
 * v-for directory
 */
import {list} from '../assets/js/for'

/**
 * v-on directories
 * 
 * <a v-on:click="doSomething"> ... </a>
 * 
 * <!-- shorthand -->
 * <a @click="doSomething"> ... </a>
 */

import { clickEvent } from '../assets/js/ven'

/**
 * Declaring Reactive State
 */
import { ref } from 'vue';
const count = ref(0)
const isCon = ref(false)

/**
 * class and style binding
 * 
 */

 import { computed } from 'vue'
const isActive = ref(true)
const hasError = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !hasError.value,
  'text-danger': hasError.value && hasError.value.type === 'fatal'
}))

/**
 * v-model and logic test
 */

const userData = ref('a')

/**
 * list rendering
 * ref() work in premetive data type such as numbers, string, boolean, etc
 */
 const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])


/**
 * object type data object, arry, list of data, etc work on reactivity()
 */
import { reactive } from 'vue';
 const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

/**
 * Displaying Filtered/Sorted Results
 */
 const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})

/**
 * 
 */
 const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])
const even = (numbers)=> numbers.filter((number) => number % 2 === 0)


</script>

<template>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h2 :class="{active:isActive, 'text-danger':hasError}">About Me</h2>
      <h5 :class="classObject">Photo of me:</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3 class="mt-4">Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul class="nav nav-pills flex-column">
        <li class="nav-item" v-html="vHtml">
            
        </li>
        <li class="nav-item">
          {{ plainHtml }}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item" :class="classBind">
          <a class="nav-link disabled" :disabled="isDisable" href="#">Disabled</a>
        </li>

        <a href="" v-for="item in list">{{ item }}</a>

        <a href="" @click="clickEvent">dosomething</a>
      </ul>
      <hr class="d-sm-none">
    </div>
    <div class="col-sm-8">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2020</h5>
      <button v-if="isCon" class="btn btn-primary" @click="count++">{{ count }}</button>
      <button v-else class="btn btn-danger" @click="count++">{{ count }}</button>
      <div class="fakeimg">Fake Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

      <h2 class="mt-5">TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2020</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>
</div>


<!-- the v-model and logic test -->
<div class="container">
  <div class="row">
    <h6>Logic and v-model practice</h6>
    <p>
      <ul> 
  <li v-if="'h' == userData"><a href="#">Home</a></li>
  <li v-if="'a' == userData"><a href="#">about</a></li>
  <li v-if="'p' == userData"><a href="#">phone</a></li>
  <li v-if="'c' == userData"><a href="#">contact</a></li>
  <li v-if="'v' == userData"><a href="#">Village</a></li>
</ul>
    </p>
    
    <p>
      <input class=" form-control" type="text" v-model="userData" placeholder="inter data">
    </p>
  </div>
</div>


<!-- list rendering -->
<div class="container">
  <div class="row">
  <h2>list rendering by ref()</h2>
      <li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
  </div>
</div>

<!-- example for object data -->

<div class="container">
  <div class="row">
    <h2>list rendering by object and object management model reactive()</h2>
    <li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>
  </div>
</div>


<div class="container">
  <div class="row">
    <h3>Displaying Filtered/Sorted Results</h3>
    <li v-for="n in evenNumbers">{{ n }}</li>
  </div>
</div>

<div class="container">
  <div class="row">
    <h3>Displaying Filtered/Sorted Results . These two methods will mutate the original array</h3>
    <ul v-for="numbers in sets">
  <li v-for="n in even(numbers)">{{ n }}</li>
</ul>
  </div>
</div>


</template>


<style scoped>

</style>