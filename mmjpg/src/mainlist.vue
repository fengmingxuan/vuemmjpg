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
    var mmjpg = require('./mmjpg');
    export default {
        data () {
            return {
                rows: []
            }
        },
        created () {
            this.rows.push('pc/main/pc_main')
            this.rows.push('pc/main/pc_main_v')
            this.rows.push('pc/main/pc_main_head_foot')
            this.rows.push('pc/main/pc_main_load_refresh_v')
            this.rows.push('pc/mainpager/pcmaintoppager')
            this.rows.push('pc/mainpager/pcmaintopslider')
            this.rows.push('pc/mainhot/pcmainhotlist')
            this.rows.push('pc/mainhot/pcmainhotlist_v')
            this.rows.push('pc/mainlike/pcmainlikelist')
            this.rows.push('pc/mainlike/pcmainlikelist_v')
            this.rows.push('pc/mainmm/pcmainmmlist')
            this.rows.push('pc/mainmm/pcmainmmlist_v')
            this.rows.push('pc/friendlink/friendlinklist')
            this.rows.push('pc/friendlink/friendlinklist_v')
            this.rows.push('pc/nav/subnav')
            this.rows.push('pc/nav/subnav_v')
            this.rows.push('pc/mainmm/pcmainmmgrid')

            this.rows.push('stocknews/stocknews')
            this.rows.push('components/a')
            this.rows.push('components/slider')
            this.rows.push('components/indicator')
            this.rows.push('components/switch')
            this.rows.push('components/text')
            this.rows.push('components/textarea')
            this.rows.push('components/vedio')
            this.rows.push('components/web')
            this.rows.push('components/div')
            this.rows.push('components/image')
            this.rows.push('components/list')
            this.rows.push('components/input')
            this.rows.push('components/cell')
            this.rows.push('components/loading')
            this.rows.push('components/refresh')
            this.rows.push('components/scroller')

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
                    url: mmjpg.getDefaultUrl(name),
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