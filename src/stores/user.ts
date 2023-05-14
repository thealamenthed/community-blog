import { defineStore } from "pinia"
import axios from "axios"
import { useRouter } from "vue-router"

export const useUserStore = defineStore({
    id:'user',

    state: () => ({
        loggedIn: localStorage.getItem('token') ? true : false,
        user: localStorage.getItem('user') ?? null,
        token: localStorage.getItem('token') ?? false,
        errors: [],

    }),

    getters: {
        getToken: (state) => state.token,
        getUser: (state) => JSON.parse(state.user),
        getErrors: (state) => state.errors,
    },

    actions: {

    }
})