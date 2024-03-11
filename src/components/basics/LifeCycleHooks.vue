<!-- 
  
  This shows how use lifecycle hooks in Vue 3.

When each hook is called:

  onBeforeMount:  is called before the component is mounted to the DOM.
  onMounted:  is called after the component is mounted to the DOM.
  onBeforeUnmount:  is called before the component is unmounted from the DOM.
  onUnmounted:  is called after the component is unmounted from the DOM.
  
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
import { 
  computed,
  onBeforeMount,
  onMounted,
  reactive,
  watch,
  onBeforeUnmount,
  onUnmounted,
onBeforeUpdate,
onUpdated
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
// when component is about to be mounted
onBeforeMount(() => {
  console.log('before mount');
});
// when component is mounted
onMounted(() => {
  console.log('mounted');
});
// when component is about to be unmounted
onBeforeUnmount(() => {
  console.log('before unmount');
});
// when component is unmonted
onUnmounted(() => {
  console.log('unmounted');
});
// when component is about to be updated
onBeforeUpdate(() => {
  console.log('before update');
});
// when component is updated
onUpdated(() => {
  console.log('updated');
});


</script>