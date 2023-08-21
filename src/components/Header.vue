<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useTodoStore } from '../stores/todo.store'
import { storeToRefs } from 'pinia'

const store = useTodoStore()
const { authenticated } = storeToRefs(store)
</script>
<template>
  <div class="flex justify-between mt-2 p-2.5">
    <div class="flex gap-2">
      <RouterLink v-if="!authenticated" to="/"><img class="w-10 h-10" src="/to-do-list.png" />
      </RouterLink>
      <RouterLink v-else to="/home"> <img class="w-10 h-10" src="/to-do-list.png" /></RouterLink>
    </div>

    <div class="flex justify-evenly gap-4 md:w-64 lg:w-64">
      <RouterLink v-if="!authenticated" class="font-semibold  text-zinc-800  rounded px-3 py-1 hover:scale-110 h-fit border-2 border-zinc-800 "
        to="/registration">Sign Up</RouterLink>
      <RouterLink v-else class="hidden font-semibold  bg-zinc-800 rounded px-3 py-1.5 hover:scale-110 h-fit"
        to="/login">
        Logout</RouterLink>
      <RouterLink v-if="!authenticated" class="font-semibold  bg-zinc-800 rounded px-4 py-1.5 hover:scale-110 h-fit"
        to="/login">Sign In</RouterLink>
      <RouterLink v-else class="font-semibold  bg-zinc-800 rounded px-3 py-1.5 hover:scale-110 h-fit" to="/login">
        Logout</RouterLink>
    </div>
  </div>
</template>
