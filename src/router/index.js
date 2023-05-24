import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import { useUserStore } from '@/stores/user'

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
        title: 'Inscription',
        requiresGuest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginView.vue'),
      meta: {
        title: 'Connexion',
        requiresGuest: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../pages/DashboardView.vue'),
      meta: {
        title: 'Welcome to your dashboard',
        requiresAuth: true
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

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if(to.meta.requiresGuest && user.loggedIn) {
    next({name: 'dashboard'})
  }
  else {
    next()
  }
})

router.beforeEach((to, from, next) => { // to = route type, from = la route courante, next = permet de passer à la suite
  const user = useUserStore()
  if(to.meta.requiresAuth && !user.loggedIn){
    next({name:'login'})
  }
  else {
    next()
  }
})

export default router
