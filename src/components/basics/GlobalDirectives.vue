<!-- 
  
  This shows how to use Global Directive in Vue 3.

I added a new directive called v-autofocus(vAutofocus) in another file and imported it here and used it in the template.
creating a global directive is handy when you want to use the same directive in multiple components.
-->

<template>
  <h1>{{ formData.tempStr }}</h1>
  <button @click="increase"> + </button>
    <div>{{ formData.count }}</div>
  <button @click="decrease"> - </button>
  <br>
  <!-- THE NEW PART FOR THIS FILE: I imported autofocus-->
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
import { vAutofocus } from '@/directives/vAutoFocus';

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

</script>