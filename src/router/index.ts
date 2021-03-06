import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectList from '@/views/ProjectList.vue'
import Project from '@/views/Project.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  /*
  * projectType get a string
  * This string correspond, in the database
  */
  {
    path: '/:category',
    name: 'ProjectList',
    component: ProjectList,
  },
  {
    path: '/project/:projectId',
    name: 'Project',
    component: Project
  }
  /*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( 
      //webpackChunkName: "about"  
      '../views/About.vue')
  }
  */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
