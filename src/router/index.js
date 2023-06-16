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
      path: '/post/:slug',
      name: 'post.show',
      component: () => import('../pages/PostView.vue'),
      meta: {
        title: 'Post'
      }
    },
    {
      path: '/category/:slug',
      name: 'category.show',
      component: () => import('../pages/HomeView.vue'),
      meta: {
        title: 'Category'
      }
    },
    {
      path: '/create-post',
      name: 'post.create',
      component: () => import('../pages/CreatePostView.vue'),
      meta: {
        title: 'Create a new post',
        requiresAuth: true
      }
    },
    {
      path: '/password-update',
      name: 'password.update',
      component: () => import('../pages/UpdatePasswordView.vue'),
      meta: {
        title: 'Mise à jour de mot de passe',
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
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: () => import('../pages/404View.vue'),
      meta: {
        title: 'Page non trouvée'
      }
    }
  ]
})

// to and from are both route objects. must call `next`.
router.beforeEach((to, from, next) => {
  let documentTitle = to.meta.title
  if (to.params.title) {
    documentTitle += ' ' + to.params.title
  }
  document.title = documentTitle
  next()
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if (to.meta.requiresGuest && user.loggedIn) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  // to = route type, from = la route courante, next = permet de passer à la suite
  const user = useUserStore()
  if (to.meta.requiresAuth && !user.loggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
