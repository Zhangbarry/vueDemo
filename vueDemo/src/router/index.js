import Vue from 'vue'
import Router from 'vue-router'
import Massage from '@/components/msg'
import Point from '@/components/point'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'massage', component: Massage},
    {path: '/point', name: 'point', component: Point}
  ]
})
