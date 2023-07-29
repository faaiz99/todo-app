<template >
	<div>
		<p class=" flex justify-center text-3xl font-bold hover:scale-110">
			Add Tasks
		</p>
	</div>
	<div class="flex justify-center">
		<TodoForm />
	</div>
</template>
<script setup>
import TodoForm from '../Forms/Todo.form.vue'
</script>
