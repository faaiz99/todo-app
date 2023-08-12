<script setup>
import { useTodoStore } from '../../store/todo.store'
import { storeToRefs } from 'pinia'

const store = useTodoStore()
const { tasks } = storeToRefs(store)
const { onDelete, onEdit } = store
</script>

<template >
	<div class="flex justify-center text-2xl font-bold mt-12 text-zinc-800 hover:scale-110">
		<img class="w-10 h-10 " src="/system.png" />
		<p>Todo List</p>
	</div>
	<div class="flex justify-center">
		<ul>
			<li class="sm:flex p-2.5 gap-4 justify-center mb-2 " v-for="task in tasks" :key="tasks.tasksID">

				<div class="flex items-baseline">
					<label class="inline" for="completeTask"></label>
					<input type="checkbox" id="completeTask" name="completeTask" @click="task.checked = !task.checked">
					<p class="ml-5 mt-1 font-semibold text-sm relative text-zinc-800"
						:class="task.checked ? 'line-through' : ''">
						{{ task.completetionDate }}
					</p>
				</div>

				<p class="mt-1 font-normal text-sm text-zinc-800 text-left  w-64 lg:w-96"
					:class="task.checked ? 'line-through' : ''">
					{{ task.taskDescription }}</p>
				<button @click="onEdit(task.taskID)"
					class="mr-2 mt-2 font-semibold bg-blue-600 rounded h-full px-3.5 py-1.5  hover:scale-110 w-24 ml-auto">Edit</button>
				<button @click="onDelete(task.taskID)"
					class=" mt-2 font-semibold bg-red-600 rounded h-full px-3.5 py-1.5  hover:scale-110 w-24 ml-auto ">Delete</button>
			</li>
		</ul>
	</div>
</template>
