<template >
	<form>
		<div class="flex-col space-y-4 p-6 md:w-64 lg:w-96 ">

			<div class="mb-6">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
				</label>
				<input type="email" id="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="john.doe@company.com" required>
			</div>
			<div class="mb-6">
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
				<input type="password" id="password"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="•••••••••" required>
			</div>

			<div class="flex items-start mb-6">
				<div class="flex items-center h-5">
					<input id="remember" type="checkbox" value=""
						class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
						required>
					<label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
						Me</label>
				</div>

			</div>
			<button type="submit" class="font-semibold bg-sky-900 rounded px-3.5 py-1.5 hover:scale-110 w-full">Sign
				In</button>
		</div>

	</form>
</template>
<script setup>

</script>
