<template>
  <div class="m-10 space-y-10 divide-y divide-gray-900/10">
    <h1 class="text-lg">{{ title }} {{ name }}</h1>
    <div class="grid grid-cols-1 pt-10 gap-x-8 gap-y-8 md:grid-cols-4">
      <div class="px-4 sm:px-0">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Update your password.</p>
      </div>

      <form
        @submit.prevent=""
        action="."
        id="form"
        method="post"
        class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
      >
        <fieldset class="form-fieldset">
          <div class="px-4 py-6 sm:p-8">
            <!-- <ErrorMessages v-if="errors.errors.length" :errors="errors.errors" class="mb-3" /> -->
            <div class="mt-4">
              <BaseInput
                v-model="form.current_password"
                label="Current password"
                type="password"
                class="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div class="mt-4">
              <BaseInput
                v-model="form.password"
                label="Password"
                type="password"
                class="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div class="mt-4">
              <BaseInput
                v-model="form.password_confirmation"
                label="Password confirmation"
                type="password"
                class="block w-full rounded-md border-0 py-1.5 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </fieldset>

        <div
          class="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8"
        >
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue'
import ErrorMessages from '@/components/ErrorMessages.vue'
import { ref, reactive, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import axios from 'axios'

const user = useUserStore()
const router = useRouter()

const form = reactive({
  current_password: '',
  password: '',
  password_confirmation: ''
})

const submit = () => {
  user.login(form)
}
</script>
