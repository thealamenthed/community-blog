<template>
  <body class="font-sans leading-normal tracking-normal bg-white">
    <!--Header-->
    <div
      class="w-full p-0 m-0 bg-cover"
      style="background-image: url('/src/assets/img/cover.avif'); height: 60vh; max-height: 460px"
    >
      <div class="container max-w-4xl pt-56 mx-auto text-center break-normal md:pt-56">
        <!--Title-->
        <p class="text-3xl font-extrabold text-white md:text-5xl">
          Make your brunch an ode to joy !
        </p>
        <p class="text-xl text-white md:text-2xl">Welcome to my Blog</p>
        <form action="." method="get">
          <div class="relative pt-2 mx-auto mb-10 text-gray-600">
            <input
              v-model="search"
              class="h-10 px-5 text-sm text-black bg-white border-black rounded-lg pr-80 placeholder:italic focus:outline-none"
              type="text"
              name="search"
              placeholder="Search a brunch !"
            />
          </div>
        </form>
      </div>
    </div>

    <section class="pt-2 pb-8 lg:pt-10 lg:pb-20">
      <div class="container mx-auto">
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                From the blog
              </h2>

              <p class="text-base text-body-color">Last yummy brunch !</p>
            </div>
          </div>
        </div>

        <!--Skeleton-->
        <div v-if="loading" class="flex flex-wrap justify-center mx-4">
          <div v-for="index in 4" :key="index" class="w-full px-8 md:w-1/2 lg:w-1/4">
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
        <!--/Skeleton-->

        <!--Container-->
        <div v-if="posts.length" class="flex flex-wrap -mx-4">
          <div
            v-for="post in posts.slice(0, results.resultsToShow)"
            :key="post.id"
            class="w-full px-4 md:w-1/2 lg:w-1/4"
          >
            <PostCardCopy
              :post="post"
              :id="post.id"
              :category_id="post.category_id"
              :likes_count="post.likes_count"
              @like="likePost"
            />
          </div>
        </div>
        <!--/Container-->
        <!--top 5-->
        <div class="container p-4 mt-8 font-sans text-center rounded bg-slate-100 md:p-24">
          <h2 class="text-2xl font-bold break-normal md:text-4xl">Top five of brunch !</h2>
          <h3 class="text-base font-bold text-gray-600 break-normal md:text-xl">Lorem !</h3>
          <div v-if="posts.length" class="flex flex-wrap -mx-4">
            <div
              v-for="post in posts.slice(0, results.resultsToShow)"
              :key="post.id"
              class="w-full px-4 md:w-1/2 lg:w-1/4"
            >
              <PostCardCopy
                :post="post"
                :id="post.id"
                :category_id="post.category_id"
                :likes_count="post.likes_count"
                @like="likePost"
              />
            </div>
          </div>
        </div>
        <!-- /Subscribe-->
      </div>
    </section>
  </body>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'
import PostCardCopy from '@/components/PostCardCopy.vue'
import { useRoute } from 'vue-router'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

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

const totalItems = 4

const results = reactive({
  resultsToShow: totalItems
})

const resetResults = () => {
  results.resultsToShow = totalItems
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
