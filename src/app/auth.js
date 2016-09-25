import {router} from '../app/routes'

const API_URL = '/'
const LOGIN_URL = API_URL + 'api/v1/auth/login'
const SIGNUP_URL = API_URL + 'api/v1/auth/register'

export default {

  user: {
    authenticated: false
  },

  login(context, creds, redirect) {

    context.$http.post(LOGIN_URL, creds)
    .then(
      (respose) => {
        localStorage.setItem('id_token', respose.data.token)
        this.user.authenticated = true
        if(redirect) {
          router.push(redirect)        
        }
      },
      (err) => {
        context.error = err
      }
    )
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds)
    .then(
      (respose) => {
        localStorage.setItem('id_token', respose.data.token);
        this.user.authenticated = true;
        if(redirect) {
          router.push(redirect);
        }
      },
      (err) => {
        context.error = err
      }
    )
  },

  logout() {
    localStorage.removeItem('id_token');
    this.user.authenticated = false;
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token');
    if(jwt) {
      this.user.authenticated = true;
    }
    else {
      this.user.authenticated = false;
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}