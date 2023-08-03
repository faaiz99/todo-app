<script setup>
import { ref, onUpdated } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const date = ref();

const task = ref()

const tasks = ref([])

const wrongTask = ref(false)

const wrongTaskId = ref()




const onDelete = (taskID) => {
	tasks.value = tasks.value.filter((task) => {
		return taskID != task.taskID
	})
}

const onEdit = (taskID) => {
	tasks.value.filter((item) => {
		if (taskID == item.taskID) {
			date.value = item.completetionDate
			task.value = item.taskDescription
		}
	})
	onDelete(taskID)
}

const onSubmit = () => {

	tasks.value.push({
		taskID: uuidv4(),
		completetionDate: date.value,
		taskDescription: task.value,
		completed: false

	})

	date.value = ''
	task.value = ''
}

onUpdated(() => {
	//console.log(tasks.value);
})



</script>
<template>
	<div>
		<div>
			<p class=" flex justify-center text-3xl text-zinc-800 font-bold hover:scale-110">
				Add Tasks
			</p>
		</div>
		<div>
			<form @submit.prevent="onSubmit">
				<div class="flex justify-center md:flex gap-4 w-auto mt-6 p-2 ">
					<div>
						<input type="date"
							class="border border-gray-300 text-zinc-800 text-sm rounded-lg  block w-full p-2.5 bg-zinc-100  placeholder-zinc-400"
							required v-model="date">
					</div>
					<div>
						<input type="text" id="task"
							class="border border-gray-300 text-zinc-800 text-sm rounded-lg  block w-full p-2.5 bg-zinc-100  placeholder-zinc-400"
							placeholder="Write your task here!" v-model='task' required>
					</div>
					<div>
						<button type="submit"
							class="font-semibold bg-zinc-800 rounded px-3.5 py-1.5 hover:scale-110 w-24 h-10">Add </button>

					</div>
				</div>

			</form>
		</div>
		<div class="flex justify-center text-3xl font-bold mt-12 text-zinc-800 hover:scale-110">
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
	</div>
</template>

