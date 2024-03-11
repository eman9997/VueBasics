
<!-- 
  
  This shows you how to use activated and deactivated hooks in Vue 3.

    activated:  is called when the component is navigated to.
    deactivated:  is called when the component is navigated away from.
    
  I wrapped it in a keep alive tag so you can see the difference between the two hooks. 
  When you navigate away from the component, the deactivated hook is called. 
  When you navigate back to the component, the activated hook is called.
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

import { onActivated, onDeactivated } from 'vue';
  import { 
    computed,
    onBeforeMount,
    onMounted,
    reactive,
    watch,
    onBeforeUnmount,
    onUnmounted
  } from 'vue';
  
  const formData = reactive<{tempStr: string;count: number}>({
    tempStr: 'My counter',
    count: 0
  });
  
  watch(() => formData.count, (newcount, oldCount) => {
    if (newcount > 6) {
      alert(`count increased current numbers OLD:${oldCount} to NEW:${newcount}`);
    } 
  });
  
  const decrease = () => formData.count--;
  const increase = () => formData.count++;
  const oddorEvent= computed(() => formData.count % 2 === 0 ? 'even' : 'odd');
  
 onActivated(() => {
    console.log('activated');
  });

  onDeactivated(() => {
    console.log('deactivated');
  });
  
  
  </script>