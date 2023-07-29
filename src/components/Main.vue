<script setup>
import {RouterLink} from 'vue-router'
</script>

<template >
	<div class="flex justify-center align-middle mt-40">
		<p class="text-3xl font-bold animate-bounce">Welcome to Todo App</p>
	</div>
	<div class="flex justify-center mt-4 text-gray-300 font-normal">
		<p class="text-1xl" >Please register first to start using the App.</p>
	</div>
	<div class="mt-12 flex justify-center">
		<RouterLink class="font-semibold bg-sky-900 rounded px-3.5 py-1.5  hover:scale-110" to="/login">Get Started</RouterLink>
	</div>
</template>
