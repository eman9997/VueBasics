<!-- 
  
  This shows how to use the watch function using a ref instead of a reactive object they have different syntax.
-->

<template>
  <h1>{{ tempStr }}</h1>
  <button @click="increase"> + </button>
    <div>{{ count }}</div>
  <button @click="decrease"> - </button>
  <br>
  <input v-model="tempStr" type="text">
  <br>
  <h3>This is {{ oddorEvent }}</h3>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
const tempStr = ref('My counter');
const count = ref(0);

watch(count, (count, prevCount) => {
  if (count > 6) {
    alert(`count increased current numbers OLD:${prevCount} to NEW:${count}`);
  } 
});

const decrease = () => count.value--;
const increase = () => count.value++;
const oddorEvent= computed(() => count.value % 2 === 0 ? 'even' : 'odd');
</script>