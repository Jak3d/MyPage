import {createRouter, createWebHistory} from 'vue-router'
import AboutPage from '../views/AboutPage'
import ProjectPage from '../views/Projects'
import LinksPage from '../views/Links'
import AppuntiPage from '../views/AppuntiPagina'

const routes = [
    {path:'/About',
    name:'About',
    component:AboutPage,
    },
    {
        path:'/Projects',
        name:'Projects',
        component: ProjectPage,
    },{
        path:'/Links',
        name:'Links',
        component: LinksPage,
        meta: { transition: 'slide-left' },
    },
    {
        path:'/Appunti',
        name:'AppuntiPagina',
        component: AppuntiPage,
        meta: { transition: 'slide-left' },
    }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
}
)
export default router