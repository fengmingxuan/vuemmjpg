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
    var meitu = require('./meitu');
    export default {
        data () {
            return {
                rows: []
            }
        },
        created () {
            this.rows.push('main/pcmain_alltype_imglist')
            this.rows.push('main/pcmain_jingxuan_xilie_imglist')
            this.rows.push('umengpush/pc_push_main_slider')
            this.rows.push('main/pcmain_slider')
            this.rows.push('starmain/pcstar_main_spnews_imglist')
            this.rows.push('starmain/pcstar_maintype_imglist')
            this.rows.push('starmain/pcstar_main_slider')
            this.rows.push('starsection/pcstar_section_imglist')
            this.rows.push('mingxing/pcmingxing_section_xilie_imglist')
            this.rows.push('mingxing/pcmingxing_section_xiezhen_imglist')
            this.rows.push('mingxing/pcmingxing_section_news_imglist')
            this.rows.push('mingxing/pcmingxing_section_hot_imglist')
            this.rows.push('mingxing/pcmingxing_head_imglist')
            this.rows.push('mingxing/pcmingxing_hot_imglist')
            this.rows.push('mingxing/pcmingxing_imglist')
            this.rows.push('mingxing/pcmingxing_tag_hlist')
            this.rows.push('xilie/pcxilie_big_imglist')
            this.rows.push('xilie/pcxilie_imglist')
            this.rows.push('paihang/pctop_left_imglist')
            this.rows.push('paihang/pctop_paihang_imglist')
            this.rows.push('star/pcstar_hot_pager')
            this.rows.push('star/pcstar_imgscroller')
            this.rows.push('star/pcstar_imglist')
            this.rows.push('image/pcimage_main_all_slider')
            this.rows.push('image/pcimage_main_imgalllist')
            this.rows.push('image/pcimage_main_imglist')
            this.rows.push('image/pcimage_bottomtag_hlist')
            this.rows.push('image/pcimage_paihang')
            this.rows.push('image/pcimagejingxuan_imglist')
            this.rows.push('image/pcimagehot_imglist')
            this.rows.push('image/pcimageright_imglist')
            this.rows.push('image/pcimageleft_imglist')
            this.rows.push('topnav/pctopnav_alllist')
            this.rows.push('childnav/pcpic_imglist')
            this.rows.push('childnav/pcinterest_hlist')
            this.rows.push('childnav/pcinterest')
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
                    url: meitu.getDefaultUrl(name),
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