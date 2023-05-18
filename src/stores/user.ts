import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({
    loggedIn: localStorage.getItem('token') ? true : false,
    user: localStorage.getItem('user') ?? null,
    token: localStorage.getItem('token') ?? false,
    errors: []
  }),

  getters: {
    getToken: (state) => state.token,
    getUser: (state) => JSON.parse(state.user),
    getErrors: (state) => state.errors
  },

  actions: {
    async csrf() {
      await axios.get('/sanctum/csrf-cookie')
    },

    async register(props) {
      this.errors = [] // re initialise le tableau des erreurs
      await this.csrf()
      await axios
        .post('/register', props)
        .then((response) => {
          console.log(response)
          if(response.status == 201){
            const user = response.data.user
            const token = response.data.token
            localStorage.setItem('user', JSON.stringify(user)) // enregistre l'user et le token dans le storage et tranforme en Json 
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token // définis axios par défaut, toutes requetes auront en en-tete le token
            this.loggedIn = true // user est logge in
            this.user = user

            this.$router.push({name: 'dashboard'})
          }
        })
        .catch((error) => {
          console.log(error)
          if (error.response.status == 422) {
            for (const key in error.response.data.errors) {
              this.errors.push(error.response.data.errors[key][0] + ' ')
            }
            console.log(this.errors)
          }
        })
    }
  }
})
