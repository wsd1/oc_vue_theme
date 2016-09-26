<template>
  <div>

  <div class="ui fixed borderless menu">








    <div class="ui container">

      <div href="#" class="header item">
        <img class="logo" src="../assets/logo.png">
        <router-link to="home" active-class="active">Home</router-link>
      </div>

      <router-link to="secretquote"  active-class="active" class="item" v-if="user.authenticated" >Private</router-link>

      <div class="right menu">

        <router-link to="login" active-class="active" class="item" v-if="!user.authenticated"> Login </router-link>

        <router-link to="signup" active-class="active" class="item" v-if="!user.authenticated"> Signup </router-link>

        <router-link to="login"@click.native="logout()" active-class="active" class="item" v-if="user.authenticated"> Logout </router-link>

      </div>

    </div>









  </div>




    <div class="ui borderless main container">
      <router-view></router-view>
    </div>















  </div>
</template>

<script>
  import auth from '../app/auth'
  //import '../../assets/3party/semantic/semantic.min.js';

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
