<template>
  <header class="relative inset-x-0 top-0 z-50 bg-white">
    <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex items-center mr-2 -ml-2 md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
                <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="flex items-center flex-shrink-0">
              <a href="/">
                <img
                  class="block w-auto h-32 lg:hidden"
                  src="/src/assets/logo.png"
                  alt="Your Company"
                />
              </a>
              <a href="/">
                <img
                  class="hidden w-auto h-32 lg:block"
                  src="/src/assets/img/logo.png"
                  alt="Your Company"
                />
              </a>
            </div>
            <div class="hidden md:ml-6 md:flex md:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                >{{ item.name }}</a
              >
            </div>
          </div>
          <div class="flex items-center">
            <div class="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
              <div v-if="!user.loggedIn" class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="login" class="text-sm font-semibold leading-6 text-gray-900"
                  >Log in <span aria-hidden="true">&rarr;</span></a
                >
              </div>

              <!-- Profile dropdown -->
              <Menu as="div" v-if="user.loggedIn" class="relative ml-3">
                <div>
                  <MenuButton
                    class="flex items-center text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2"
                    ><span class="m-2 font-serif">Hello {{ user.getUser?.name }}</span>
                    <span class="sr-only">Open user menu</span>
                    <img
                      v-if="src"
                      class="w-10 h-10 rounded-full"
                      :style="{
                        backgroundImage: 'url(' + user.getUser?.avatar?.thumbnail_url + ')'
                      }"
                      alt=""
                    />
                    <img
                      v-else
                      src="/src/assets/img/profile-img.png"
                      alt="Your Company"
                      class="w-10 h-10 bg-pink-200 rounded-full"
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem v-slot="{ active }">
                      <a
                        href="dashboard"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        ]"
                        >Your Profile</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        v-if="user.loggedIn"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'flex px-4 py-2 text-sm text-gray-700'
                        ]"
                        href="/create-post"
                      >
                        Poster
                      </a>
                    </MenuItem>

                    <MenuItem v-slot="{ active }">
                      <a
                        @click.prevent="user.logout"
                        href="."
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        ]"
                        >Log out</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div v-if="user.loggedIn" class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4 sm:px-6">
            <div class="flex-shrink-0">
              <img
                v-if="src"
                class="w-10 h-10 rounded-full"
                :style="{ backgroundImage: 'url(' + user.getUser?.avatar?.thumbnail_url + ')' }"
                alt=""
              />
              <span v-else class="w-10 h-10 bg-purple-500 rounded-full" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">{{ user.getUser?.name }}</div>
              <div class="text-sm font-medium text-gray-500">{{ user.getUser?.email }}</div>
            </div>
          </div>
          <div class="mt-3 space-y-1">
            <DisclosureButton
              as="a"
              href="dashboard"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
              >Your Profile</DisclosureButton
            >
            <DisclosureButton
              as="a"
              v-if="user.loggedIn"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
              href="/create-post"
            >
              Poster
            </DisclosureButton>

            <DisclosureButton
              as="a"
              @click.prevent="user.logout"
              href="."
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
              >Log out</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
      <DisclosurePanel class="md:hidden">
        <div v-if="!user.loggedIn" class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4 sm:px-6">
            <div class="flex-shrink-0">
              <img
                v-if="src"
                class="w-10 h-10 rounded-full"
                :style="{ backgroundImage: 'url(' + user.getUser?.avatar?.thumbnail_url + ')' }"
                alt=""
              />
              <span v-else class="w-10 h-10 bg-purple-500 rounded-full" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">{{ user.getUser?.name }}</div>
              <div class="text-sm font-medium text-gray-500">{{ user.getUser?.email }}</div>
            </div>
          </div>
          <div class="mt-3 space-y-1">
            <DisclosureButton
              as="a"
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
              >{{ item.name }}</DisclosureButton
            >

            <DisclosureButton
              as="a"
              v-if="!user.loggedIn"
              href="login"
              class="block px-4 py-2 text-base font-medium text-gray-500 bg-gray-200 hover:bg-gray-400 hover:text-gray-800 sm:px-6"
              >Log in</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { PlusIcon } from '@heroicons/vue/20/solid'

const navigation = [
  { name: 'Catégorie 1', href: '#' },
  { name: 'Catégorie 2', href: '#' },
  { name: 'Catégorie 2', href: '#' },
  { name: 'Catégorie 2', href: '#' }
]

const user = useUserStore()

const mobileMenuOpen = ref(false)
</script>
