<!-- 
  v-model is a directive that allows us to create two-way data bindings on form inputs, 
 
  In this example I will use v-model to pass data to a child component. so the child component can change the data in the parent component.

  This also covers provide and inject LOOK at Children components to see how to use provide and inject
-->

<template>
  <div class="mainContainer">
      <h1>Modals</h1>
      <ul>
      <RouterLink to="/modal">Go to item</RouterLink>
      </ul>
      <div class="checkbox">
          <label for="modalVisible">
            Show dark modal
            <input type="checkbox" v-model="showdarkModal" />
          </label>
      </div>

      <div class="modalContainer">
          <component
              v-model="modalVisible"
              proptesting="Parent to child"
              :is="showdarkModal ? DynamicItemDark : DynamicItem"
          />
          <!-- :is="DynamicItem" -->
          <button @click="showModal">Show Modal</button>
      </div>
      
  </div>
</template>

<script setup lang="ts">
  import DynamicItem from './DynamicItem.vue';
  import DynamicItemDark from './DynamicItemDark.vue';
  import { useSlots } from 'vue';
  import { ref } from 'vue';

  const slots = useSlots();
  console.log(slots.title);
  const modalVisible = ref(false);
  const showdarkModal = ref(false);
  const showModal = () => {
      modalVisible.value = true
  }
</script>

<style scoped>

  .mainContainer {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
</style>