<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form>
    <div class="flex-col space-y-4 p-6 md:w-64 lg:w-96 border shadow-lg rounded">
      <div class="flex justify-center mt-4 space-x-2">
        <img class="w-10 h-10" src="/padlock.png" />
        <p class="text-3xl text-zinc-800 font-bold hover:scale-110">Let's Sign In</p>
      </div>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-zinc-800">Email </label>
        <input
          type="email"
          id="email"
          class="border border-gray-300 text-zinc-800 text-sm rounded-lg block w-full p-2.5 bg-zinc-100 placeholder-zinc-400"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-zinc-800 dark:text-zinc-800"
          >Password</label
        >
        <input
          type="password"
          id="password"
          class="border border-gray-300 text-zinc-800 text-sm rounded-lg block w-full p-2.5 bg-zinc-100 placeholder-zinc-400"
          placeholder="•••••••••"
          required
        />
      </div>

      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border rounded border-zinc-800 focus:ring-zinc-800 dark:ring-offset-gray-800"
            required
          />
          <label for="remember" class="ml-2 text-sm font-medium text-zinc-800">Remember Me</label>
        </div>
      </div>
      <button
        type="submit"
        class="font-semibold bg-zinc-800 rounded px-3.5 py-1.5 hover:scale-110 w-full"
      >
        Sign In
      </button>
    </div>
  </form>
</template>
<script setup lang="ts"></script>
