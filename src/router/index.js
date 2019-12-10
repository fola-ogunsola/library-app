import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import signUp from '../views/signUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "signUp" */ '../views/Register.vue')
  },
  {
    path:'/loginPage',
    name:'loginPage',
    component: () => import(/* webpackChunkName: "loginPage" */ '../views/loginPage.vue')

  },
  {
    path:'/storyPage',
    name:'storyPage',
    component: () => import(/* webpackChunkName: "storyPage" */ '../views/storyPage.vue')
  },
  {
    path:'/storyOne/:id',
    name:'storyone',
    component: () => import(/* webpackChunkName: "storyOne" */ '../views/storyOne.vue')
  },
 
  {
    path:'/addPage',
    name:'addpage',
    component: () => import(/* webpackChunkName: "addPage" */ '../views/addPage.vue')
  },
  {
    path:'/deletePage',
    name:'deletepage',
    component: () => import(/* webpackChunkName: "deletePage" */ '../views/deletePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
