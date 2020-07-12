import Vue from 'vue'
import Router from 'vue-router'
import newsIndex from '@/pages/newsIndex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newsIndex',
      component: newsIndex
    }
  ]
})
