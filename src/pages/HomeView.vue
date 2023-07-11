<template>
  <!-- <main class="isolate">
    Hero section 

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
                  Make your brunch an ode to joy !
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <form action="." method="get">
                  <div class="flex items-center mt-10 gap-x-6">
                    <div class="w-full sm:max-w-xs">
                      <label for="search" class="sr-only">Search</label>
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                          <MagnifyingGlassIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          v-model="search"
                          class="h-10 px-5 text-sm bg-white border-2 border-gray-300 rounded-lg lg:pr-96 focus:outline-none"
                          type="text"
                          name="search"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                  </div>
                </form>
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
  </main> -->

  <body class="font-sans leading-normal tracking-normal bg-gray-200">
    <!--Header-->
    <div
      class="w-full p-0 m-0 bg-cover"
      style="background-image: url('/src/assets/img/cover.avif'); height: 60vh; max-height: 460px"
    >
      <div class="container max-w-4xl pt-16 mx-auto text-center break-normal md:pt-32">
        <!--Title-->
        <p class="text-3xl font-extrabold text-white md:text-5xl">
          Make your brunch an ode to joy !
        </p>
        <p class="text-xl text-white md:text-2xl">Welcome to my Blog</p>
      </div>
    </div>

    <!--Container-->
    <div class="container max-w-6xl px-4 mx-auto -mt-32 md:px-0">
      <div class="mx-0 sm:mx-6">
        <!--Nav-->
        <nav class="w-full mt-0">
          <div class="container flex items-center mx-auto">
            <div class="flex w-1/2 pl-4 text-sm">
              <ul class="flex items-center justify-between flex-1 list-reset md:flex-none">
                <li class="mr-2">
                  <a
                    class="inline-block px-2 py-2 text-white no-underline hover:underline"
                    href="post.html"
                    >POST</a
                  >
                </li>
                <li class="mr-2">
                  <a
                    class="inline-block px-2 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                    href="#"
                    >LINK</a
                  >
                </li>
                <li class="mr-2">
                  <a
                    class="inline-block px-2 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                    href="#"
                    >LINK</a
                  >
                </li>
                <li class="mr-2">
                  <a
                    class="inline-block px-2 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                    href="post_vue.html"
                    >POST_VUE</a
                  >
                </li>
              </ul>
            </div>

            <div class="flex content-center justify-end w-1/2">
              <a
                class="inline-block h-10 p-2 text-center text-gray-500 no-underline hover:text-white hover:text-underline md:h-auto md:p-4 avatar"
                data-tippy-content="@twitter_handle"
                href="https://twitter.com/intent/tweet?url=#"
              >
                <svg
                  class="h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                  ></path>
                </svg>
              </a>
              <a
                class="inline-block h-10 p-2 text-center text-gray-500 no-underline hover:text-white hover:text-underline md:h-auto md:p-4 avatar"
                data-tippy-content="#facebook_id"
                href="https://www.facebook.com/sharer/sharer.php?u=#"
              >
                <svg
                  class="h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>

        <div class="w-full text-xl leading-normal text-gray-800 bg-gray-200 rounded-t md:text-2xl">
          <!--Lead Card-->
          <div class="flex h-full overflow-hidden bg-white rounded shadow-lg">
            <a href="post.html" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full rounded-t md:w-2/3">
                <img
                  src="https://source.unsplash.com/collection/494263/800x600"
                  class="w-full h-full shadow"
                />
              </div>

              <div class="flex flex-col flex-grow flex-shrink w-full md:w-1/3">
                <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
                  <p class="w-full px-6 pt-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                  <div class="w-full px-6 text-xl font-bold text-gray-900">
                    👋 Welcome fellow Tailwind CSS and Ghost fan
                  </div>
                  <p class="px-6 mb-5 font-serif text-base text-gray-800">
                    This starter template is an attempt to replicate the default Ghost theme
                    "Casper" using Tailwind CSS and vanilla Javascript.
                  </p>
                </div>

                <div
                  class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
                >
                  <div class="flex items-center justify-between">
                    <img
                      class="w-8 h-8 mr-4 rounded-full avatar"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <!--/Lead Card-->

          <!--Posts Container-->
          <div class="flex flex-wrap justify-between pt-12 -mx-6">
            <!--1/3 col -->
            <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
              <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
                <a
                  href="#"
                  class="flex flex-wrap no-underline transition duration-300 delay-150 hover:no-underline hover:delay-300"
                >
                  <img
                    src="https://source.unsplash.com/collection/225/800x600"
                    class="w-full h-64 pb-6 rounded-t"
                  />
                  <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                  <div class="w-full px-6 text-xl font-bold text-gray-900">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class="px-6 mb-5 font-serif text-base text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                    nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div
                class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
              >
                <div class="flex items-center justify-between">
                  <img
                    class="w-8 h-8 mr-4 rounded-full avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>

            <!--1/3 col -->
            <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
              <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/collection/3106804/800x600"
                    class="w-full h-64 pb-6 rounded-t"
                  />
                  <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                  <div class="w-full px-6 text-xl font-bold text-gray-900">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class="px-6 mb-5 font-serif text-base text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet,
                    consectetur adipiscing elit. Aliquam at ip Aliquam at ipsum eu nunc commodo
                    posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div
                class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
              >
                <div class="flex items-center justify-between">
                  <img
                    class="w-8 h-8 mr-4 rounded-full avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>

            <!--1/3 col -->
            <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
              <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/collection/539527/800x600"
                    class="w-full h-64 pb-6 rounded-t"
                  />
                  <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                  <div class="w-full px-6 text-xl font-bold text-gray-900">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class="px-6 mb-5 font-serif text-base text-gray-800">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div
                class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
              >
                <div class="flex items-center justify-between">
                  <img
                    class="w-8 h-8 mr-4 rounded-full avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>

            <!--1/2 col -->
            <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/2">
              <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/collection/3657445/800x600"
                    class="w-full h-full pb-6 rounded-t"
                  />
                  <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                  <div class="w-full px-6 text-xl font-bold text-gray-900">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class="px-6 mb-5 font-serif text-base text-gray-800">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div
                class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
              >
                <div class="flex items-center justify-between">
                  <img
                    class="w-8 h-8 mr-4 rounded-full avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>

            <!--1/2 col -->
            <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/2">
              <div
                class="flex-row flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg"
              >
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/collection/764827/800x600"
                    class="w-full h-full pb-6 rounded-t"
                  />
                  <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                  <div class="w-full px-6 text-xl font-bold text-gray-900">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class="px-6 mb-5 font-serif text-base text-gray-800">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div
                class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
              >
                <div class="flex items-center justify-between">
                  <img
                    class="w-8 h-8 mr-4 rounded-full avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>

            <!--2/3 col -->
            <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-2/3">
              <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/collection/325867/800x600"
                    class="w-full h-full pb-6 rounded-t"
                  />
                  <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                  <div class="w-full px-6 text-xl font-bold text-gray-900">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class="px-6 mb-5 font-serif text-base text-gray-800">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div
                class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
              >
                <div class="flex items-center justify-between">
                  <img
                    class="w-8 h-8 mr-4 rounded-full avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>

            <!--1/3 col -->
            <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
              <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/collection/1118905/800x600"
                    class="w-full h-full pb-6 rounded-t"
                  />
                  <p class="w-full px-6 text-xs text-gray-600 md:text-sm">GETTING STARTED</p>
                  <div class="w-full px-6 text-xl font-bold text-gray-900">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class="px-6 mb-5 font-serif text-base text-gray-800">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div
                class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg"
              >
                <div class="flex items-center justify-between">
                  <img
                    class="w-8 h-8 mr-4 rounded-full avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p class="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
          </div>
          <!--/ Post Content-->
        </div>

        <!--Subscribe-->
        <div class="container p-4 mt-8 font-sans text-center bg-green-100 rounded md:p-24">
          <h2 class="text-2xl font-bold break-normal md:text-4xl">Subscribe to Ghostwind CSS</h2>
          <h3 class="text-base font-normal font-bold text-gray-600 break-normal md:text-xl">
            Get the latest posts delivered right to your inbox
          </h3>
          <div class="w-full pt-4 text-center">
            <form action="#">
              <div class="flex flex-wrap items-center max-w-xl p-1 pr-0 mx-auto">
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  class="flex-1 p-3 mr-2 text-gray-600 rounded shadow appearance-none focus:outline-none"
                />
                <button
                  type="submit"
                  class="flex-1 block py-4 mt-4 text-base font-semibold tracking-wider text-white uppercase bg-green-500 rounded shadow appearance-none md:mt-0 md:inline-block hover:bg-green-400"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- /Subscribe-->

        <!--Author-->
        <div class="flex items-center w-full p-8 font-sans md:p-24">
          <img
            class="w-10 h-10 mr-4 rounded-full"
            src="http://i.pravatar.cc/300"
            alt="Avatar of Author"
          />
          <div class="flex-1">
            <p class="text-base font-bold leading-none md:text-xl">Ghostwind CSS</p>
            <p class="text-xs text-gray-600 md:text-base">
              Tailwind CSS version of Ghost's Casper theme by
              <a
                class="text-gray-800 no-underline border-b-2 border-green-500 hover:text-green-500"
                href="https://www.tailwindtoolbox.com"
                >TailwindToolbox.com</a
              >
            </p>
          </div>
          <div class="justify-end">
            <a
              href="post.html"
              class="px-4 py-2 text-xs font-bold text-gray-500 bg-transparent border border-gray-500 rounded-full hover:border-green-500 hover:text-green-500"
              >Read More</a
            >
          </div>
        </div>
        <!--/Author-->
      </div>
    </div>

    <footer class="bg-gray-900">
      <div class="container flex items-center max-w-6xl px-2 py-8 mx-auto">
        <div class="flex flex-wrap items-center w-full mx-auto">
          <div
            class="flex justify-center w-full font-extrabold text-white md:w-1/2 md:justify-start"
          >
            <a class="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
              👻 <span class="text-base text-gray-200">Ghostwind CSS</span>
            </a>
          </div>
          <div class="flex content-center justify-between w-full pt-2 md:w-1/2 md:justify-end">
            <ul class="flex items-center justify-center flex-1 list-reset md:flex-none">
              <li>
                <a class="inline-block px-3 py-2 text-white no-underline" href="#">Active</a>
              </li>
              <li>
                <a
                  class="inline-block px-3 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                  href="#"
                  >link</a
                >
              </li>
              <li>
                <a
                  class="inline-block px-3 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                  href="#"
                  >link</a
                >
              </li>
              <li>
                <a
                  class="inline-block px-3 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                  href="#"
                  >link</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </body>
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
