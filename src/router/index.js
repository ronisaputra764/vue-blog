import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowPost from '../views/posts/Show.vue'
import Create from '@/views/posts/Create.vue'
import Tag from '@/views/posts/Tag.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'ShowPost',
    component: ShowPost,
    props: true
  },
  {
    path: '/posts/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/tag/:tag',
    name: "Tag",
    component: Tag
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
