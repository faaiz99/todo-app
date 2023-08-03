<script setup>
import {RouterLink} from 'vue-router'
</script>

<template >
	<div class="flex justify-center align-middle mt-40 space-x-4">
		
		<p class="text-3xl font-bold  text-zinc-800">Welcome to Todo App</p>
		<img class="w-10 h-10 animate-bounce mb-4" src="/firework.png" />

	</div>
	<div class="flex justify-center mt-4 text-zinc-800 font-normal">
		<p class="text-1xl" >Please register first to start using the App.</p>
	</div>
	<div class="mt-12 flex justify-center">
		<RouterLink class="font-semibold bg-zinc-800 rounded px-3.5 py-1.5  hover:scale-110" to="/login">Get Started</RouterLink>
	</div>
</template>
