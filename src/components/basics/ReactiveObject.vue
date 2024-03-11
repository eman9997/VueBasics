<!-- 
  This component shows you reactive objects in Vue 3 work instead of creating a bunch of refs.

  Compare this snippet from src/components/MethodBasics.vue where we use refs: The whole object is reactive instead of just the individual properties and you dont need to use .value to access the properties.
-->

<template>
  <h1>{{ formData.tempStr }}</h1>
  <button @click="increase"> + </button>
    <div>{{ formData.count }}</div>
  <button @click="decrease"> - </button>
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
const decrease = () => formData.count--;
const increase = () => formData.count++;
</script>