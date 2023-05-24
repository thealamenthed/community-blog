import { defineStore } from "pinia"
import axios from "axios"


export const usePostStore = defineStore({
    id: 'post',

    state: () => ({
        posts: [],
        errors: [],
        loading: false,
        post: null,
        category: null,
        posts_count: 0,
        categories: [],
    }),

    getters: {
        getErrors: (state) => state.errors,
        getLoading: (state) => state.loading,
        getId: (state) => state.post.id
    },

    actions: {
        async csrf() {
            await axios.get('/sanctum/csrf-cookie')
        },

        async getPosts() {
            this.loading = true 
            await axios.get('/posts').then((response) => {
                this.loading = false
                console.log(response)
            })
            .catch(error => {
                this.loading = false
                console.log(error)
            })
        }

    }
})