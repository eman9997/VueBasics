<script setup lang="ts">
import type { UserData } from './models/userData';
// DONT REMOVE THIS TYPE ABOVE EXAMPLE OF IMPORTING TYPES and needed for provide and inject

// import RefBasics from './components/basics/RefBasics.vue'
// import ReactiveObject from './components/basics/ReactiveObject.vue'
// import MethodBasics from './components/basics/MethodBasics.vue'
// import WatchBasicsReactive from './components/basics/WatchBasicsReactive.vue';
// import ComputedBasics from './components/basics/ComputedBasics.vue';
// import WatchBasicsRef from './components/basics/WatchBasicsRef.vue';
// import keepComponent  from './components/keep_alive/keepComponent.vue';
// import DirectiveBasics from './components/basics/DirectiveBasics.vue';
// import GlobalDirectives from './components/basics/GlobalDirectives.vue';
// import VueForBasics from './components/basics/VueForBasics.vue';
// import ModelValueExample from './components/basics/ModelValueFolder/ModelValueExample.vue';
// import DynamicContainer from './components/dynComponents/DynamicContainer.vue';
// import UsingComposible from './components/basics/usingComposible.vue';
// import VueUseComposible from './components/basics/VueUseComposible.vue';
// END OF IMPORTS


///////////////////////// PROVIDE AND INJECT //////////////////////////////
import { provide } from 'vue';
const randomUserData:UserData = {name: 'John Doe',age: 25,email: ''}; // example of how to provide data to a child component
provide('userData', randomUserData); // THIS CAN BE INJECTED INTO ANY CHILD COMPONENT
/////////////////////// END OF PROVIDE AND INJECT //////////////////////////
</script>

<template>
<!-- 
  QUICKEST WAY TO GET STARTED WITH VUE 3

  To use a component, uncomment it below and import it above. 
-->
  <!-- Lesson 1: Ref Basics -->
<!--   <RefBasics /> -->
  <!-- Lesson 2: Reactive Object -->
  <!-- <ReactiveObject /> -->
  <!-- Lesson 3: Method Basics -->
  <!-- <MethodBasics /> -->
  <!-- Lesson 4: Watch Basics -->
  <!-- <WatchBasicsReactive /> -->
  <!-- Lesson 5: Computed Basics -->
  <!-- <ComputedBasics /> -->
  <!-- Lesson 6: Watch Basics Ref -->
  <!-- <WatchBasicsRef /> --> 
<!-- 
  Lesson 7: Keep Alive
  This keepComponent is wrapped in a keep alive tag. that means it will not be destroyed when you navigate away from it.
it will only be destroyed when you navigate away from the parent component. 
-->
<!--  <KeepAlive> <keepComponent /> </KeepAlive > -->


<!-- Lesson 8: Directive Basics -->
<!-- <DirectiveBasics /> -->
<!-- Lesson 9: Global Directives -->
<!-- <GlobalDirectives /> -->

<!-- Lesson 10: Routing // DONT FORGET TO CHANGE ROUTER IN main.ts file -->
<!-- <router-view /> -->

<!-- Lesson 11: V-for and template Refs -->
<!-- <VueForBasics /> -->
<!-- Lesson 12: Teleport // DONT FORGET TO CHANGE ROUTER IN main.ts file
This also covers slots and props-->
<!-- <router-view /> -->
<!-- Lession 13: modelValue -->
<!-- <ModelValueExample /> -->
<!-- Lesson 14: Dynamic Components 
    ALSO Covers Provide and inject
  -->
<!-- <DynamicContainer /> -->
    <!-- Lesson 15: Using Composible Functions -->
    <!-- <UsingComposible /> -->
    <!-- Lesson 16: using premade composible functions from vueuse -->
    <!-- <VueUseComposible /> -->

</template>

<style>
  /* Add your styles here */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>


