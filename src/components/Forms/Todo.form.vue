<script setup>
import { ref, onMounted, onUpdated } from 'vue';


const date = ref();

const task = ref()

const tasks = ref([])

const generateRandomID = () => {
	let random_id = Math.ceil(Math.random() * 1000000)
	return random_id
}

const onDelete = (taskID) => {
	tasks.value = tasks.value.filter((task) => {
		return taskID != task.taskID
	})
}

const onEdit = (taskID) => {
	console.log(taskID);
	tasks.value.filter((item)=>{
		if(item.taskID = taskID){
			date.value = item.completetionDate
			task.value = item.taskDescription
		}
	})
	onDelete(taskID)
}

const onSubmit = () => {

	tasks.value.push({
		taskID: generateRandomID(),
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
			<form @submit.prevent="onSubmit">
				<div class="flex justify-center md:flex gap-4 w-auto mt-6 p-2 ">
					<div>
						<input type="date"
							class="bg-gray-50 border w-24 md:w-56 lg-w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required v-model="date">
					</div>
					<div>
						<input type="text" id="task"
							class="bg-gray-50 border w-24  h-full md:w-96  border-gray-300 text-gray-900 text-sm rounded-lg  block px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Write your task here!" v-model='task' required>
					</div>
					<div>
						<button type="submit"
							class="font-semibold bg-sky-900 rounded h-full px-3.5 py-1.5  hover:scale-110 w-24">Add</button>

					</div>
				</div>

			</form>
		</div>
		<div class="flex justify-center text-3xl font-bold mt-12">
			<p>Todo List</p>
		</div>
		<div class="flex justify-center">
			<ul>
				<li class="sm:flex p-2.5 gap-4 justify-center mb-2 " v-for="task in tasks" :key="tasks.tasksID">

					<div class="flex items-baseline">
						<label class="inline" for="completeTask"></label>
						<input type="checkbox" id="completeTask" name="completeTask" @click="task.checked = !task.checked">
						<p class="ml-5 mt-1 font-semibold text-sm relative" :class="task.checked ? 'line-through' : ''">
							{{ task.completetionDate }}
						</p>
					</div>

					<p class="mt-1 font-normal text-sm text-left  w-64 lg:w-96" :class="task.checked ? 'line-through' : ''">
						{{ task.taskDescription }}</p>
					<button @click="onEdit(task.taskID)"
						class="mr-2 mt-2 font-semibold bg-sky-900 rounded h-full px-3.5 py-1.5  hover:scale-110 w-24 ml-auto">Edit</button>
					<button @click="onDelete(task.taskID)"
						class=" mt-2 font-semibold bg-red-900 rounded h-full px-3.5 py-1.5  hover:scale-110 w-24 ml-auto ">Delete</button>
				</li>
			</ul>
		</div>
	</div>
</template>

