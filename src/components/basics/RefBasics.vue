<template>
  <h1>{{ tempStr }}</h1>
  <button @click="increase"> + </button>
    <div>{{ count }}</div>
  <button @click="decrease"> - </button>
  <br>
  <input v-model="tempStr" type="text">
</template>

<!-- New syntax -->
<script setup lang="ts">
import { ref } from 'vue';
const tempStr = ref('My counter');
const count = ref(0);
const decrease = () => {
  count.value--;
};
const increase = () => {
  count.value++;
};
</script>

<!-- OLD syntax -->

<!-- <script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      count: 0,
      tempStr: 'My counter3'
    };
  },
  methods: {
    decrease() {
      this.count--;
    },
    increase() {
      this.count++;
    }}
});
</script> -->




