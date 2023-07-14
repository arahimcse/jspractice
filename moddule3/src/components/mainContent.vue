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


</script>

<template>

<div class="container mt-5" v-bind="container">
  <div class="row">
    <div class="col-sm-4">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
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
      </ul>
      <hr class="d-sm-none">
    </div>
    <div class="col-sm-8">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2020</h5>
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
</template>


<style scoped>

</style>