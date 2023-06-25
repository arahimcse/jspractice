<script setup>
const calculator = {
    add(x,y){return  parseInt(x)+parseInt(y) },
    sub(x,y){return  x-y },
    mul(x,y){return  x*y },
    div(x,y){return  x/y },
    calculate(x,y,exp){

    }
}
</script>

<template>
    <input type="text" id="x">
    <button id="add">+</button>
    <button id="sub">-</button>
    <button id="mul">*</button>
    <button id="div">/</button>
    <input type="text" id="y">
    <input type="text" id="result">
</template>

<style scoped>

</style>