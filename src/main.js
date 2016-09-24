import Vue from 'vue'
import RootComponent from './root'
import {router} from './app/routes'

import auth from './app/auth'

//
// Configure Vue utilities and plugins
//
require('./app/boot')


Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');



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
