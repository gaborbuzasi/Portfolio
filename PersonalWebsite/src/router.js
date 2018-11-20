import Vue from 'vue'
import Router from 'vue-router'
import Work from './views/Work.vue'
import Photos from './views/Photos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'work',
      component: Work
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
