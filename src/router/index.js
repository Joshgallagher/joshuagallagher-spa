import Vue from 'vue'
import Router from 'vue-router'

import routes from '@/app/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})