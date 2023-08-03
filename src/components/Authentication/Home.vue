<template >
	<div class="flex-col border shadow-lg rounded mt-12 h-screen">
		<TodoForm />
		<TodoAction />
	</div>
</template>
<script setup>
import TodoForm from '../Forms/Todo.form.vue';
import TodoAction from '../Todo.action.vue';
</script>
