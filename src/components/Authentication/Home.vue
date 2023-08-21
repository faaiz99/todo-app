<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex-col border shadow-lg rounded mt-12">
    <TodoForm />
    <TodoAction />
  </div>
</template>
<script setup lang="ts">
import TodoForm from '../Forms/Todo.form.vue'
import TodoAction from '../Todo.action.vue'
</script>
