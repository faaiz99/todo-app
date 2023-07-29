<script setup>
import { useRouter, RouterLink, RouterView } from 'vue-router'
const router = useRouter()
   // const route = useRoute()
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';


</script>

<template>
    <Header/>
    <RouterView></RouterView>
    <Footer/>
</template>


