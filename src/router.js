import Vue from 'vue'
import Router from 'vue-router'

import Trade from './views/trade/Trade'
import OrdersPage from './views/trade/OrdersPage'
import MarketPage from './views/trade/MarketPage'
import Wallet from './views/wallet/Wallet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/trade',
      name: 'trade',
      component: Trade,
      children: [{
        path: ':walletId/orders',
        name: 'orders',
        component: OrdersPage
      }, {
        path: 'spot/:market',
        name: 'market',
        component: MarketPage
      }]
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: Wallet
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})