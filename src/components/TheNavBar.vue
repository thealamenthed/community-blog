<template>
  <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->
  <Popover as="template" v-slot="{ open }">
    <header
      :class="[
        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
        'bg-white shadow-sm lg:static lg:overflow-y-visible'
      ]"
    >
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
          <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
            <!-- logo -->

            <div class="flex items-center flex-shrink-0">
              <a class="flex items-center" href="/">
                <HomeIcon class="block w-6 h-6 m-2 text-slate-500" />
                Home
              </a>
            </div>

            <div v-if="!user.loggedIn" class="flex items-center flex-shrink-0">
              <a class="flex items-center" href="/register">
                <UserPlusIcon class="block w-6 h-6 m-2 text-slate-500" />
                Register
              </a>
            </div>

            <div v-if="!user.loggedIn" class="flex items-center flex-shrink-0">
              <a class="flex items-center" href="/login">
                <ArrowLongUpIcon class="block w-6 h-6 m-2 text-slate-500" />
                Login
              </a>
            </div>

            <div v-if="user.loggedIn" class="flex items-center flex-shrink-0">
              <a class="flex items-center" href="/dashboard">
                <XMarkIcon class="block w-6 h-6 m-2 text-slate-500" />
                Dashboard
              </a>
            </div>
            <div v-if="user.loggedIn" class="flex items-center flex-shrink-0">
              <a class="flex items-center m-3" href="/create-post">
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
                Add new post
              </a>
            </div>

            <div
              v-if="user.loggedIn"
              @click.prevent="user.logout"
              class="flex items-center flex-shrink-0"
            >
              <a class="flex items-center" href=".">
                <XMarkIcon class="block w-6 h-6 m-2 text-slate-500" />
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
        <div class="max-w-3xl px-2 pt-2 pb-3 mx-auto space-y-1 sm:px-4">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :aria-current="item.current ? 'page' : undefined"
            :class="[
              item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
              'block rounded-md py-2 px-3 text-base font-medium'
            ]"
            >{{ item.name }}</a
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center max-w-3xl px-4 mx-auto sm:px-6">
            <div class="flex-shrink-0">
              <img class="w-10 h-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
              <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
            </div>
            <button
              type="button"
              class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div class="max-w-3xl px-2 mx-auto mt-3 space-y-1 sm:px-4">
            <a
              v-for="item in userNavigation"
              :key="item.name"
              :href="item.href"
              class="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900"
              >{{ item.name }}</a
            >
          </div>
        </div>
      </PopoverPanel>
    </header>
  </Popover>
</template>

<script setup>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel
} from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  HomeIcon,
  UserPlusIcon,
  ArrowLongUpIcon
} from '@heroicons/vue/24/outline'

import { useUserStore } from '@/stores/user'

const user = useUserStore()

// const user = {
//   name: 'Chelsea Hagon',
//   email: 'chelsea.hagon@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
// }

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Directory', href: '#', current: false }
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' }
]
</script>
