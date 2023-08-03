<template >
	<div class="flex-col justify-center">
		<TodoForm />
		<TodoAction />
	</div>
</template>
<script setup>
import TodoForm from '../Forms/Todo.form.vue';
import TodoAction from '../Todo.action.vue';
</script>
