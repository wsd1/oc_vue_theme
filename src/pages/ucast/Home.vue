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
    

    <!-- <cards></cards> -->
    <tag></tag>

    <player>haha Player</player>


  </div>
</template>

<script>
import Tag from './component/Tag'
import Cards from './component/Cards'
import Player from './component/Player'

export default {
  components: {
    Cards, Player, Tag
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



