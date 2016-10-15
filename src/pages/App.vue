<template>
  <div>


<nav class="navbar navbar-dark bg-inverse">
  <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
    &#9776;
  </button>
  <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">

    <a class="navbar-brand" href="#"><img src="../assets/logo.png" width="30"></a>

    <ul class="nav navbar-nav pull-xs-right">

        <router-link tag="li" class="nav-item" to="home" active-class="active"><a class="nav-link">Home</a></router-link>
        <router-link tag="li" class="nav-item" to="secretquote"  active-class="active"  v-if="user.authenticated" ><a class="nav-link">Private</a></router-link>
        <router-link tag="li" class="nav-item" to="mine"  active-class="active" v-if="user.authenticated" ><a class="nav-link">My</a></router-link>
        <router-link tag="li" class="nav-item" to="login" active-class="active" v-if="!user.authenticated"><a class="nav-link">Login</a> </router-link>
        <router-link tag="li" class="nav-item" to="signup" active-class="active" v-if="!user.authenticated"><a class="nav-link">Signup</a>  </router-link>
        <router-link tag="li" class="nav-item" to="login"@click.native="logout()" active-class="active" v-if="user.authenticated"><a class="nav-link">Logout</a></router-link>

    </ul>

  </div>



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


  import '../../assets/3party/bootstrap4/js/bootstrap.js';

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
@import "../../assets/3party/bootstrap4/css/bootstrap.min.css";

  .ui.menu .item img.logo {
    margin-right: 1.5em;
  }
  .main.container {
    margin-top: 7em;
  }




</style>
