<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useTodoStore } from '../stores/todo.store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';

const store = useTodoStore()
const { todos } = storeToRefs(store)
const {onDelete, onEdit } = store
onMounted(()=>{
    // store.fetchTodos()
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
          <input type="checkbox" id="completetodo" name="completetodo" @click="todo.IComplete = !todo.IComplete" />
          <p class="ml-5 mt-1 font-semibold text-sm relative text-zinc-800" :class="todo.IComplete ? 'line-through' : ''">
            {{ todo.ICompletionDate }}
          </p>
        </div>

        <p class="mt-1 font-normal text-sm text-zinc-800 text-left w-64 lg:w-96"
          :class="todo.IComplete ? 'line-through' : ''">
          {{ todo.IDescription }}
        </p>
        <button @click="onEdit(todo.ITodoID as number)"
          class="mr-2 mt-2 font-semibold bg-blue-600 rounded h-full px-3.5 py-1.5 hover:scale-110 w-24 ml-auto">
          Edit
        </button>
        <button @click="onDelete(todo.ITodoID as number)"
          class="mt-2 font-semibold bg-red-600 rounded h-full px-3.5 py-1.5 hover:scale-110 w-24 ml-auto">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>
