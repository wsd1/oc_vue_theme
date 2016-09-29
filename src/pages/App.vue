<template>
  <div>

    <div class="ui fixed borderless menu">

      <div class="ui container">

        <div href="#" class="header item">
          <img class="logo" src="../assets/logo.png">
          <router-link to="home" active-class="active">Home</router-link>
        </div>

        <router-link to="secretquote"  active-class="active" class="item" v-if="user.authenticated" >Private</router-link>

        <router-link to="mine"  active-class="active" class="item" v-if="user.authenticated" ><i class="large record icon"></i>My</router-link>

        <div class="right menu">
          <router-link to="login" active-class="active" class="item" v-if="!user.authenticated"><i class="large sign in icon"></i>Login </router-link>
          <router-link to="signup" active-class="active" class="item" v-if="!user.authenticated"><i class="large icons"><i class="user icon"></i><i class="inverted tiny corner add icon"></i></i> Signup </router-link>
          <router-link to="login"@click.native="logout()" active-class="active" class="item" v-if="user.authenticated"><i class="large sign out icon"></i> Logout </router-link>
        </div>

      </div>
    </div>

    <div class="ui borderless main container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
  import auth from '../app/auth'
  import '../../assets/3party/semantic/semantic.min.js';

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



<style lang="scss" scoped>
@import "../../assets/3party/semantic/semantic.min.css";

  .ui.menu .item img.logo {
    margin-right: 1.5em;
  }
  .main.container {
    margin-top: 7em;
  }




</style>
