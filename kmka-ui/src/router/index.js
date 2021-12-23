import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MasterLayout from '../master/Master.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import Inquiries from '../views/Inquiries.vue'
import Inquiry from '../views/Inquiry.vue'
import Services from '../views/Services.vue'
import Approach from '../views/Approach.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MasterLayout,
    children:[
        {
        path: '/home',
        name: 'home',
        component: Home
        },
        {
        path: '/users',
        name: 'users',
        component: Users
        },
        {
        path: '/inquiries',
        name: 'inquiries',
        component: Inquiries
        },
        {
        path: '/inquiries/:id',
        name: 'inquiry',
        component: Inquiry
        },
        {
        path: '/services',
        name: 'services',
        component: Services
        },
        {
        path: '/approach',
        name: 'approach',
        component: Approach
        }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to) {
    if(to.query.section == undefined)
    {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if( to.name == undefined || to.name == null ){
    next({ name: 'home' });
  }
  else {
    next();
  }
})

export default router
