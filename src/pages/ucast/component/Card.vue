<template>


  <div class="card" @click="click_notify">
    <img class="card-img-top" alt="Card image cap" v-bind:src="cam_last_cap">
    <div class="card-block">
      <h4 class="card-title">ID: {{cam_id}}</h4>
      <p class="card-text">{{cam_desc}}</p>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{cam_viewer}} watching</li>
        <li class="list-group-item">Since: {{cam_last_date}}</li>
      </ul>

      <a href="#" class="btn btn-primary">Go somewhere</a>
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
      cam_desc: "My home",
      cam_viewer: 120,
      cam_living: true
    }
  },

  methods:{
    cam_pub: function(evt){alert(evt.target.tagName)},
    cam_stop: function(evt){alert(evt.target.tagName)},
    click_notify:function () {
        this.$emit('card.click', this.cam_id);
    }
  },

  props: ['cam_last_cap'],



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ui.card{
  width: 285px;
  
}


</style>
