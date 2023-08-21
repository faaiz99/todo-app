import type { ITodo } from '@/Types/Todo'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos, GET} route +0ms
export const getTodos = async (): Promise<ITodo[]> => {
	let todos: ITodo[] = []
	try {
		todos = await axios.get('/todos')
	} catch (e) {
		console.log(e)
	}
	return todos
}

// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos, POST} route +2ms
export const createTodo = async (todo: ITodo): Promise<ITodo> => {
	let result: ITodo| null = null
	console.log('create', todo);
	try {
		result = await axios.post('/todos', todo)
	} catch (e) {
		console.log(e)
	}
	return result as ITodo
}

// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos/:id, GET} route +0ms
export const getTodo = async (id: number): Promise<ITodo> => {
	let todo: ITodo | null = null
	try {
		todo = await axios.get(`todo/${id}`)
	} catch (error) {
		console.log(error);
	}
	return todo as ITodo

}
// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos/:id, PATCH} route +1ms
export const editTodo = async (id: number): Promise<ITodo> => {
	let todo: ITodo | null = null
	try {
		todo = await axios.patch(`todo/${id}`)
	} catch (error) {
		console.log(error);
	}
	return todo as ITodo

}
// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos/:id, DELETE} route +1ms
export const deleteTodo = async (id: number): Promise<ITodo> => {
	let todo: ITodo | null = null
	try {
		todo = await axios.delete(`todo/${id}`)
	} catch (error) {
		console.log(error);
	}
	return todo as ITodo
}