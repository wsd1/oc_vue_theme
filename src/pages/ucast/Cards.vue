
<template>


    <div class="ui cards container">
      <card cam_last_cap = "http://oceoaw6ys.bkt.clouddn.com/360_archery.jpg"></card> 
      <card cam_last_cap = "http://oceoaw6ys.bkt.clouddn.com/360_food_store.jpg"></card> 
      <card cam_last_cap = "http://oceoaw6ys.bkt.clouddn.com/360_fishing.jpg"></card> 
      <card cam_last_cap = "http://oceoaw6ys.bkt.clouddn.com/360_soldering.jpg"></card> 
      <card cam_last_cap = "http://oceoaw6ys.bkt.clouddn.com/360_shoesfactory.jpg"></card> 
      <card cam_last_cap = "http://oceoaw6ys.bkt.clouddn.com/360_cars.jpg"></card> 
      <card cam_last_cap = "http://oceoaw6ys.bkt.clouddn.com/360_drivertraining.jpg"></card> 
      <card cam_last_cap = "http://oceoaw6ys.bkt.clouddn.com/360_2ndhandcar.jpg"></card> 
    </div>


</template>

<script>
  import Card from './Card'
  export default {
    components: {
      Card
    },

    data(){
      return {
        xxx: 9527,
      }
    },

    methods:{
    	play_start: function(msg){
	        $('.ui.modal').modal('setting', 'closable', false).modal('show');
      }
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