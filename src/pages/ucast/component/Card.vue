<template>


  <div class="card col-sm-3" @click="click_notify">
    <img class="card-img-top" alt="Card image cap" v-bind:src="CamLastCap" width="265px">
    <div class="card-block">
      <h4 class="card-title">ID: {{cam_id}}</h4>
      <p class="card-text"><slot>
      简单说明 
      </slot></p>
    </div>
    <div class="card-footer ">
      <i class="fa fa-eye" aria-hidden="true"></i>  {{cam_viewer}}
      <i class="fa fa-clock-o" aria-hidden="true"></i> {{cam_last_date}}
    </div>
  </div>

</template>


<script>
export default {
  data () {
    return {
      //cam_last_cap: "../static/store.jpg",
      cam_id: 9527,
      cam_last_date: "2016/08/30 18:25",
      cam_desc: "",
      cam_viewer: 120,
      cam_living: true
    }
  },

  methods:{
    cam_pub: function(evt){alert(evt.target.tagName)},
    cam_stop: function(evt){alert(evt.target.tagName)},
    click_notify:function () {
        this.$emit('cardClick', this.cam_id);
   }
  },

  props: ['CamLastCap'],



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import "../../../../assets/3party/font-awesome-4.6.3/css/font-awesome.css";

.card-footer i {
  margin-left: 10px;
}

.card{
  width: 267px;
  padding-right: 0;
  padding-left: 0;
  margin: 5px;
  margin-bottom: 20px;
}

.card-text{
  min-height: 48px;  
}

.card-block{
  padding: 10px;
}

</style>
