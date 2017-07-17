<template>
   <div class="wrapper">
    <div id="menu" class="menu" v-bind:style="{ right: menuright,height:deviceHeight}" @click="close">
        <div class="menu-header">
            <mmenulist></mmenulist>
        </div>
    </div>
    <div id="main" class="panel" v-bind:style="{ left: panelleft}" @click="toggle">
        <!--<div class="btn-hamburger" >-->
            <mlastest_imglist></mlastest_imglist>
        <!--</div>-->
    </div>
   </div>

</template>

<script>
    import  mmenulist from '../mmenu/mmenulist.vue'
    import  mlastest_imglist from '../mmain/mlastest_imglist.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
    var meizitu = require('../meizitu');
    var storage = weex.requireModule('storage');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    export default{
        components: {
            mmenulist,
            mlastest_imglist,

        },
        data() {
            return{
                srcmenu: meizitu.getUrl('html/images/menu.png'),
                showmenu:0,
                deviceHeight:0,
                platform:'',
                menuright:-750,
                panelleft:0,
                deviceHeight:1980
            }

        },
        created () {
            var self = this;
            self.platform = self.$getConfig().env.platform;
            self.deviceHeight = self.$getConfig().env.deviceHeight;
        },

        ready(){
            var self = this;

        },
        methods: {
            toggle: function (e) {
                if(this.showmenu==0){
                    this.showmenu = 1;
                    this.menuright = 0;
                    this.panelleft = 650;
                }else{
                    this.showmenu = 0;
                    this.menuright = -750;
                    this.panelleft = 0;
                }
            },
            close: function (e) {
                this.showmenu = 0;
                this.menuright = -750;
                this.panelleft = 0;
            },
            onright:function (e) {
//                var name = "search/m_search";
//                var url = yoka.getDefaultUrl(name);
//                weexNavigatorModule.push({
//                    url:url,
//                    animated: "true"
//                }, e => {
//
//                });
            },

        }
    }
</script>

<style>
    .wrapper{
      flex-direction: row;
    }

    .panel {
        width: 750;
        height: 1330;
    }

    .panel-0 {
        left:0
    }

    .panel-1 {
        left:500
    }

    .menu {
        background-color: #dddddd;
        position: absolute;
        width: 750;
        align-items: flex-start;
        justify-content: flex-start;

    }
    .menu-0{
        right: -750;
    }

    .menu-1{
        right: 0;
    }

    .btn-hamburger {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        flex-direction: row;
        width: 750;
    }

    .tooltip {
        font-size: 30;
        color: #000;
    }

    .menu-header {
        align-items: flex-start;
        justify-content: flex-start;
        position: absolute;
        width: 750;
        right:0
    }

    .menu-header-0{
        right: 0;
    }

    .menu-header-0{
        right: 0;
    }

    .menu-header-title {

    }


</style>