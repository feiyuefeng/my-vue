import Vue from 'vue'
import Router from 'vue-router'
// import { read } from '../storage/session'
import HelloWorld from '../components/HelloWorld.vue'
// import Constants from '../commons/constants'
// import { checkToken } from '../service/login.service'
// import { isEmpty } from 'lodash'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      mode: 'history'
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const token = read(Constants.SESSION_STORAGE_TOKEN)
//   if (isEmpty(token)) {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     checkToken({ token }).then(() => {
//       if (to.path === '/login') {
//         next({ path: '/' })
//       } else {
//         next()
//       }
//     })
//   }
// })

export default router
