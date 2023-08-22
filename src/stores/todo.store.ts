/* eslint-disable @typescript-eslint/no-unused-vars */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getTodos, getTodo, createTodo, deleteTodo, editTodo } from '@/api/fetch'
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
    }
  },
  getters: {
    getAuth(): boolean {
      return this.authenticated
    },
    // /todos
    getTodos: async function (): Promise<void> {
      try {
        this.todos = await getTodos()
      }
      catch (error) {
        console.log(error);
      }

    },
    // /todos/:id
    async getTodo(state) {

    },
  },
  actions: {
    setAuth() {
      this.authenticated = !this.authenticated
    },
    setDescription(description: string) {
      this.description = description
    },
    // DELETE /todos/:id
    async onDelete(ITodoID: number) {
      try {
        await deleteTodo(ITodoID)
      } catch (error) {
        console.log(error);
      }

    },
    //  onEdit - helper
    async onEdit(ITodoID: number) {
      this.edit = true
      this.todos.filter((todo) => {
        if (ITodoID == todo.ITodoID) {
          this.todoID = todo.ITodoID
          this.completionDate = todo.ICompletionDate
          this.description = todo.IDescription
        }
      })
    },
    // PATCH /todos/:id
    async updateTodo(ITodoID: number, completionDate: Date, description: string) {
      const todo: ITodo = {
        ICompletionDate: completionDate,
        IDescription: description,
        IComplete: false
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
      try {
        await createTodo(todo)
      } catch (error) {
        console.log(error);
      }

    }
  }
})
