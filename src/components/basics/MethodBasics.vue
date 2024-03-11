<!-- 
  This component shows you how to pass arguments to methods in Vue 3  
  using the new script setup syntax.
  
  Compare this snippet from src/components/ReactiveObject.vue:
-->

<template>
  <h1>{{ formData.tempStr }}</h1>
  <button @click="increase(3)"> + </button>
    <div>{{ formData.count }}</div>
  <button @click="decrease(3)"> - </button>
  <br>
  <input v-model="formData.tempStr" type="text">
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const formData = reactive<{
    tempStr: string;
    count: number;
  }>({
  tempStr: 'My counter',
  count: 0
});
const decrease = (amount:number) => formData.count -= amount;
const increase = (amount: number) => formData.count += amount;
</script>