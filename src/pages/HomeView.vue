<template>
  <main class="isolate">
    <!-- Hero section -->

    <div class="">
      <div class="relative">
        <div class="mx-auto max-w-7xl">
          <div class="relative z-10 lg:w-full lg:max-w-2xl">
            <svg
              class="absolute inset-y-0 hidden h-full transform translate-x-1/2 right-8 w-80 fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
                <div class="hidden sm:mb-10 sm:flex"></div>
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Best Brunch !
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div class="flex items-center mt-10 gap-x-6">
                  <a
                    href="#"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Get started</a
                  >
                  <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
                    >Learn more <span aria-hidden="true">→</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=898&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  </main>

  <!-- ====== Blog Section Start -->
  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center -mx-4">
        <!-- Search bar -->
        <form action="." method="get">
          <div class="relative pt-2 mx-auto mb-10 text-gray-600">
            <input
              v-model="search"
              class="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
        </form>
        <!-- End search bar -->
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span class="block mb-2 text-lg font-semibold text-primary"> Our Blogs </span>
            <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              Our Recent News
            </h2>
            <p class="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but the majority have
              suffered alteration in some form.
            </p>
            <p v-if="posts_count" class="text-base text-body-color">
              Total : {{ posts_count }} posts
            </p>
            <div>
              <select
                v-if="route.name == 'category.show' && route.params.slug"
                v-model="sort"
                @change="getCategory(route.params.slug, sort), resetResults()"
              >
                <option v-for="option in options" :key="option.value" :value="option.value">
                  {{ option.text }}
                </option>
              </select>
              <select
                v-else
                v-model="sort"
                @change="
                  !route.query.search ? getPosts(sort) : getSearch(route.query.search, sort),
                    resetResults()
                "
              >
                <option v-for="option in options" :key="option.value" :value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- ====== Skeleton Section Start -->
      <div v-if="loading" class="flex flex-wrap justify-center mx-4">
        <div v-for="index in 9" :key="index" class="w-full px-8 md:w-1/2 lg:w-1/3">
          <div class="mx-auto mb-10 max-w-[370px]">
            <div class="mb-8 overflow-hidden rounded">
              <div class="overflow-hidden rounded w-96 bg-slate-200 h-52 animate-pulse"></div>
              <div>
                <div class="flex-1 py-1 space-y-6 animate-pulse">
                  <div class="h-2 mt-3 mb-5 rounded w-36 bg-slate-200"></div>
                  <div class="h-2 mt-2 mb-5 rounded bg-slate-200"></div>
                  <div class="h-2 mt-2 mb-5 rounded bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="error">{{ error.message }}</div>
      <!-- ====== Skeleton Section End -->

      <div v-if="posts.length" class="flex flex-wrap -mx-4">
        <div
          v-for="post in posts.slice(0, results.resultsToShow)"
          :key="post.id"
          class="w-full px-4 md:w-1/2 lg:w-1/3"
        >
          <PostCard
            :post="post"
            :id="post.id"
            :category_id="post.category_id"
            :likes_count="post.likes_count"
            @like="likePost"
          />
        </div>
      </div>
      <div class="flex flex-wrap justify-center">
        <button
          v-if="results.resultsToShow < posts.length"
          @click="results.resultsToShow += 3"
          class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-600 rounded-md bg-blue-50 ring-1 ring-inset ring-gray-500/10"
        >
          Load more
        </button>
      </div>
    </div>
  </section>
  <!-- ====== Blog Section End -->
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'
import PostCard from '@/components/PostCard.vue'
import { useRoute } from 'vue-router'

const store = usePostStore()

const { posts, loading, error, posts_count } = storeToRefs(store)
const { getPosts, getSearch, like, getCategory } = store

const route = useRoute()

const search = ref('')

const searchPosts = () => {
  posts.getSearch(search.value)
}

if (!route.query.search) {
  getPosts()
} else if (route.name == 'category.show' && route.params.slug) {
  getCategory(route.params.slug, sort)
} else {
  getSearch(route.query.search)
}

const results = reactive({
  resultsToShow: 9
})

const resetResults = () => {
  results.resultsToShow = 9
}

const sort = ref(null)

const options = ref([
  { text: 'Newest', value: 'newest' },
  { text: 'Oldest', value: 'oldest' },
  { text: 'Likes', value: 'likes' },
  { text: 'View', value: 'views' }
])

const likePost = (data) => {
  console.log(data)
  like(data)
}

const title = ref('')

onMounted(() => {
  document.addEventListener('DOMContentLoaded', () => {
    title.value = document.querySelector('head title').innerHTML
  })
})
</script>
