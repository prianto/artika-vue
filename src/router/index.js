import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/containers/Home'
import Category from '@/containers/Category'
import About from '@/containers/About'
import Contact from '@/containers/Contact'
import Result from '@/containers/Result'
import Post from '@/containers/Post'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    }
  ]
})
