<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>

    <div class="flex justify-center space-x-4 mt-32 sm:mt-64 md:mx-auto">
      <p class="text-3xl font-bold text-center text-zinc-800">Hi, There</p>
      <img class="w-10 h-10 animate-bounce" src="/firework.png" />
    </div>
    <div class="flex justify-center mt-4 text-zinc-800 font-normal ">
      <p class="text-1xl">Please register first to start using the App.</p>
    </div>
    <div class="mt-12 flex justify-center">
      <RouterLink class="font-medium bg-zinc-800 rounded px-3 py-1.5 hover:scale-110" to="/login">Get Started</RouterLink>
    </div>
</template>
