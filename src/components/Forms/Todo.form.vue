<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useTodoStore } from '../../stores/todo.store'
import { storeToRefs } from 'pinia'

const store = useTodoStore()
const { task, date } = storeToRefs(store)
const { onSubmit } = store
</script>

<template>
  <div class="flex justify-center space-x-2 hover:scale-110">
    <img class="w-10 h-10 mt-3" src="/post-it.png" />
    <p class="flex justify-center text-2xl mt-4 text-zinc-800 font-bold">Add Tasks</p>
  </div>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="flex justify-center md:flex gap-4 w-auto mt-6 p-2">
        <div>
          <input type="date"
            class="border border-gray-300 text-zinc-800 text-sm rounded-lg block w-full p-2.5 bg-zinc-100 placeholder-zinc-400"
            required v-model="date" />
        </div>
        <div>
          <input type="text" id="task"
            class="border border-gray-300 text-zinc-800 text-sm rounded-lg block w-full p-2.5 bg-zinc-100 placeholder-zinc-400"
            placeholder="Write your task here!" v-model="task" required />
        </div>
        <div>
          <button type="submit" class="font-semibold bg-zinc-800 rounded px-3.5 py-1.5 hover:scale-110 w-24 h-10">
            Add
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
