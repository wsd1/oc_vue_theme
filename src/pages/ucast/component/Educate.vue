
<template>

<div>

<div class="ui small modal educate">

  <div class="header">
    <slot>Default education</slot>
  </div>

  <div class="image content">
      <tag></tag>

  </div>
  <div class="actions">
    <div class="ui button negative">Cancel</div>
    <div class="ui button positive">OK</div>
  </div>
</div>




  <a @click="play_start">Play</a>

</div>

</template>




<script>
import Tag from './Tag'

  export default {
    components: {
      Tag
    },

    data(){
      return {
        xxx: 9527,
        player : null,
        url: "rtmp://live.hkstv.hk.lxdns.com/live/hks"
      }
    },

    methods:{
      play_start: function(msg){
          var vue_self = this;

          $('.ui.modal.educate').modal({
            closable: false,
            onVisible: function () {

            },
            onHide: function(){

            },
            onApprove: function () {
              console.log('approved');
            },
            onDeny: function () {
              console.log('deny');
            },

            blurring: true
          })
          .modal('show');

        }
    },

    props: [],

    mounted: function(){

        $(document).ready(function(){


          $('.popup-tip').popup();

        });

    }
  }




</script>


<style scoped>

  #pb_buffer_bg {
    margin-top: -4px;
    margin-bottom: 10px;
  }

</style>