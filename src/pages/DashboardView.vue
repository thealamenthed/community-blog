<template>
  <div class="m-10 space-y-10 divide-y divide-gray-900/10">
    <h1 class="flex items-center justify-between text-lg lg:flex-1">
      {{ title }} {{ name }}
      <a
        v-if="user.loggedIn"
        class="flex px-3 py-2 m-3 ml-auto mr-3 -mx-3 text-sm font-semibold text-gray-900"
        href="/create-post"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        Poster
      </a>
      <a
        v-if="user.loggedIn"
        @click.prevent="user.logout"
        href="."
        class="px-3 py-2 ml-auto text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Log out</a
      >
    </h1>
    <div class="grid grid-cols-1 pt-10 gap-x-8 gap-y-8 md:grid-cols-4">
      <div class="px-4 sm:px-0">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
        <button class="p-6 text-gray-900 rounded-lg drop-shadow-2xl bg-slate-500">test</button>
      </div>

      <form
        @submit.prevent="onSubmit"
        action="/user/update/{{ user.getUser?.id }}"
        id="form"
        method="post"
        enctype="multipart/form-data"
        class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
      >
        <fieldset class="form-fieldset">
          <div class="px-4 py-6 sm:p-8">
            <ErrorMessages v-if="errors.errors.length" :errors="errors.errors" class="mb-3" />
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
                  >Name</label
                >
                <div class="mt-2">
                  <input
                    v-model="name"
                    type="text"
                    name="name"
                    autocomplete="name"
                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    v-model="email"
                    type="text"
                    name="email"
                    autocomplete="email"
                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="file" class="block text-sm font-medium leading-6 text-gray-900"
                  >Photo</label
                >
                <div class="mt-2">
                  <div class="sm:grid sm:grid-cols-1 sm:items-start sm:gap-4 sm:py-6">
                    <div class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                      Ajouter une image
                    </div>
                    <div class="mt-2 sm:col-span-2 sm:mt-0">
                      <div
                        class="flex justify-center max-w-2xl px-6 py-10 border border-dashed rounded-lg border-gray-900/25"
                      >
                        <div class="text-center">
                          <PhotoIcon class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
                          <div class="flex mt-4 text-sm leading-6 text-gray-600">
                            <label
                              for="file"
                              class="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Ajouter une image</span>
                              <input
                                @change="selectFile($event)"
                                ref="file"
                                id="file"
                                name="file"
                                type="file"
                                class="sr-only"
                              />

                              <div v-if="imageUrl" class="mb-3">
                                <img
                                  :src="imageUrl"
                                  alt="image"
                                  class=""
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div>
                                <div
                                  v-show="showProgression"
                                  class="mb-2 overflow-hidden bg-gray-200 rounded-full"
                                >
                                  <div
                                    class="h-2 bg-indigo-600 rounded-full"
                                    :style="'width:' + progression + '%'"
                                  ></div>
                                </div>
                              </div>
                            </label>
                          </div>

                          <p class="text-xs leading-5 text-center text-gray-600">
                            PNG, JPG up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center justify-start px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8"
            >
              <button
                type="submit"
                class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>

              <RouterLink :to="{ name: 'password.update' }">Changer de mot de passe</RouterLink>
            </div>
          </div>
        </fieldset>

        <div
          class="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8"
        >
          <button
            @click.prevent="deleteUser()"
            class="px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Supprimer le compte
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import axios from 'axios'
import ErrorMessages from '@/components/ErrorMessages.vue'
import Swal from 'sweetalert2'

const router = useRouter()
const user = useUserStore()
const file = ref(null)
const name = ref(user.getUser?.name)
const email = ref(user.getUser?.email)
const imageUrl = ref(user.getUser?.avatar?.thumbnail_url)
const fileToSend = ref(null)

const progression = ref(0)
const showProgression = ref(false)
const errors = reactive({
  errors: []
})

const selectFile = (event) => {
  file.value = fileToSend.value = event.target.files[0]
  console.log(file.value)
  const reader = new FileReader()
  reader.onload = (e) => {
    imageUrl.value = e.target.result
    console.log(e.target.result)
  }
  reader.readAsDataURL(event.target.files[0])
}

const onSubmit = async () => {
  errors.errors = []
  await axios.get('/sanctum/csrf-cookie')
  let formData = new FormData()
  formData.append('file', fileToSend.value)
  formData.append('name', name.value)
  formData.append('email', email.value)

  await axios
    .post('/user/update/' + user.getUser?.id, formData, {
      headers: {
        'Content-Type': 'multipart/form-data; charset=utf-8;'
      },
      onUploadProgress: (e) => {
        if (fileToSend.value && name.value && email.value) {
          showProgression.value = true
          let percentCompleted = Math.round((e.loaded * 100) / e.total)
          console.log(percentCompleted)
          progression.value = percentCompleted
          if (percentCompleted === 100) {
            setTimeout(() => {
              progression.value = 0
              showProgression.value = false
              router.push({ name: 'home' })
            }, 2000)
          }
        }
      }
    })
    .then((response) => {
      console.log(response)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      router.go(0)
    })
    .catch((error) => {
      console.log(error)
      if (error.response.status === 422) {
        for (const key in error.response.data.errors) {
          errors.errors.push(error.response.data.errors[key][0] + ' ')
        }
        console.log(errors.errors)
      }
      if (error.response.status === 500) {
        errors.errors.push(error.response.data.message)
        console.log(errors.errors)
      }
    })
}

const deleteUser = async () => {
  Swal.fire({
    icon: 'warning',
    title: 'Attention',
    text: 'Voulez-vous vraiment supprimer votre compte ?',
    allowOutsideClick: false,
    showCancelButton: true,
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      user.deleteUser()
    }
  })
}

const title = ref('')
onMounted(() => {
  title.value = document.querySelector('head title').innerHTML
})
</script>
