import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from 'uuid';


export const useTodoStore = defineStore('todoStore', () => {
	const date = ref();

	const task = ref()

	const tasks = ref([])

	const authenticated = ref(false)


	const setAuth = () =>{
		authenticated.value = !authenticated.value 
	}

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



	return {
		date,
		task,
		tasks,
		authenticated,
		onDelete,
		onEdit,
		onSubmit,
		setAuth
	}

})


