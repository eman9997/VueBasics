<!-- 
  This component shows you how to use computed properties in Vue 3

  A computed property is a function that returns a value it is better than using a method because it caches the value and only updates it when the reactive dependencies change.
 -->

<template>
  <h1>{{ formData.tempStr }}</h1>
  <button @click="increase"> + </button>
    <div>{{ formData.count }}</div>
  <button @click="decrease"> - </button>
  <br>
  <input v-model="formData.tempStr" type="text">
  <br>
  <h3>This is {{ oddorEvent }}</h3>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
const formData = reactive<{tempStr: string;count: number}>({
  tempStr: 'My counter',
  count: 0
});

const decrease = () => formData.count--;
const increase = () => formData.count++;
const oddorEvent= computed(() => formData.count % 2 === 0 ? 'even' : 'odd');
</script>