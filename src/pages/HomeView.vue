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
          <PostCard :post="post" :id="post.id" :likes_count="post.likes_count" @like="likePost" />
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
