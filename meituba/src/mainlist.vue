<template>
  <div class="wrapper">
    <scroller class="scroller">
      <div class="row" v-for="(name, index) in rows" :ref="'item'+index">

          <text class="text" :ref="'text'+index" @click="openitem">{{name}}</text>

      </div>
    </scroller>

  </div>
</template>

<script>
    var navigator = weex.requireModule('navigator')
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var weexModule = weex.requireModule('weexModule');
    const dom = weex.requireModule('dom')
    const modal = weex.requireModule('modal')
    var meituba = require('./meituba');
    export default {
        data () {
            return {
                rows: []
            }
        },
        created () {
            this.rows.push('mtags/mtags')
            this.rows.push('msearch/msearch_imglist')
            this.rows.push('msearch/msearch')
            this.rows.push('menu/mslideoutmenu')
            this.rows.push('mchannel/mmain_slider')
            this.rows.push('mchannel/mmain_meituba_imglist')
            this.rows.push('mmenubox/mmenubox')
            this.rows.push('mchannel/mmeinv_nav')
            this.rows.push('mchannel/mmain_channel_imglist')
            this.rows.push('marticle/marticlelist')
            this.rows.push('mchannel/mchannel_imglist')
            this.rows.push('menu/pcslideoutmenu')
            this.rows.push('main/pcmain_nenu')
            this.rows.push('main/pcmain_tags_pager')
            this.rows.push('main/pcmain_box')
            this.rows.push('main/pcmain_imglist')
            this.rows.push('main/pcmainupdate')
            this.rows.push('main/pcmaintags')
            this.rows.push('main/pcmain_slider')
            this.rows.push('new/pcnewlist')
            this.rows.push('search/pcslidersearch')
            this.rows.push('search/pcsearchlist')
            this.rows.push('search/pcsearch')
            this.rows.push('zhuanti/pctag_imglist')
            this.rows.push('zhuanti/pczhuanti')
            this.rows.push('article/pcarticlenewlike')
            this.rows.push('articleother/pcother_articlelist')
            this.rows.push('article/pcarticle_foot')
            this.rows.push('article/pcarticle_channel_pager')
            this.rows.push('article/pcarticle_channel_tabbar')
            this.rows.push('article/pcarticle_channelupdate')
            this.rows.push('article/pcarticle_showtag')
            this.rows.push('article/pcarticlenew_slider')
            this.rows.push('article/pcarticlenew')
            this.rows.push('article/pcarticlelist')
            this.rows.push('channelother/pcchannel_other_main')
            this.rows.push('channelother/pcotherclick')
            this.rows.push('channelother/pcothernew')
            this.rows.push('channelother/pcchannel_other_imglist')
            this.rows.push('mainnenu/pcmainnenu_imglist')
            this.rows.push('nenuli/pcflink')
            this.rows.push('nenuli/pcnenuli_tabbar')
            this.rows.push('nenuli/pcnenuli')
            this.rows.push('channelimg/pctaglist')
            this.rows.push('channelimg/pcrecommend')
            this.rows.push('channelimg/pchotclick')
            this.rows.push('channelimg/pcchannel_imglist')
            this.rows.push('webnews')
            this.rows.push('template/navbar_v')
        },
        methods: {
            openitem:function (event) {

                //callJS tasks:[{"data":"14","type":2},{"data":"[{\"args\":[\"150\",\"click\",{\"position\":{\"height\":52.77778,\"width\":713.19446,\"x\":33.333332,\"y\":191.66667}},null],\"method\":\"fireEvent\"}]","type":3}]
                // tasks:[{"module":"modal","method":"toast","args":[{"message":{"position":{"height":52.77778,"width":713.19446,"x":33.333332,"y":191.66667},"type":"click",
                // "target":{"ref":"186","type":"text","attr":{"value":"a"},"style":{"fontSize":45,"color":"#666666"},"event":["click"]},"timestamp":1488878471697}}]}]
                var name = event.target.attr.value;
//                modal.toast({ message:  name.toString()})
//http://localhost:8080/index.html?page=./mmjpg/build/mainlilst.js
//                 weexModule.openUrl('http://192.168.1.15:8080/dist/'+name+'.weex.js', function(err){
//                   console.log(err);
//                  });
                weexNavigatorModule.push({
                    url: meituba.getDefaultUrl(name),
                    animated: "true"
                }, event => {
                   // modal.toast({ message: 'callback: ' + event })
                })
            }
        }
    }
</script>

<style scoped>
  .scroller {
    width: inherit;
    height: inherit;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    margin-left: 1px;
    margin-right: 1px;
  }
  .row {
    height: 150px;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
  }
  .text {
    font-size: 45px;
    color: #666666;
  }

</style>