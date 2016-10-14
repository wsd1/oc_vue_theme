<template>
  <div>




<nav class="navbar navbar-default">
  <div class="container-fluid">

    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <a class="navbar-brand" href="#"><img src="../assets/logo.png" width="30">uCast</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

      <ul class="nav navbar-nav navbar-right">


        <router-link tag="li" to="home" active-class="active"><a>Home</a></router-link>
        <router-link tag="li" to="secretquote"  active-class="active"  v-if="user.authenticated" ><a>Private</a></router-link>
        <router-link tag="li" to="mine"  active-class="active" v-if="user.authenticated" ><a>My</a></router-link>
        <router-link tag="li" to="login" active-class="active" v-if="!user.authenticated"><a>Login</a> </router-link>
        <router-link tag="li" to="signup" active-class="active" v-if="!user.authenticated"><a>Signup</a>  </router-link>
        <router-link tag="li" to="login"@click.native="logout()" active-class="active" v-if="user.authenticated"><a>Logout</a></router-link>



      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>













    <div class="ui borderless main container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
  import auth from '../app/auth'


  import '../../assets/3party/bootstrap3/js/bootstrap.js';

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
@import "../../assets/3party/bootstrap3/css/bootstrap.min.css";

  .ui.menu .item img.logo {
    margin-right: 1.5em;
  }
  .main.container {
    margin-top: 7em;
  }




</style>
