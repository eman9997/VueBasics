<!-- 
    Go to ModelValueExample.vue to see the parent component 
    this lesson is about using v-model to pass data to a child component.

    This also covers provide and inject
-->

<template>
    <teleport to="body"  v-if="props.modelValue">
        <div class="modal">
            <div class="myModal">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nobis excepturi alias neque molestias esse similique quisquam ducimus ipsa vel, tempora iusto molestiae!</p>
                <h4>THIS IS INJECTED DATA FROM APP.VUE {{ userData!.name }}</h4>
                <button @click="$emit('update:modelValue', false)">Hide Modal</button>
            </div>
        </div>
    </teleport>
</template>
  
<script setup lang="ts">
import { inject } from 'vue';
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: Boolean
});

interface UserData {
  name: string;
  age: number;
  email: string;
}

const userData = inject<UserData>('userData');

// you can do it in the template or like this in typescript REFEERING TO $emit('update:modelValue', false)
// const handleHideModal = () => {
//     emit('update:modelValue', false)
// }
</script>

<style scoped>
.myModal {
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
</style>