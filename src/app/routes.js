import VueRouter from 'vue-router'


//
// Layouts
//
import SplashLayout from 'src/layouts/splash'
import StandardLayout from 'src/layouts/standard'

//
// Pages
//
import WelcomePage from 'src/pages/welcome'
import BlogListPage from 'src/pages/blog/list'
import BlogShowPage from 'src/pages/blog/show'

/**/
import App from 'src/pages/App'
import Home from 'src/pages/ucast/Home'
import SecretQuote from 'src/pages/ucast/SecretQuote'
import Mine from 'src/pages/ucast/Mine'
import Signup from 'src/pages/ucast/Signup'
import Login from 'src/pages/ucast/Login'

//
// Routes
//
const routes = [

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

  { path: '/', redirect: '/app' },

  {
    path: '/app',
    component: App,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/secretquote',
        component: SecretQuote
      },
      {
        path: '/mine',
        component: Mine
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
  }

/*

  ,
*/


/**/




]


//
// Configure the router
//
export const router = new VueRouter({
  base: __dirname,
  mode: 'history',
  routes
});


