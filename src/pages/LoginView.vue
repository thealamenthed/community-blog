<template>
  <div class="flex min-h-full">
    <div
      class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="w-full max-w-sm mx-auto lg:w-96">
        <div>
          <img
            class="w-auto h-12"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">Connexion</h2>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form action="#" method="POST" class="space-y-6">
              <div class="block text-sm font-medium leading-6 text-gray-900">
                <div class="mt-1">
                  <BaseInput
                    v-model="form.email"
                    label="Email adress"
                    type="email"
                    class="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="block space-y-1 text-sm font-medium leading-6 text-gray-900">
                <div class="mt-1">
                  <BaseInput
                    v-model="form.password"
                    label="Password"
                    type="password"
                    class="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>

              <div class="flex items-center justify-between">
                <div class="text-sm">
                  <div class="font-medium text-indigo-600 hover:text-indigo-500">
                    <router-link to="/register">Don't have account yet ?</router-link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex-1 hidden w-0 lg:block">
      <img
        class="absolute inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue'
import { reactive } from 'vue'

const form = reactive({
  email: '',
  password: ''
})
</script>
