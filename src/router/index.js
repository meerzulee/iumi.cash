import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Privacy from '../views/Privacy.vue'
import AML from '../views/AML.vue'
import Terms from '../views/Terms.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms-conditions',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/privacy-policy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/aml-policy',
    name: 'AML',
    component: AML
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
