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
    var zjito = require('./zjito');
    export default {
        data () {
            return {
                rows: []
            }
        },
        created () {
            this.rows.push('pager/pchot_pager')
            this.rows.push('hot/mhotimglist')
            this.rows.push('menu/mslideoutmenu')
            this.rows.push('main/mmainimgscroller')
            this.rows.push('main/mmainslider')
            this.rows.push('content/pccontentalllist')
            this.rows.push('search/mimglist_notitlebar_autorefresh')
            this.rows.push('linkhot/mlinkhot')
            this.rows.push('content/mcontentlist')
            this.rows.push('cat/mtabtags')
            this.rows.push('mtabimg/mtabimglist')
            this.rows.push('main/pcmaintabs')
            this.rows.push('main/pcmainimglist')
            this.rows.push('main/pcmainslider')
            this.rows.push('cat/pccatgrid_leftmenu')
            this.rows.push('cat/pccatgrid')
            this.rows.push('pager/pccat_pager')
            this.rows.push('cat/pcmult_cattabbar')
            this.rows.push('cat/pccattabbar')
            this.rows.push('cat/pccat')
            this.rows.push('search/pcimglist_notitlebar')
            this.rows.push('search/pcimglist_notitlebar_autorefresh')
            this.rows.push('linkhot/pclinkhot')
            this.rows.push('content/pccontentslider')
            this.rows.push('content/pccontentlist')
            this.rows.push('search/pcsearchimglist')
            this.rows.push('search/pcsearch')
            this.rows.push('template/navbar_v')
            this.rows.push('text')
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
                    url: zjito.getDefaultUrl(name),
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