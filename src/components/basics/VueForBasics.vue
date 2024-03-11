<!-- 
    This component shows you how to use the v-for directive in Vue 3
    It also teaches you how to use Template Refs in Vue 3
    This component also shows you how to use the onMounted and nextTick lifecycle hooks in Vue 3
-->

<template>
    <h1 ref="titleRef">Hello world</h1>
    <ul v-for="arr in array">
        <ol>{{ arr }}</ol>
    </ul>
    <h3>Current with {{titleRefValue}}</h3>

    <button @click="addToArray">Add ONE</button>
</template>
  
  <script setup lang="ts">
  import { computed, onMounted, nextTick } from 'vue';
  import { ref } from 'vue';
    const array = ref([1, 2, 3, 4, 5]);
    const titleRef = ref<HTMLElement | null>(null);

    onMounted(() => {
        console.log(titleRef.value);
    });
    // need a computed value that check if the titleRef is null or not since its not set on the initial render
    const titleRefValue = computed(() => {
        if (titleRef.value) {
            return titleRef.value.offsetWidth;
        }
    });

    const addToArray = () => {
        array.value.push(array.value.length + 1);
        // nextTick is used to update the DOM after the array has been updated
        nextTick(() => {
            console.log("Array updated and DOM updated length now is: ", array.value.length);
        });
    }
  </script>