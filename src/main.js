import Vue from 'vue'
import VueRouter from 'vue-router'
import RootComponent from './root'
import routes from './app/routes'

import auth from './auth'

//
// Configure Vue utilities and plugins
//
require('./app/boot')


Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

//
// Configure the router
//
export var router = new VueRouter({
  base: __dirname,
  mode: 'history',
  routes
})


// Check the user's auth status when the app starts
auth.checkAuth()


//
// Launch the application
//
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(RootComponent)
})
