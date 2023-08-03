<template >
	<form class="border shadow-lg rounded">
		<div class="flex justify-center mt-4 space-x-2">
			<img class="w-10 h-10" src="/contract.png" />

			<p class="text-2xl font-bold hover:scale-110 text-zinc-800 ">Let's Sign Up</p>
		</div>
		<div class="flex-col space-y-4 p-6 md:w-64 lg:w-96 ">
			<div>
				<label for="first_name" class="block mb-2 text-sm font-medium text-zinc-800 ">First
					name</label>
				<input type="text" id="first_name"
					class="border border-gray-300 text-zinc-800 text-sm rounded-lg  block w-full p-2.5 bg-zinc-100  placeholder-zinc-400"
					placeholder="John" required>
			</div>
			<div>
				<label for="last_name" class="block mb-2 text-sm font-medium text-zinc-800">Last
					name</label>
				<input type="text" id="last_name"
					class="border border-gray-300 text-zinc-800 text-sm rounded-lg  block w-full p-2.5 bg-zinc-100  placeholder-zinc-400"
					placeholder="Doe" required>
			</div>
			<div class="mb-6">
				<label for="email" class="block mb-2 text-sm font-medium text-zinc-800 ">Email
					address</label>
				<input type="email" id="email"
					class="border border-gray-300 text-zinc-800 text-sm rounded-lg  block w-full p-2.5 bg-zinc-100  placeholder-zinc-400"
					placeholder="john.doe@company.com" required>
			</div>
			<div class="mb-6">
				<label for="password" class="block mb-2 text-sm font-medium text-zinc-800 ">Password</label>
				<input type="password" id="password"
					class="border border-gray-300 text-zinc-800 text-sm rounded-lg  block w-full p-2.5 bg-zinc-100  placeholder-zinc-400"
					placeholder="•••••••••" required>
			</div>
			<div class="mb-6">
				<label for="confirm_password" class="block mb-2 text-sm font-medium text-zinc-800 ">Confirm
					password</label>
				<input type="password" id="confirm_password"
					class="border border-gray-300 text-zinc-800 text-sm rounded-lg  block w-full p-2.5 bg-zinc-100  placeholder-zinc-400"
					placeholder="•••••••••" required>
			</div>
			<div class="flex items-start mb-6">
				<div class="flex items-center h-5">
					<input id="remember" type="checkbox" value=""
						class="border border-gray-300 text-zinc-800 text-sm rounded-lg  block w-full p-2.5 bg-zinc-100  placeholder-zinc-400"
						required>
				</div>
				<label for="remember" class="ml-2 text-sm font-medium text-zinc-800">I agree with the <a href="#"
						class="text-zinc-800 font-semibold hover:underline ">terms and conditions</a>.</label>
			</div>
			<button type="submit"
				class="font-semibold bg-zinc-800 rounded px-3.5 py-1.5 hover:scale-110 w-full">Register</button>
		</div>

	</form>
</template>
<script setup>

</script>
