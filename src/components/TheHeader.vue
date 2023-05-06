<template>
    <div>
  <header>
     <nav
        class="flex flex-wrap items-center justify-between w-full px-4 py-4 text-lg text-gray-700 bg-white md:py-0"
      >
       <div>
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <HomeIcon class="w-5 h-5 text-gray-400" aria-hidden="true" /> 
        </div>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="block w-6 h-6 cursor-pointer md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"
          >
            <li>

              <a class="block py-2 md:p-4 hover:text-purple-400" href="#"
                >Accueil</a
              >
            </li>
            <li>
              <a class="block py-2 md:p-4 hover:text-purple-400" href="#"
                >À propos</a
              >
            </li>
            <li>
              <a class="block py-2 md:p-4 hover:text-purple-400" href="#"
                >Blog</a
              >
            </li>
          </ul>
        </div>
    </nav>
  </header>
</div>
</template>

<script setup lang="ts">
import { HomeIcon } from "@heroicons/vue/24/outline"
</script>
