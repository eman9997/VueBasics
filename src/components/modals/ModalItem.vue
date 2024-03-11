<!-- 
    This component shows you how to use Teleport in Vue 3

-->

<template>
    <teleport to="body">
        <div class="modal">
            
            <div class="myModal">
                     <slot name="title"></slot>
                    <slot></slot>
                <button @click="$emit('hideModal')">Hide Modal</button>
                <h3>My message is {{ props.proptesting }}</h3>
            </div>
        </div>
    </teleport>
</template>
  
<script setup lang="ts">

const emit = defineEmits(['hideModal']);

const props = defineProps({
    proptesting: {
        type: String,
        default: 'default value'
    }}
);


</script>

<style scoped>
.myModal {
    width: 100vw;
    height: 100vh;
    background-color: beige;
    color: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
</style>