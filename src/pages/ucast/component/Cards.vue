
<template>

  <div class="container">
    <player>haha Player</player>

    <div class="row">

      <card  v-on:cardClick="trigger_play" CamLastCap = "http://oceoaw6ys.bkt.clouddn.com/360_archery.jpg?imageMogr2/gravity/Center/crop/450x450">北京海淀清河中街68号 小米公司 10楼</card> 
      <card CamLastCap = "http://oceoaw6ys.bkt.clouddn.com/360_food_store.jpg?imageMogr2/gravity/Center/crop/450x450"></card> 
      <card CamLastCap = "http://oceoaw6ys.bkt.clouddn.com/360_fishing.jpg?imageMogr2/gravity/Center/crop/450x450"></card> 
      <card CamLastCap = "http://oceoaw6ys.bkt.clouddn.com/360_soldering.jpg?imageMogr2/gravity/Center/crop/450x450"></card> 
      <card CamLastCap = "http://oceoaw6ys.bkt.clouddn.com/360_shoesfactory.jpg?imageMogr2/gravity/Center/crop/450x450"></card> 
      <card CamLastCap = "http://oceoaw6ys.bkt.clouddn.com/360_cars.jpg?imageMogr2/gravity/Center/crop/450x450">北京海淀清河中街68号 小米公司 10楼</card> 
      <card CamLastCap = "http://oceoaw6ys.bkt.clouddn.com/360_drivertraining.jpg?imageMogr2/gravity/Center/crop/450x450"></card> 
      <card CamLastCap = "http://oceoaw6ys.bkt.clouddn.com/360_2ndhandcar.jpg?imageMogr2/gravity/Center/crop/450x450"></card> 


    </div>
  </div>

















</template>

<script>
  import Card from './Card'
  import Player from './Player'

  export default {
    components: {
      Card, Player
    },

    data(){
      return {
        xxx: 9527,
      }
    },

    methods:{
      trigger_play(id){
        console.log("haha" + id);

        this.$children[0].play_start("haha" + id);
      },



    },

    props: ['aaa'],
    // 在创建实例时 `events` 选项简单地调用 `$on`
    events: {
      'child-msg-play': function (msg){},
    },


  }


</script>


<style scoped>

.ui.cards{
  width: 80%;
  
}

</style>