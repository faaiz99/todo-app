<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
const loggedIn = ref(true)
</script>
<template >
	<div class="flex justify-between mt-2 p-2.5">
		<div class="flex gap-2">
			<image class="h-10 w-10" src="/to-do-list.png"/>
			<RouterLink v-if="!loggedIn" class="text-2xl font-semibold md:text-3xl mt-1" to="/">Todo App</RouterLink>
			<RouterLink v-else class="text-2xl font-semibold md:text-3xl mt-1" to="/home">Home</RouterLink>

		</div>

		<div class="flex justify-evenly gap-4 md:w-64 lg:w-64">

			<RouterLink v-if="!loggedIn" class="font-semibold  px-3.5 py-1.5 rounded border-2 border-sky-900 hover:scale-110" to="/registration">Sign Up</RouterLink>
			<RouterLink v-else class=" hidden font-semibold bg-sky-900 rounded px-3.5 py-1.5 hover:scale-110" to="/login">Logout</RouterLink>
			<RouterLink v-if="!loggedIn" class="font-semibold bg-sky-900 rounded px-3.5 py-1.5 hover:scale-110" to="/login">Sign In</RouterLink>
			<RouterLink v-else class="font-semibold bg-sky-900 rounded px-3.5 py-1.5 hover:scale-110" to="/login">Logout</RouterLink>
			
		</div>

	</div>
</template>

