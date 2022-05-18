import {createRouter,createWebHistory} from 'vue-router'



const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: '/',
            path: '/',
            component: () => import('@/components/Layout.vue')
          },
      {
        name: 'about',
        path: '/about',
        component: () => import('@/components/About.vue')
      },
      {
        name: 'login',
        path: '/login',
        component: () => import('@/auth/Login.vue')
      },
    ],
  })

  // router.beforeEach((to, _, next) => {
  //   const isLoggedIn = isUserLoggedIn()
  
  //   if (!canNavigate(to)) {
  //     // Redirect to login if not logged in
  //     if (!isLoggedIn) return next({ name: 'auth-login' })
  
  //     // If logged in => not authorized
  //     return next({ name: 'misc-not-authorized' })
  //   }
  
  //   // Redirect if logged in
  //   if (to.meta.redirectIfLoggedIn && isLoggedIn) {
  //     const userData = getUserData()
  //     next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  //   }
  
    // return next()
  // })
    
  // },



  export default router
  