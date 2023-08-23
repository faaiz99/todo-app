import { defineStore } from 'pinia'
import { fetchTodos, getTodo, createTodo, deleteTodo, editTodo } from '@/api/fetch'
import type { ITodo } from '@/Types/Todo'

export const useTodoStore = defineStore('todoStore', {
  state: () => {
    return {
      description: null as unknown as string,
      completionDate: null as unknown as Date,
      todo: null as unknown as ITodo,
      todos: [] as unknown as ITodo[],
      authenticated: false as boolean,
      edit: false as boolean,
      todoID: null as unknown as number,
      complete: false as boolean,
      result: null as unknown
    }
  },
  getters: {
    getAuth(): boolean {
      return this.authenticated
    },
    // /todos
    getTodos: async function (): Promise<void> {
      try {
        this.todos = await fetchTodos()
      }
      catch (error) {
        console.log(error);
      }

    },

  },
  actions: {
    setAuth() {
      this.authenticated = !this.authenticated
    },
    setComplete() {
      return this.complete = !this.complete
    },
    // GET /todos/:id
    async getTodo(ITodoID: number) {
      let result
      try {
        result = await getTodo(ITodoID)
        this.todoID = result.ITodoID as number
        this.completionDate = result.ICompletionDate
        this.description = result.IDescription
      } catch (error) {
        console.log(error);
      }
      this.edit = true
    },
    // DELETE /todos/:id
    async onDelete(ITodoID: number) {
      try {
        await deleteTodo(ITodoID)
      } catch (error) {
        console.log(error);
      }

    },
    // PATCH /todos/:id
    async updateTodo(ITodoID: number, completionDate: Date, description: string) {
      const todo: ITodo = {
        ICompletionDate: completionDate,
        IDescription: description,
        IComplete: this.complete
      }
      try {
        await editTodo(ITodoID, todo)
      } catch (error) {
        console.log(error);
      }
      this.edit = false
    },
    // POST /todos
    async onSubmit(completionDate: Date, description: string) {
      const todo: ITodo = {
        ICompletionDate: completionDate,
        IDescription: description,
        IComplete: false
      }
      // this.completionDate = null as unknown as Date
      // this.description = null as unknown as string

      try {
        this.result = await createTodo(todo)
      } catch (error) {
        console.log(error);
      }

    }
  }
})
