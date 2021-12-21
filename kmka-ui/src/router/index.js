import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MasterLayout from '../master/Master.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'

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
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
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
