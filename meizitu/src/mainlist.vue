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
    var meizitu = require('./meizitu');
    export default {
        data () {
            return {
                rows: []
            }
        },
        created () {
            this.rows.push('mmenu/pcslideoutmenu')
            this.rows.push('mmenu/mslideoutmenu2')
            this.rows.push('mmenu/mslideoutmenu')
            this.rows.push('mmenu/mmenu_alllist')
            this.rows.push('mmain/mmain_imglist')
            this.rows.push('mmain/mlastest_imglist')
            this.rows.push('mmain/mtuijian_imglist')
            this.rows.push('mmenu/mmenulist')
            this.rows.push('img/pcimage_slider')
            this.rows.push('img/pcimage_relatedpost')
            this.rows.push('img/pcimage_imglist')
            this.rows.push('tags/pctagcontent_imglist')
            this.rows.push('main/pcmaincontent_imglist')
            this.rows.push('main/pcflink_pager')
            this.rows.push('main/pcflink')
            this.rows.push('main/pclastest')
            this.rows.push('main/pchotpic_imglist')
            this.rows.push('main/pctags_hlist')
            this.rows.push('main/pctags')
            this.rows.push('main/pcpicnew_slider')
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
                    url: meizitu.getDefaultUrl(name),
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