import type { ITodo } from '@/Types/Todo'
import axios, { type AxiosResponse } from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos, GET} route +0ms
export const getTodos = async (): Promise<ITodo[]> => {
	let todos: ITodo[] = []
	let result: AxiosResponse | undefined = undefined
	try {
		result = await axios.get('/todos')
		todos = result?.data
	} catch (error) {
		console.log(error)
	}
	return todos
}

// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos, POST} route +2ms
export const createTodo = async (todo: ITodo): Promise<ITodo> => {
	let result: ITodo | null = null
	try {
		result = await axios.post('/todos', todo)
	} catch (error) {
		console.log(error)
	}
	return result as ITodo
}

// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos/:id, GET} route +0ms
export const getTodo = async (id: number): Promise<ITodo> => {
	let todo: ITodo | null = null
	try {
		todo = await axios.get(`todos/${id}`)
	} catch (error) {
		console.log(error);
	}
	return todo as ITodo

}
// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos/:id, PATCH} route +1ms
export const editTodo = async (id: number, todo: ITodo): Promise<AxiosResponse> => {
	// let todo: ITodo | null = null
	let result: AxiosResponse | undefined = undefined
	try {
		result = await axios.patch(`todos/${id}`, todo)
	} catch (error) {
		console.log(error);
	}
	return result as AxiosResponse

}
// [Nest] 2548  - 08/21/2023, 1:01:56 PM     LOG [RouterExplorer] Mapped {/todos/:id, DELETE} route +1ms
export const deleteTodo = async (id: number): Promise<ITodo> => {
	let todo: ITodo | null = null
	try {
		todo = await axios.delete(`todos/${id}`)
	} catch (error) {
		console.log(error);
	}
	return todo as ITodo
}