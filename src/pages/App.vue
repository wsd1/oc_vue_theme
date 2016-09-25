<template>
  <div>

    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <li><router-link to="home">Home</router-link></li>
          <li><router-link to="login" v-if="!user.authenticated">Login</router-link></li>
          <li><router-link to="signup" v-if="!user.authenticated">Sign Up</router-link></li>
          <li><router-link to="secretquote" v-if="user.authenticated">Secret Quote</router-link></li>
          <li><router-link to="login" v-if="user.authenticated" @click.native="logout()">Logout</router-link></li>
        </ul>
      </div>    
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import auth from '../app/auth'

export default {
  data() {
    return {
      user: auth.user
    }
  },

  methods: {

    logout() {
      auth.logout()
    }
  }
}
</script>