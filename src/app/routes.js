//
// Layouts
//
import SplashLayout from 'src/layouts/splash'
import StandardLayout from 'src/layouts/standard'

//
// Pages
//
import BlogListPage from 'src/pages/blog/list'
import BlogShowPage from 'src/pages/blog/show'
import WelcomePage from 'src/pages/welcome'

import App from 'src/pages/App'
import Home from 'src/pages/Home'
import SecretQuote from 'src/pages/SecretQuote'
import Signup from 'src/pages/Signup'
import Login from 'src/pages/Login'

//
// Routes
//
export default [

  {
    path: '',
    component: SplashLayout,
    children: [
      { path: '/welcome', component: WelcomePage }
    ]
  },

  {
    path: '',
    component: StandardLayout,
    children: [
      { path: '/blog', component: BlogListPage },
      { path: '/blog/:slug', name: 'blog/show', component: BlogShowPage }
    ]
  },

  { path: '/', redirect: '/welcome' },





  {
    path: '/app',
    component: App
  },


  {
    path: '/home',
    component: Home
  },
  {
    path: 'secretquote',
    component: SecretQuote
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  }


]
