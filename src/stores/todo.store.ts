/* eslint-disable @typescript-eslint/no-unused-vars */

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { getTasks } from '@/api/fetch'
import type { ITask } from '@/Types/ITask'


export const useTodoStore = defineStore('todoStore', {
  state: () => {
    return {
      task: null as unknown as ITask,
      tasks: [] as unknown as ITask[],
      authenticated: false,
    }
  },
  getters: {
    getAuth(state) {
      return this.authenticated
    },
    // /todos
    async fetchTasks():Promise <void> {
      try{
        this.tasks = await getTasks()
      }
      catch(error){
        console.log(error);
      }

    },
    // /todos/:id
    async getTask(state) {

    },


  },
  actions: {
    setAuth() {
      this.authenticated = !this.authenticated
    },
    // DELETE /todos/:id
    onDelete(taskID: number) {

    },
    // PATCH /todos/:id
    onEdit(taskID: number) {

    },
    // POST /todos
    onSubmit() {

    }
  }
})
