<template>
  <div class="ui">
    <table v-bind:style="{width:tabSize+'px',height:tabSize+'px'}">
      <tr v-for="row in matrix">
        <td v-for="col in row" v-bind:style="{ background: col!=0?activeColor:cleanColor }"></td>
      </tr>
    </table>
    <!-- <a @click="change">change</a> 
    <a @click="setString('0,1,1,0;1,0,0,1;1,1,0,1;1,0,0,1;1,1,1,1')">setString</a>
    -->

  </div>
</template>

<script>

export default {
  props: ["tag_code"],
  data () {
    return {
      show: true,
      matrix: [[1,1,1,1],[1,0,1,1],[1,1,0,1],[1,1,1,1]],
      tabSize: 200,
      activeColor: 'black',
      cleanColor: 'white'
    }
  },
  mounted: function(){
    this.setString(tag_code);
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
      var color = this.activeColor;
      trs.each(function(idx,tr){
        var tr_bits = [];
        var tds = $(tr).find("td");
        tds.each(function(i,td){
          tr_bits.push(td.style["background"] == color?1:0);
        });
        bitArr.push(tr_bits);
      });
      return bitArr;
    },

    getString: function(){
      var str = "";
      this.matrix.every(function(ele, idx, arr){
        if(str != "")str += ';'
        str += ele.join(',')
        return true;
      });
      return str;
    },

    //test: setString('0,1,1,0;1,0,0,1;1,1,0,1;1,0,0,1;1,1,1,1')
    setString: function(str){
      var xy = [];
      var rows = str.split(';');
      rows.every(function(row, idx, arr){
        var r = [];
        var cols = row.split(',');
        cols.every(function(col, idx, arr){
          r.push((col != '0')?1:0);
          return true;
        });
        xy.push(r);
        return true;
      });
      this.matrix = xy;
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
-->
<style scoped>

td.filled {
  background: black;
}
td.clean {
  background: white;
}

table {
  margin: 10px;
}

</style>
