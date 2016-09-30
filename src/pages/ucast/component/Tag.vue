<template>
  <div>
    <table v-bind:style="{width:tabSize+'px',height:tabSize+'px'}">
      <tr v-for="row in matrix">
        <td v-for="col in row" v-bind:class="{filled: col!=0 }"></td>
      </tr>
    </table>
    <!-- <a @click="change">change</a> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true,
      matrix: [[1,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,1]],
      tabSize: 100,
      activeColor: 'red',
    }
  },

  methods:{
    change: function(){
      this.matrix = [[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]];
    },
    setBits: function(bits){
      this.matrix = bits
    },
    getBits: function(){
      var bitArr = [];
      var trs = $(this.$el).find("tr");
      trs.each(function(idx,tr){
        var tr_bits = [];
        var tds = $(tr).find("td");
        tds.each(function(idx,td){
          tr_bits.push($(td).hasClass("filled")?1:0);
        });
        bitArr.push(tr_bits);
      });
      return bitArr;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
-->
<style scoped>

td.filled {
  background: black;
}

table {
  margin: 10px;
}

</style>
