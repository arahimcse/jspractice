<script setup>
import { ref, computed, reactive } from 'vue';
const shapes = [
  'square',
  'circle',
  'oval',
  'trapezoid',
  'rectangle',
  'parallelogram',
  'triangle-up',
  'triangle-down',
  'triangle-left',
  'triangle-right'
]
const selectShape = ref(shapes[0])
const pr= ref(100)
const rx= ref(0)
const ry= ref(0)
const rz= ref(0)

const boxStyle = computed(function(){
    return { transform:`
        perspective(${pr.value}px)
        rotateX(${rx.value}deg)
        rotateY(${ry.value}deg)
        rotateZ(${rz.value}deg)
      `}
  })
function reset()
{
  pr.value =100
  rx.value = 0
  ry.value = 0
  rz.value = 0
}

</script>
<template>
  <h2>CSS 3 Perspective Properties</h2>
  <div class="container">
    <div class="input-data">
      <p>
        <label for="perspective">Perspective {{ pr }}px </label>
        <input type="range" min="0" max="999" v-model="pr">
      </p>
      <p>
        <label for="perspective">RotateX {{ rx }}deg</label>
        <input type="range" min="-180" max="180" v-model="rx">
      </p>
      <p>
        <label for="perspective">RotateY {{ ry }}deg</label>
        <input type="range" min="-180" max="180" v-model="ry">
      </p>
      <p>
        <label for="perspective">RotateX {{ rz }}deg</label>
        <input type="range" min="-180" max="180" v-model="rz">
      </p>

      <p>
        <button @click="reset" :class="['btn-reset']">Reset</button>
      </p>
      <template v-for="shape in shapes">
        <span :class="['shape-button']">
          <input type="radio" :id="shape" :key="shape" :value="shape" v-model="selectShape">
          <label :for="shape">{{ shape }}</label>
        </span>
      </template>

    </div>
    <div class="shape-wrapper">
      <div :class="[selectShape, 'shape-margin']" :style="boxStyle"></div>
    </div>
  </div>
</template>

<style scoped>
.shape-margin {
    margin: 25px;
}
.square {
  height: 150px;
  width: 150px;
  background-color: #673AB7;
}

.circle {
  height: 50px;
  width: 50px;
  background-color: #555;
  border-radius: 50%;
}

.oval {
  height: 50px;
  width: 100px;
  background-color: #555;
  border-radius: 50%;
}

.trapezoid {
  border-bottom: 50px solid #555;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  width: 125px;
}

.rectangle {
  height: 50px;
  width: 100px;
  background-color: #555;
}

.parallelogram {
  width: 100px;
  height: 50px;
  transform: skew(20deg);
  background: #555;
}

.triangle-up {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid #555;
}

.triangle-down {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 50px solid #555;
}

.triangle-left {
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-right: 50px solid #555;
  border-bottom: 25px solid transparent;
}

.triangle-right {
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-left: 50px solid #555;
  border-bottom: 25px solid transparent;
}

.shape-wrapper {
  background: #cf0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow: hidden;
}

span.shape-button {
    color: #fff;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
}

span.shape-button input {
    margin-right: 10px;
    flex: inherit;
}

.container {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.input-data p {
  margin: 20px 0;
  color: #fff;
}

.input-data p label {
  float: left;
}

button.btn-reset {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #095f0c;
    background: #cf0;
    color: rebeccapurple;
    font-size: 20px;
}
</style>
