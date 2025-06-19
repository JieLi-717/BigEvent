import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory('/jd'),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      // name: 'index',
      component: () => import('@/views/Login/loginPage.vue'),
    },
    {
      path: '/',
      // name: 'index',
      component: () => import('@/views/Layout/LayoutContainer.vue'),
      redirect:'/article/manage',
      children:[
        {
          path: '/article/manage',
          component: () => import('@/views/Article/ArticleManage.vue'),
        },{
          path: '/article/channel',
          component: () => import('@/views/Article/ArticleChannel.vue'),
        },{
          path: '/user/profile',
          component: () => import('@/views/User/userProfile.vue'),
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/User/userAvatar.vue'),
        },
          {
          path: '/user/password',
          component: () => import('@/views/User/userPassword.vue'),
        },
      ]
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
