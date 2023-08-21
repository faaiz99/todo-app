import type { ITask } from '@/Types/ITask'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos, GET} route +0ms
export const getTasks = async (): Promise<ITask[]> => {
	let todos: ITask[] = []
	try {
		todos = await axios.get('/todos')
	} catch (e) {
		console.log(e)
	}
	return todos
}

// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos, POST} route +2ms
export const createTask = async (task: ITask): Promise<ITask[]> => {
	let todos: ITask[] = []
	try {
		todos = await axios.post('/todos', task)
	} catch (e) {
		console.log(e)
	}
	return todos
}

// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos/:id, GET} route +0ms
export const getTask = async (id: number): Promise<ITask> => {
	let todo: ITask | null = null
	try {
		todo = await axios.get(`todo/${id}`)
	} catch (error) {
		console.log(error);
	}
	return todo as ITask

}
// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos/:id, PATCH} route +1ms
export const editTask = async (id: number): Promise<ITask> => {
	let todo: ITask | null = null
	try {
		todo = await axios.patch(`todo/${id}`)
	} catch (error) {
		console.log(error);
	}
	return todo as ITask

}
// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos/:id, DELETE} route +1ms
export const deleteTask = async (id: number): Promise<ITask> => {
	let todo: ITask | null = null
	try {
		todo = await axios.delete(`todo/${id}`)
	} catch (error) {
		console.log(error);
	}
	return todo as ITask
}