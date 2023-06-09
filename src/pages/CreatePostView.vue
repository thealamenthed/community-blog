<template>
  <div
    class="overflow-hidden antialiased bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 -ms-overflow-style: none"
  >
    <div class="px-4">
      <div
        class="flex items-center justify-center max-w-2xl p-16 mx-auto my-16 bg-white rounded-lg"
      >
        <h1 class="text-2xl font-medium">{{ title }}</h1>
      </div>
    </div>
  </div>

  <!-- ====== Blog Section Start -->

  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center -mx-4">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <form
              @submit.prevent="onSubmit"
              action="/post/store"
              id="form"
              method="post"
              enctype="multipart/form-data"
            >
              <input type="hidden" name="user_id" v-model="user_id" />
              <div class="space-y-12 sm:space-y-16">
                <div>
                  <h2 class="text-base font-semibold leading-7 text-gray-900">
                    Ajouter un nouveau post
                  </h2>
                  <p class="max-w-2xl mt-1 text-sm leading-6 text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                  </p>

                  <div
                    class="pb-12 mt-10 space-y-8 border-b border-gray-900/10 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0"
                  >
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        for="title"
                        class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                        >Titre</label
                      >
                      <div class="mt-2 sm:col-span-2 sm:mt-0">
                        <div
                          class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                        >
                          <input
                            v-model="title"
                            type="text"
                            name="title"
                            id="title"
                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-2"
                            placeholder="Titre"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        for="content"
                        class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                        >Contenu</label
                      >
                      <div class="mt-2 sm:col-span-2 sm:mt-0">
                        <textarea
                          v-model="content"
                          id="content"
                          name="content"
                          rows="3"
                          placeholder="Contenu du post"
                          class="block m-2 w-full max-w-2xl rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        for="cover-photo"
                        class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                        >Ajouter une image</label
                      >
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
                                  ref="file"
                                  id="file"
                                  name="file"
                                  type="file"
                                  class="sr-only"
                                />
                              </label>
                              <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
                      <label
                        for="category"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Catégorie</label
                      >
                      <div class="mt-2 sm:col-span-2 sm:mt-0">
                        <div>
                          <select
                            data-te-select-init
                            data-te-select-placeholder="Example placeholder"
                            v-model="category_id"
                            id="category"
                            name="category_id"
                            class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          >
                            <option value="" disabled selected>Choose a category</option>
                            <option v-for="cat in categories" :value="cat.id" :key="cat.id">
                              {{ cat.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      </div>
    </div>
  </section>
  <!-- ====== Blog Section End -->
</template>

<script setup>
import { PhotoIcon } from '@heroicons/vue/24/solid'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'
import axios from 'axios'

const user = useUserStore()
const store = usePostStore()
const router = useRouter()

const { categories } = storeToRefs(store)
const { getCategories } = store

getCategories()

const title = ref('')
const content = ref('')
const category_id = ref(0)
const user_id = ref(user.getUser?.id)
const file = ref(null)

const onSubmit = async () => {
  alert('Envoyé')
  let formData = new FormData()
  formData.append('file', file.value)
  formData.append('title', title.value)
  formData.append('content', content.value)
  formData.append('title', title.value)
  formData.append('category_id', category_id.value)
  formData.append('user_id', user_id.value)

  await axios
    .post('/post/store', formData, {
      headers: {
        'Content-Type': 'multipart/form-data; charset=utf-8'
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>
