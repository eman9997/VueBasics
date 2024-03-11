<!-- 
  v-model is a directive that allows us to create two-way data bindings on form inputs, 
 
  In this example I will use v-model to pass data to a child component. so the child component can change the data in the parent component.

-->

<template>
  <div class="mainContainer">
      <h1>Modals</h1>
      <ul>
      <RouterLink to="/modal">Go to item</RouterLink>
      </ul>
      <div class="modalContainer">
          <ModelValueItem
              v-model="modalVisible"
              proptesting="Parent to child"
          />
          <button @click="showModal">Show Modal</button>
      </div>
      
  </div>
</template>

<script setup lang="ts">
  import ModelValueItem from './ModelValueItem.vue';
  import { useSlots } from 'vue';
  import { ref } from 'vue';

  const slots = useSlots();
  console.log(slots.title);
  const modalVisible = ref(false);
  const showModal = () => {
      modalVisible.value = true
  }
  // const hideModal = () => {
  //     modalVisible.value = false
  // }   
</script>

<style scoped>

  .mainContainer {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
</style>