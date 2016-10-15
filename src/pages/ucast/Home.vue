<template>
  <div class="">

    <!-- 
    <h1>Get a Free Chuck Norris Quote!</h1>
    <button class="btn btn-primary" v-on:click="getQuote()">Get a Quote</button>

    <div class="quote-area" v-if="quote">
      <h2><blockquote>{{ quote }}</blockquote></h2>
    </div>
    <img src="../assets/robot.jpg" alt="Vue"></img> 
     -->
    

    <!--  
    <educate>看天书</educate>
    -->
    <player>haha Player</player>

    <cards></cards>


  </div>
</template>

<script>

//import Educate from './component/Educate'
import Cards from './component/Cards'
import Player from './component/Player'

export default {
  components: {Cards, Player
//    Player, Educate
  },

  data() {
    return {
      quote: ''
    }
  },

  methods: {
    getQuote() {

      this.$http.get('/api/public_req')
      .then(
      (response) => {
        this.quote = response.data;
      }, 
      (response) => {
        console.log(response.err)
      });

    }
  }

}
</script>



<style lang="scss" scoped>




</style>



