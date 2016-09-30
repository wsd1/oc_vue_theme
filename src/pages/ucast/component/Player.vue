
<template>

<div>
  
  <div class="ui modal player">

    <i class="close icon"></i>
  
    <div class="header">
      <slot>Default player</slot>
    </div>


    <div class="content">

      <div class="description"  id="ucast-player"></div>

      <div class="ui teal progress" id="pb_buffer">
        <div class="bar"></div>
      </div>

      <div class="ui styled fluid accordion">
        <div class="title"><i class="dropdown icon"></i>Details</div>
        <div class="content">
          <h4 class="ui horizontal divider header"><i class="configure icon"></i> Specifications </h4>
          <div class="">
              <select class="ui search dropdown">
                <option value="">设置全屏比例大小</option>
                <option value="" id="btn_fs_size_screen_100" >屏幕大小(100%)</option>
                <option value="" id="btn_fs_size_screen_75" >屏幕大小(75%)</option>
                <option value="" id="btn_fs_size_screen_50" >屏幕大小(50%)</option>
                <option value="" id="btn_fs_size_video_100" >视频大小(100%)</option>
                <option value="" id="btn_fs_size_video_75" >视频大小(75%)</option>
                <option value="" id="btn_fs_size_video_50" >视频大小(50%)</option>
              </select>

              <select class="ui search dropdown">
                <option value="">设置显示比例</option>
                <option value="" id="btn_dar_original" >视频原始比例</option>
                <option value="" id="btn_dar_21_9" >宽屏影院(21:9)</option>
                <option value="" id="btn_dar_16_9" >宽屏电视(16:9)</option>
                <option value="" id="btn_dar_4_3" >窄屏(4:3)</option>
                <option value="" id="btn_dar_fill" >填充(容器比例)</option>
              </select>

              <select class="ui search dropdown">
                <option value="">设置缓冲区大小</option>
                <option value="" id="btn_bt_0_1" >0.1秒(实时)</option>
                <option value="" id="btn_bt_0_8" >0.8秒(会议)</option>
                <option value="" id="btn_bt_2" >2秒(较低延时)</option>
                <option value="" id="btn_bt_30" >30秒(流畅第一)</option>
              </select>
          </div>
          <h4 class="ui horizontal divider header"><i class="bar chart icon"></i> Specifications </h4>
          <div class="">


              <div class="ui labeled input">
                <div class="ui label popup-tip" data-content="视频的播放流畅度">@F
                </div>
                <input type="text" placeholder="100%" style="width:70px" id="txt_fluency">
              </div>

              <div class="ui labeled input">
                <div class="ui label popup-tip" data-content="视频总共卡顿次数">@E
                </div>
                <input type="text" placeholder="0" style="width:70px" id="txt_empty_count">
              </div>

              <div class="ui labeled input">
                <div class="ui label popup-tip" data-content="视频当前的帧率FPS">@F
                </div>
                <input type="text" placeholder="xx fps" style="width:70px" id="txt_fps">
              </div>

              <div class="ui labeled input">
                <div class="ui label popup-tip" data-content="视频当前的码率(视频+音频)，单位：Kbps">@B
                </div>
                <input type="text" placeholder="xxxx kbps" style="width:70px" id="txt_bitrate">
              </div>

              <div class="ui labeled input">
                <div class="ui label popup-tip" data-content="播放时长，格式：天 时:分:秒">
                @T</div>
                <input type="text" placeholder="天 时:分:秒" style="width:140px" id="txt_time">
              </div>

              <div class="ui labeled input">
                <div class="ui label popup-tip" data-content="当前时间：年-月-日 时:分:秒">
                @N</div>
                <input type="text" placeholder="年-月-日 时:分:秒" style="width:140px" id="player_clock">
              </div>
          </div>
        </div>
      </div>


    </div>

    <div class="actions">
      <div class="ui button">Cancel</div>
      <div class="ui button">OK</div>
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
        url: "rtmp://live.hkstv.hk.lxdns.com/live/hks"
      }
    },

    methods:{
      play_start: function(msg){
          var vue_self = this;

          $('.ui.modal.player').modal({
            closable: false,
            onVisible: function () {
              player_init(vue_self);
            },
            onHide: function(){
              player_deinit(vue_self);
            },
            onApprove: function () {
//              player_deinit(this);
              console.log('approved');
            },
            onDeny: function () {
//              player_deinit(this);
              console.log('deny');
            }

          })
          .modal('show');

        }
    },

    props: [],

    mounted: function(){

        $(document).ready(function(){

          $('.ui.accordion').accordion();

          $('.popup-tip').popup();

        });

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

      $('#pb_buffer').progress({
        percent: Number(buffer).toFixed(1)
      });
/*
      $("#pb_buffer").width(Number(buffer).toFixed(1) + "%");
      $("#pb_buffer_bg").attr("title","缓冲区长度:" + Number(buffer_length).toFixed(1) + "秒(" + Number(buffer).toFixed(1) + "%)");
*/

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





function ucast_get_player_modal() { return 900; }
function ucast_get_player_width() { return ucast_get_player_modal() - 42; }
function ucast_get_player_height() { return ucast_get_player_width() * 9 / 19; }


function select_buffer_time(player, bt_id, buffer_time) {
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

        #pb_buffer_bg {
            margin-top: -4px;
            margin-bottom: 10px;
        }
</style>