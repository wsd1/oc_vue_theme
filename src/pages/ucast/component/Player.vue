
<template>

<div>






  <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#main_modal">
  开始演示模态框</button>






  <div class="modal fade"  id="main_modal" tabindex="-1" role="dialog">

    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">


        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="Close"><span aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
        </div>



        <div class="modal-body">
          <div id="ucast-player"></div>


          <div class="progress" id="pb_buffer_bg">
            <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 10%" id="pb_buffer">
              <!-- span class="sr-only">45% Complete</span -->
            </div>
          </div>



        </div>





        <div class="modal-footer" id="my_modal_footer">

          <div>
            <div class="btn-group dropup">
              <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                设置全屏比例大小<span class="caret"></span>
              </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a id="btn_fs_size_screen_100" href="#">屏幕大小(100%)</a></li>
                <li><a id="btn_fs_size_screen_75" href="#">屏幕大小(75%)</a></li>
                <li><a id="btn_fs_size_screen_50" href="#">屏幕大小(50%)</a></li>
                <li><a id="btn_fs_size_video_100" href="#">视频大小(100%)</a></li>
                <li><a id="btn_fs_size_video_75" href="#">视频大小(75%)</a></li>
                <li><a id="btn_fs_size_video_50" href="#">视频大小(50%)</a></li>
              </ul>
            </div>

            <div class="btn-group dropup">
              <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                设置显示比例<span class="caret"></span>
              </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a id="btn_dar_original" href="#">视频原始比例</a></li>
                <li><a id="btn_dar_21_9" href="#">宽屏影院(21:9)</a></li>
                <li><a id="btn_dar_16_9" href="#">宽屏电视(16:9)</a></li>
                <li><a id="btn_dar_4_3" href="#">窄屏(4:3)</a></li>
                <li><a id="btn_dar_fill" href="#">填充(容器比例)</a></li>
              </ul>
            </div>

            <div class="btn-group dropup">
              <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                设置缓冲区大小<span class="caret"></span>
              </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a id="btn_bt_0_1" href="#">0.1秒(实时)</a></li>
                <li><a id="btn_bt_0_2" href="#">0.2秒(实时)</a></li>
                <li><a id="btn_bt_0_3" href="#">0.3秒(实时)</a></li>
                <li><a id="btn_bt_0_5" href="#">0.5秒(实时)</a></li>
                <li><a id="btn_bt_0_8" href="#">0.8秒(会议)</a></li>
                <li><a id="btn_bt_1" href="#">1秒(低延迟)</a></li>
                <li><a id="btn_bt_2" href="#">2秒(较低延时)</a></li>
                <li><a id="btn_bt_3" href="#">3秒(流畅播放)</a></li>
                <li><a id="btn_bt_5" href="#">5秒(网速较低)</a></li>
                <li><a id="btn_bt_10" href="#">10秒(无所谓延迟)</a></li>
                <li><a id="btn_bt_30" href="#">30秒(流畅第一)</a></li>
              </ul>
            </div>

            <div class="btn-group dropup" role="group">
              <button id="btn_fullscreen" class="btn btn-default">进入全屏</button>
              <button id="btn_snap" class="btn btn-default">截屏</button>
            </div>

            <div class="btn-group dropup" role="group">
              <button id="btn_pause" class="btn btn-default">暂停播放</button>
              <button id="btn_resume" class="btn btn-default hide">继续播放</button>
            </div>

            <div class="btn-group dropup" role="group">
              <button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">关闭播放器</button>
            </div>
          </div>

          <div class="hide" id="fullscreen_tips">
              请<font color="red">点击视频</font>进入全屏模式~<br/>
              由于安全原因，Flash全屏无法使用JS触发
          </div>

          <div class="form-inline">
            <div class="input-group div_play_time" title="视频的播放流畅度">
                <span class="input-group-addon">@F</span>
                <input class="form-control" style="width:57px" id="txt_fluency" type="text" placeholder="100%">
            </div>
            <div class="input-group div_play_time" title="视频总共卡顿次数">
                <span class="input-group-addon">@E</span>
                <input class="form-control" style="width:85px" id="txt_empty_count" type="text" placeholder="0">
            </div>
            <div class="input-group div_play_time" title="视频当前的帧率FPS">
                <span class="input-group-addon">@F</span>
                <input class="form-control" style="width:85px" id="txt_fps" type="text" placeholder="fps">
            </div>
            <div class="input-group div_play_time" title="视频当前的码率(视频+音频)，单位：Kbps">
                <span class="input-group-addon">@B</span>
                <input class="form-control" style="width:85px" id="txt_bitrate" type="text" placeholder="kbps">
            </div>
            <div class="input-group div_play_time" title="播放时长，格式：天 时:分:秒">
                <span class="input-group-addon">@T</span>
                <input class="form-control" style="width:85px" id="txt_time" type="text" placeholder="天 时:分:秒">
            </div>
          </div>

          <div class="form-inline" >
            URL: <a href="#" id="player_url"></a>
            <div class="input-group div_play_time" title="当前时间：年-月-日 时:分:秒">
                <span class="input-group-addon">@N</span>
                <input class="form-control" style="width:135px" id="player_clock" type="text" placeholder="年-月-日 时:分:秒">
            </div>
          </div>

        </div>

      </div>
    </div>







  </div>




  <a @click="play_start">Play</a>












</div>

</template>




<script>

  export default {

    data(){
      return {
        xxx: 9527,
        player : null,
        url: "rtmp://dev.wowza.longtailvideo.com/vod/_definst_/sintel/640.mp4"
        //"rtmp://live.hkstv.hk.lxdns.com/live/hks"
      }
    },

    methods:{
      play_start: function(msg){

          console.log("Delme:play_start show");


          $("#main_modal").modal({show:true, keyboard:true});
          //$("#main_modal").modal("show");

        }
    },

    props: [],

    mounted: function(){
          var vue_self = this;

          console.log("Delme:mounted");

          $("#main_modal").on("show.bs.modal", function(){
            player_init(vue_self);
          });

          $("#main_modal").on("hide.bs.modal", function(){
            player_deinit(vue_self);
          });


          if (true) {
              $("#btn_dar_original").click(function(){
                  select_dar(vue_self.player, "#btn_dar_original", 0, 0);
              });
              $("#btn_dar_21_9").click(function(){
                  select_dar(vue_self.player, "#btn_dar_21_9", 21, 9);
              });
              $("#btn_dar_16_9").click(function(){
                  select_dar(vue_self.player, "#btn_dar_16_9", 16, 9);
              });
              $("#btn_dar_4_3").click(function(){
                  select_dar(vue_self.player, "#btn_dar_4_3", 4, 3);
              });
              $("#btn_dar_fill").click(function(){
                  select_dar(vue_self.player, "#btn_dar_fill", -1, -1);
              });
          }

          if (true) {
              $("#btn_fs_size_video_100").click(function(){
                  select_fs_size(vue_self.player, "#btn_fs_size_video_100", "video", 100);
              });
              $("#btn_fs_size_video_75").click(function(){
                  select_fs_size(vue_self.player, "#btn_fs_size_video_75", "video", 75);
              });
              $("#btn_fs_size_video_50").click(function(){
                  select_fs_size(vue_self.player, "#btn_fs_size_video_50", "video", 50);
              });
              $("#btn_fs_size_screen_100").click(function(){
                  select_fs_size(vue_self.player, "#btn_fs_size_screen_100", "screen", 100);
              });
              $("#btn_fs_size_screen_75").click(function(){
                  select_fs_size(vue_self.player, "#btn_fs_size_screen_75", "screen", 75);
              });
              $("#btn_fs_size_screen_50").click(function(){
                  select_fs_size(vue_self.player, "#btn_fs_size_screen_50", "screen", 50);
              });
          }

          if (true) {
              $("#btn_bt_0_1").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_0_1", 0.1);
              });
              $("#btn_bt_0_2").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_0_2", 0.2);
              });
              $("#btn_bt_0_3").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_0_3", 0.3);
              });
              $("#btn_bt_0_5").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_0_5", 0.5);
              });
              $("#btn_bt_0_8").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_0_8", 0.8);
              });
              $("#btn_bt_1").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_1", 1);
              });
              $("#btn_bt_2").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_2", 2);
              });
              $("#btn_bt_3").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_3", 3);
              });
              $("#btn_bt_5").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_5", 5);
              });
              $("#btn_bt_10").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_10", 10);
              });
              $("#btn_bt_30").click(function(){
                  select_buffer_time(vue_self.player, "#btn_bt_30", 30);
              });
          }



          /**/

    }
  }


import {swfobject} from './player/swfobject.js';


function player_deinit(ctx){

  if (ctx.player) {
    ctx.player.stop();
    ctx.player = null;
  }
}


function player_init(ctx){


  if(ctx.player) {
    return;
  }

  $("#div_container").remove();
  var div_container = $("<div/>");
  $(div_container).attr("id", "div_container");
  $("#ucast-player").append(div_container);
  var player = $("<div/>");
  $(player).attr("id", "player_id");
  $(div_container).append(player);

  var uplayer = new uCastPlayer("player_id", ucast_get_player_width(), ucast_get_player_height());
  ctx.player = uplayer;

  uplayer.on_player_ready = function() {
      select_buffer_time(this, "#btn_bt_0_1", 0.1);
      this.play(ctx.url);
  };

  uplayer.on_player_metadata = function(metadata) {
      $("#btn_dar_original").text("视频原始比例" + "(" + metadata.width + ":" + metadata.height + ")");
      select_dar(this, "#btn_dar_original", 0, 0);
      select_fs_size(this, "#btn_fs_size_screen_100", "screen", 100);
  };

  uplayer.on_player_timer = function(time, buffer_length, kbps, fps, rtime) {
      var buffer = buffer_length / this.buffer_time * 100;


      console.log("Delme:on_player_timer:" + buffer);

      $('#pb_buffer').css('width', buffer+'%').attr('aria-valuenow', buffer);  

      //$('#pb_buffer').progress({percent: Number(buffer).toFixed(1)});
      //$("#pb_buffer").width(Number(buffer).toFixed(1) + "%");


      $("#pb_buffer_bg").attr("title","缓冲区长度:" + Number(buffer_length).toFixed(1) + "秒(" + Number(buffer).toFixed(1) + "%)");


      $("#txt_bitrate").val(kbps.toFixed(1) + "kbps");
      $("#txt_fps").val(fps.toFixed(1) + "fps");
      $("#txt_empty_count").val(this.empty_count() + "次卡顿");
      $("#txt_fluency").val(this.fluency().toFixed(2) + "%");

      var time_str = "";
      // day
      time_str = padding(parseInt(time / 24 / 3600), 2, '0') + " ";
      // hour
      time = time % (24 * 3600);
      time_str += padding(parseInt(time / 3600), 2, '0') + ":";
      // minute
      time = time % (3600);
      time_str += padding(parseInt(time / 60), 2, '0') + ":";
      // seconds
      time = time % (60);
      time_str += padding(parseInt(time), 2, '0');
      // show
      $("#txt_time").val(time_str);

      var clock = new Date().getTime() / 1000;
      $("#player_clock").val(absolute_seconds_to_YYYYmmdd(clock) + " " + absolute_seconds_to_HHMMSS(clock));
  };

  uplayer.start();
}





function ucast_get_player_modal() { return 898; }
function ucast_get_player_width() { return ucast_get_player_modal() - 30; }
function ucast_get_player_height() { return ucast_get_player_width() * 9 / 19; }


function select_buffer_time(player, bt_id, buffer_time) {

  console.log("Delme: select_buffer_time");

  player.set_bt(buffer_time);
/*
        if (__active_bt) {
            __active_bt.removeClass("active");
        }

        __active_bt = $(bt_id).parent();
        __active_bt.addClass("active");
*/
}

function select_dar(player, dar_id, num, den) {

  console.log("Delme: select_dar");

  player.set_dar(num, den);
/*
        if (__active_dar) {
            __active_dar.removeClass("active");
        }

        __active_dar = $(dar_id).parent();
        __active_dar.addClass("active");
*/
}

function select_fs_size(player, size_id, refer, percent) {

  console.log("Delme: select_fs_size");


  player.set_fs(refer, percent);
/*
        if (__active_size) {
            __active_size.removeClass("active");
        }

        __active_size = $(size_id).parent();
        __active_size.addClass("active");
*/
}





/**
* the uCastPlayer object.
* @param container the html container id.
* @param width a float value specifies the width of player.
* @param height a float value specifies the height of player.
* @param private_object [optional] an object that used as private object, 
*       for example, the logic chat object which owner this player.
*/
function uCastPlayer(container, width, height, private_object) {
    if (!uCastPlayer.__id) {
        uCastPlayer.__id = 100;
    }
    if (!uCastPlayer.__players) {
        uCastPlayer.__players = [];
    }

    uCastPlayer.__players.push(this);
    
    this.private_object = private_object;
    this.container = container;
    this.width = width;
    this.height = height;
    this.id = uCastPlayer.__id++;
    this.stream_url = null;
    this.buffer_time = 0.3; // default to 0.3
    this.volume = 1.0; // default to 100%
    this.callbackObj = null;
    this.ucast_player_url = require("./player/player.swf");//?_version="+srs_get_version_code();
    
    // callback set the following values.
    this.metadata = {}; // for on_player_metadata
    this.time = 0; // current stream time.
    this.buffer_length = 0; // current stream buffer length.
    this.kbps = 0; // current stream bitrate(video+audio) in kbps.
    this.fps = 0; // current stream video fps.
    this.rtime = 0; // flash relative time in ms.

    this.__fluency = {
        total_empty_count: 0,
        total_empty_time: 0,
        current_empty_time: 0
    };
    this.__fluency.on_stream_empty = function(time) {
        this.total_empty_count++;
        this.current_empty_time = time;
    };
    this.__fluency.on_stream_full = function(time) {
        if (this.current_empty_time > 0) {
            this.total_empty_time += time - this.current_empty_time;
            this.current_empty_time = 0;
        }
    };
    this.__fluency.calc = function(time) {
        var den = this.total_empty_count * 4 + this.total_empty_time * 2 + time;
        if (den > 0) {
            return time * 100 / den;
        }
        return 0;
    };
}




/**
* user can set some callback, then start the player.
* @param url the default url.
* callbacks:
*      on_player_ready():int, when srs player ready, user can play.
*      on_player_metadata(metadata:Object):int, when srs player get metadata.
*/
uCastPlayer.prototype.start = function(url) {


    if (url) {
        this.stream_url = url;
    }
    
    // embed the flash.
    var flashvars = {};
    flashvars.id = this.id;
    flashvars.on_player_ready = "__ucast_on_player_ready";
    flashvars.on_player_metadata = "__ucast_on_player_metadata";
    flashvars.on_player_timer = "__ucast_on_player_timer";
    flashvars.on_player_empty = "__ucast_on_player_empty";
    flashvars.on_player_full = "__ucast_on_player_full";
    
    var params = {};
    params.wmode = "opaque";
    params.allowFullScreen = "true";
    params.allowScriptAccess = "always";
    
    var attributes = {};

    var self = this;

    swfobject.embedSWF(
        this.ucast_player_url, 
        this.container,
        this.width, this.height,
        "11.1.0", require("./player/AdobeFlashPlayerInstall.swf"),
        flashvars, params, attributes,
        function(callbackObj){
            self.callbackObj = callbackObj;
        }
    );

    return this;
}
/**
* play the stream.
* @param stream_url the url of stream, rtmp or http.
* @param volume the volume, 0 is mute, 1 is 100%, 2 is 200%.
*/
uCastPlayer.prototype.play = function(url, volume) {
    this.stop();
    uCastPlayer.__players.push(this);
    
    if (url) {
        this.stream_url = url;
    }
    
    // volume maybe 0, so never use if(volume) to check its value.
    if (volume != null && volume != undefined) {
        this.volume = volume;
    }
    
    this.callbackObj.ref.__play(this.stream_url, this.width, this.height, this.buffer_time, this.volume);
}
uCastPlayer.prototype.stop = function() {
    for (var i = 0; i < uCastPlayer.__players.length; i++) {
        var player = uCastPlayer.__players[i];
        
        if (player.id != this.id) {
            continue;
        }
        
        uCastPlayer.__players.splice(i, 1);
        break;
    }
    
    this.callbackObj.ref.__stop();
}
uCastPlayer.prototype.pause = function() {
    this.callbackObj.ref.__pause();
}
uCastPlayer.prototype.resume = function() {
    this.callbackObj.ref.__resume();
}
/**
 * get the stream fluency, where 100 is 100%.
 */
uCastPlayer.prototype.fluency = function() {
    return this.__fluency.calc(this.rtime);
}
/**
 * get the stream empty count.
 */
uCastPlayer.prototype.empty_count = function() {
    return this.__fluency.total_empty_count;
}
/**
* to set the DAR, for example, DAR=16:9 where num=16,den=9.
* @param num, for example, 16. 
*       use metadata width if 0.
*       use user specified width if -1.
* @param den, for example, 9. 
*       use metadata height if 0.
*       use user specified height if -1.
*/
uCastPlayer.prototype.set_dar = function(num, den) {
    this.callbackObj.ref.__set_dar(num, den);
}
/**
* set the fullscreen size data.
* @refer the refer fullscreen mode. it can be:
*       video: use video orignal size.
*       screen: use screen size to rescale video.
* @param percent, the rescale percent, where
*       100 means 100%.
*/
uCastPlayer.prototype.set_fs = function(refer, percent) {
    this.callbackObj.ref.__set_fs(refer, percent);
}
/**
* set the stream buffer time in seconds.
* @buffer_time the buffer time in seconds.
*/
uCastPlayer.prototype.set_bt = function(buffer_time) {
    this.buffer_time = buffer_time;
    this.callbackObj.ref.__set_bt(buffer_time);
}
/**
 * set the player.swf url
 * @param url, player.swf's url.
 * @param params, object.
 */
 uCastPlayer.prototype.set_ucast_player_url = function(url, params) {
    var query_array = [], 
        query_string = "", 
        p;
    params = params || {}; 
    params._version = ucast_get_version_code();
    for (p in params) {
        if (params.hasOwnProperty(p)) {
            query_array.push(p + "=" + encodeURIComponent(params[p]));
        }
    }   
    query_string = query_array.join("&");
    this.ucast_player_url = url + "?" + query_string;
}
uCastPlayer.prototype.on_player_ready = function() {
}
uCastPlayer.prototype.on_player_metadata = function(metadata) {
    // ignore.
}
uCastPlayer.prototype.on_player_timer = function(time, buffer_length, kbps, fps, rtime) {
    // ignore.
}
uCastPlayer.prototype.on_player_empty = function(time) {
    // ignore.
}
uCastPlayer.prototype.on_player_full = function(time) {
    // ignore.
}
function __ucast_find_player(id) {
    for (var i = 0; i < uCastPlayer.__players.length; i++) {
        var player = uCastPlayer.__players[i];
        
        if (player.id != id) {
            continue;
        }
        
        return player;
    }
    
    throw new Error("player not found. id=" + id);
}


window.__ucast_on_player_ready = function (id) {
    var player = __ucast_find_player(id);
    player.on_player_ready();
}

window.__ucast_on_player_metadata = function (id, metadata) {
    var player = __ucast_find_player(id);
    
    // user may override the on_player_metadata, 
    // so set the data before invoke it.
    player.metadata = metadata;
    
    player.on_player_metadata(metadata);
}
window.__ucast_on_player_timer = function (id, time, buffer_length, kbps, fps, rtime) {
    var player = __ucast_find_player(id);
    
    buffer_length = Math.max(0, buffer_length);
    buffer_length = Math.min(player.buffer_time, buffer_length);
    
    time = Math.max(0, time);
    
    // user may override the on_player_timer, 
    // so set the data before invoke it.
    player.time = time;
    player.buffer_length = buffer_length;
    player.kbps = kbps;
    player.fps = fps;
    player.rtime = rtime;

    player.on_player_timer(time, buffer_length, kbps, fps, rtime);
}

window.__ucast_on_player_empty = function (id, time) {
    var player = __ucast_find_player(id);
    player.__fluency.on_stream_empty(time);
    player.on_player_empty(time);
}

window.__ucast_on_player_full = function (id, time) {
    var player = __ucast_find_player(id);
    player.__fluency.on_stream_full(time);
    player.on_player_full(time);
}
























/**
 * padding the output.
 * padding(3, 5, '0') is 00003
 * padding(3, 5, 'x') is xxxx3
 * @see http://blog.csdn.net/win_lin/article/details/12065413
 */
function padding(number, length, prefix) {
    if(String(number).length >= length){
        return String(number);
    }
    return padding(prefix+number, length, prefix);
}

/**
 * format absolute seconds to YYYY-mm-dd,
 * for example, 1389146480s (2014-01-08 10:01:20 GMT+0800) formated to 2014-01-08
 * @see: http://blog.csdn.net/win_lin/article/details/17994347
 * @usage absolute_seconds_to_YYYYmmdd(new Date().getTime() / 1000)
 */
function absolute_seconds_to_YYYYmmdd(seconds) {
    var date = new Date();
    date.setTime(Number(seconds) * 1000);

    var ret = date.getFullYear()
        + "-" + padding(date.getMonth() + 1, 2, '0')
        + "-" + padding(date.getDate(), 2, '0');

    return ret;
}

/**
 * format absolute seconds to HH:MM:SS,
 * for example, 1389146480s (2014-01-08 10:01:20 GMT+0800) formated to 10:01:20
 * @see: http://blog.csdn.net/win_lin/article/details/17994347
 * @usage absolute_seconds_to_HHMMSS(new Date().getTime() / 1000)
 */
function absolute_seconds_to_HHMMSS(seconds){
    var date = new Date();
    date.setTime(Number(seconds) * 1000);

    var ret = padding(date.getHours(), 2, '0')
        + ":" + padding(date.getMinutes(), 2, '0')
        + ":" + padding(date.getSeconds(), 2, '0');

    return ret;
}


</script>


<style scoped>

        #my_modal_footer {
            margin-top: -20px;
            padding-top: 3px;
        }
        .div_play_time {
            margin-top: 10px;
        }
        #pb_buffer_bg {
            margin-top: -4px;
            margin-bottom: 10px;
        }

</style>