

<!-- 
  This component shows you how to use composible functions in Vue 3 by utilizing simple composible functions called useCounter

  The UI will have two buttons and a number.
-->

<template>
    <div>
      <h1>{{ count }}</h1>
      <button @click="increment"> + </button>
      <button @click="decrement"> - </button>
    </div>
  </template>
  
  <script setup lang="ts">
    import { useCounter } from '@/components/use/useCounter';
    const { count, increment, decrement } = useCounter();


  </script>