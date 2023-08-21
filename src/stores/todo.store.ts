/* eslint-disable @typescript-eslint/no-unused-vars */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
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
    }
  },
  getters: {
    getAuth(state) {
      return this.authenticated
    },
    // /todos
    async fetchTodos():Promise <void> {
      try{
        this.todos = await getTodos()
      }
      catch(error){
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

    setDescription(description:string){
      this.description = description
    },
    // DELETE /todos/:id
    async onDelete(taskID: number) {

    },
    // PATCH /todos/:id
    async onEdit(taskID: number) {

    },
    // POST /todos
    async onSubmit(completionDate:Date, description:string) {
      const todo:ITodo = {
        ICompletionDate:completionDate,
        IDescription : description,
        IComplete : false
      }
       await createTodo(todo)
    }
  }
})
