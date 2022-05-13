import {createRouter,createWebHistory} from 'vue-router'



const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: '',
            path: '/',
            component: () => import('@/components/HelloWorld.vue')
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



  export default router
  