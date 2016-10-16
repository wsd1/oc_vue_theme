<template>


  <div class="card col-sm-3" @click="click_notify">
    <img class="card-img-top" alt="Card image cap" v-bind:src="CamLastCap" width="265px">
    <div class="card-block">
      <div class="row">
        <div class="col-xs-5">
          <h5 class="card-title">ID:{{cam_id}}</h5>
        </div>
        <div class="col-xs-7">
          <i class="fa fa-eye" aria-hidden="true"></i>  {{cam_viewer}}
          / {{cam_viewed}}
        </div>
      </div>
      <p class="card-text"><slot>
      简单说明 
      </slot></p>
    </div>


  </div>

</template>


<script>
export default {
  data () {
    return {
      //cam_last_cap: "../static/store.jpg",
      cam_id: 952714,
      cam_last_date: "2016/08/30 18:25",
      cam_desc: "",
      cam_viewer: 1200,
      cam_viewed: 145700,
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
