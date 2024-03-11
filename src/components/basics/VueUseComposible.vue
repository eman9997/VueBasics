<!-- 
  This component shows you how to use prebuilt composibles in Vue 3

  from the vueuse library.
  EXAMPLE: WE ARE USING IS
    useOnline
-->

<template>
    <div>
        <h1>Using Composible Functions</h1>
        <h2>Is Online: {{ isOnline }}</h2>
    </div>
  </template>
  

  <script setup lang="ts">
    import { useOnline } from '@vueuse/core';
    const isOnline = useOnline();
  </script>
  
 
  
  
  
  
  