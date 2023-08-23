<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useTodoStore } from '../stores/todo.store'
import { storeToRefs } from 'pinia'
import { onMounted, watch, watchEffect } from 'vue';

const store = useTodoStore()
const { todos, completionDate, description, edit, todoID, result } = storeToRefs(store)
const { onDelete, getTodo, updateTodo, setComplete, getTodos } = store

onMounted(async () => {
  store.getTodos
})

watch(result, ()=>{
  store.getTodos
  console.log('watcher triggered');
})

</script>

<template>
  <div class="flex justify-center text-2xl font-bold mt-12 text-zinc-800 hover:scale-110">
    <img class="w-10 h-10" src="/system.png" />
    <p>Todo List</p>
  </div>
  <div class="flex justify-center">
    <ul>
      <li class="sm:flex p-2.5 gap-4 justify-center mb-2" v-for="todo in todos" :key="todo.ITodoID">
        <div class="flex items-baseline">
          <label class="inline" for="completetodo"></label>
          <input type="checkbox" id="completetodo" name="completetodo" :disabled="todo.IComplete"
            :checked="todo.IComplete" @click="() => {
              setComplete()
              updateTodo(todo.ITodoID as number, todo.ICompletionDate, todo.IDescription)
            }
              " />
          <p class="ml-5 mt-1 font-semibold text-sm relative text-zinc-800" :class="todo.IComplete ? 'line-through' : ''">
            {{ todo.ICompletionDate }}
          </p>
        </div>

        <p class="mt-1 font-normal text-sm text-zinc-800 text-left w-64 lg:w-96"
          :class="todo.IComplete ? 'line-through' : ''">
          {{ todo.IDescription }}
        </p>
        <button :disabled="todo.IComplete" @click="getTodo(todo.ITodoID as number)"
          class=" mt-1 font-semibold bg-blue-600 rounded h-full px-4 py-1 hover:scale-110  ml-auto text-sm">
          Edit
        </button>
        <button @click="onDelete(todo.ITodoID as number)"
          class="mt-1 font-semibold bg-red-600 rounded h-full px-2 py-1 hover:scale-110  ml-auto text-sm">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>
