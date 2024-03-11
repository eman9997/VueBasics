<template>
    <h1>Post details </h1>
    
    <h3>HELLO ITEM NUMBER {{ $route.params.id }}</h3>
    <button @click="alertParamID">ALERT PARAM ID</button>
    <button @click="goBack">GO BACK</button>
    <button @click="firstPost">GO TO FIRST POST</button>

</template>
  
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const alertParamID = () => {
    alert(route.params.id)
}

const goBack = () => {
    // router.go(-1)
    // you can push by name or path shown below
// _________________________________________________
    // router.push({ name: 'Dashboard'})
    // router.push('/')
    // router.push({ path: '/'})
}

const firstPost = () => {
    router.push({ name: 'postDetails', params: { id: 1 }})
}


</script>