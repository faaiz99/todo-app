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
      <img class="w-10 h-10" src="/to-do-list.png" />
      <RouterLink
        v-if="!authenticated"
        class="text-2xl font-bold md:text-3xl mt-1 text-zinc-800"
        to="/"
        >Todo App
      </RouterLink>
      <RouterLink v-else class="text-2xl text-zinc-800 font-bold md:text-3xl mt-1" to="/home"
        >Home</RouterLink
      >
    </div>

    <div class="flex justify-evenly gap-4 md:w-64 lg:w-64">
      <RouterLink
        v-if="!authenticated"
        class="font-semibold text-zinc-800 px-3.5 py-1.5 rounded border-2 border-zinc-800 hover:scale-110"
        to="/registration"
        >Sign Up</RouterLink
      >
      <RouterLink
        v-else
        class="hidden font-semibold bg-zinc-800 rounded px-3.5 py-1.5 hover:scale-110"
        to="/login"
      >
        Logout</RouterLink
      >
      <RouterLink
        v-if="!authenticated"
        class="font-semibold bg-zinc-800 rounded px-3.5 py-1.5 hover:scale-110"
        to="/login"
        >Sign In</RouterLink
      >
      <RouterLink
        v-else
        class="font-semibold bg-zinc-800 rounded px-3.5 py-1.5 hover:scale-110 w-auto h-auto"
        to="/login"
        >Logout</RouterLink
      >
    </div>
  </div>
</template>
