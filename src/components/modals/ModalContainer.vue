<!-- 
    This component shows you how to use Teleport in Vue 3

-->

<template>
    <div class="mainContainer">
        <h1>Modals</h1>
        <ul>
        <RouterLink to="/modal">Go to item</RouterLink>
        </ul>
        <div class="modalContainer">
            <ModalItem
                v-if="modalVisible"
                proptesting="Parent to child"
                @hideModal="hideModal"
            >
                <template #title>My title</template>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nobis excepturi alias neque molestias esse similique quisquam ducimus ipsa vel, tempora iusto molestiae!</p>
            </ModalItem>
            <button @click="showModal">Show Modal</button>
        </div>
        
    </div>
</template>
  
  <script setup lang="ts">
    import ModalItem from './ModalItem.vue';
    import { useSlots } from 'vue';
    import { ref } from 'vue';

    const slots = useSlots();
    // prints out the slot with the name title
    console.log(slots.title);
    const modalVisible = ref(false);
    const showModal = () => {
        modalVisible.value = true
    }
    const hideModal = () => {
        modalVisible.value = false
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