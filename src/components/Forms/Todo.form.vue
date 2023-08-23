<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useTodoStore } from '../../stores/todo.store'
import { storeToRefs } from 'pinia'

const store = useTodoStore()
const { completionDate, description, edit, todoID } = storeToRefs(store)
const { onSubmit, updateTodo } = store
</script>

<template>
  <div class="flex justify-center space-x-2 hover:scale-110">
    <img class="w-10 h-10 mt-3" src="/post-it.png" />
    <p class="flex justify-center text-2xl mt-4 text-zinc-800 font-bold" >Add Todo
    </p>

  </div>
  <div class="fkex">
    <form @submit.prevent="">
      <div class="m-auto text-center space-y-4 sm:space-y-0 w-64 sm:w-auto  mt-6 p-2 sm:flex sm:justify-center sm:gap-4">
        <div>
          <input
            type="date"
            class="border text-center  border-gray-300 text-zinc-800 text-sm rounded-lg block w-full p-2.5 bg-zinc-100 placeholder-zinc-400"
            required
            v-model="completionDate"
          />
        </div>
        <div>
          <input
            type="text"
            id="task"
            class="border text-center border-gray-300 text-zinc-800 text-sm rounded-lg block w-full p-2.5 bg-zinc-100 placeholder-zinc-400"
            placeholder="Write your task here!"
            v-model="description"
            required
          />
        </div>
        <div>
          <button
          v-if="edit===false" 
            type="submit"
            class="font-semibold bg-zinc-800 rounded px-3.5 py-1.5 hover:scale-110 w-24 h-10"
            @click="onSubmit(completionDate, description)"
          >
            Add
          </button>
          <button
          v-if="edit===true" 
            type="submit"
            @click="updateTodo(todoID, completionDate, description)"
            class="font-semibold bg-zinc-800 rounded px-3.5 py-1.5 hover:scale-110 w-24 h-10"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
