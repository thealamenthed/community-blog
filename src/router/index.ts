import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Mon Blog'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/RegisterView.vue'),
      meta: {
        title: 'Inscription'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginView.vue'),
      meta: {
        title: 'Connexion'
      }
    },


    {
      path: '/about', 
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutView.vue')
    }
  ]
})

 // to and from are both route objects. must call `next`.
 router.beforeEach((to, from, next) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title;
  }
  next();
})



export default router
