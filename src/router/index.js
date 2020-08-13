import Vue from 'vue'
import VueRouter from 'vue-router'
import { AuthRoutes } from '@/modules/auth/router';
import {state} from '@/modules/auth/store';

Vue.use(VueRouter)

  const routes = [
    ...AuthRoutes
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from , next) => {
 if(to.matched.some(record => 
  record.meta.requiresAuth)){
    if(state.token){
      return next()
    } else {
      next('/signin')
    }
  } else {
    next()
  } 
})

export default router
