<!-- 
  
  This shows how to use the watch function using a reactive object.

  
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
import { computed, reactive, watch } from 'vue';

const formData = reactive<{tempStr: string;count: number}>({
  tempStr: 'My counter',
  count: 0
});

watch(() => formData.count, (newcount, oldCount) => {
  if (newcount > 6) {
    alert(`count increased current numbers OLD:${oldCount} to NEW:${newcount}`);
  } 
});


// watch(formData, (formData, prevFormData) => {
//   console.log(`count changed from ${prevFormData.count} to ${formData.count}`);
// });

const decrease = () => formData.count--;
const increase = () => formData.count++;
const oddorEvent= computed(() => formData.count % 2 === 0 ? 'even' : 'odd');
</script>