<script setup>
import Home from './components/Home.vue';
import Posts from './components/Posts.vue';
import Archive from './components/Archive.vue';
import { ref } from 'vue';
const currentTab = ref('Home')
const tabs ={
  Home,
  Posts,
  Archive
}
</script>

<template>
  <div class="demo">
    <button class="tab-button" v-for="(_, tab) in tabs" :key="tab" :class="{ active: currentTab === tab }"
      @click="currentTab=tab">{{ tab }}</button>
    <component :is="tabs[currentTab]" class="tab">abdur rahim</component>
  </div>
</template>

<style scoped></style>
