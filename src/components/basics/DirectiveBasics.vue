<!-- 
  
  This shows how to use Directive in Vue 3.

I added a new directive called v-autofocus that will focus the input element when the page is loaded.
-->

<template>
  <h1>{{ formData.tempStr }}</h1>
  <button @click="increase"> + </button>
    <div>{{ formData.count }}</div>
  <button @click="decrease"> - </button>
  <br>
  <input v-autofocus v-model="formData.tempStr" type="text" >
  <br>
  <h3>This is {{ oddorEvent }}</h3>
</template>

<script setup lang="ts">
import { 
  computed,
  reactive,
  watch
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

// HERE THE NEW PART FOR THIS FILE
// HOW TO USE vAutofocus in the TEMPLATE:  v-autofocus
const vAutofocus = {
  mounted(el:HTMLInputElement) {
    el.focus();
  }
};

</script>