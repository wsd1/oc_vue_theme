<template>
  <div class="ui link card" @click="play_notify">

    <div class="image">
      <img v-bind:src="cam_last_cap">
    </div>
    <div class="content">

      <span class="right floated">
        <a>
          <i class="user icon"></i>
          {{cam_viewer}} watching
        </a>
      </span>

      <a class="header">
        ID: {{cam_id}}
        <i class="video play icon"></i> 
      </a>

      <div class="meta">
        <span class="date"><a>Since:</a> {{cam_last_date}}</span>
      </div>

      <div class="description">
        Address:{{cam_desc}}
      </div>


    </div>

<!--
    <div class="ui two bottom attached buttons">
      <div class="ui button">
        <i class="add icon"></i>
        Queue
      </div>
      <div class="ui primary button">
        <i class="play icon"></i>
        Watch
      </div>
    </div>

    <div class="extra content">
      <div class="ui fluid buttons">
        <button class="blue ui button"  
        @click="cam_pub" v-if="!cam_living">Publish</button>
        <button class="blue basic ui button">Config</button>
        <button class="red basic ui button" 
        @click="cam_stop" v-if="cam_living">STOP</button>
      </div>
    </div>
-->



  </div>
</template>


<script>
export default {
  data () {
    return {
      //cam_last_cap: "../static/store.jpg",
      cam_id: 9527,
      cam_last_date: "2016/08/30 18:25",
      cam_desc: "My home",
      cam_viewer: 120,
      cam_living: true
    }
  },

  methods:{
    cam_pub: function(evt){alert(evt.target.tagName)},
    cam_stop: function(evt){alert(evt.target.tagName)},
    play_notify:function () {
        this.$dispatch('child-msg-play', this.cam_id)  // 触发child-msg事件
    }
  },

  props: ['cam_last_cap']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ui.card{
  width: 285px;
  
}


</style>
