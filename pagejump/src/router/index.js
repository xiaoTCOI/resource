import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import List from '../pages/List.vue'
import Detail from '../pages/Detail.vue'
import TestValue from '../pages/TestValue.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/TestValue',
      name: 'TestValue',
      component: TestValue
    }
  ]
})
