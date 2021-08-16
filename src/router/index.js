import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import resume1 from '@/components/resume1/main'
import email from '@/components/pages/email'
Vue.use(Router)

export default new Router({
  routes: [  
     {
      path:'/',
      name:'resume1',
      component:resume1    
    },      
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
  ]
})

