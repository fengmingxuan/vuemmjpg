<template>
    <div style="flex: 1;margin: 5px;flex-direction: row">
        <div class="news-content" @click="todetail(stockitem.href,stockitem.alt,stockitem.navid)" v-bind:style="{backgroundColor:stockitem.backgroundColor}">
            <text class="txt">  {{stockitem.alt}}</text>
        </div>
        <div style="width: 20"></div>
        <div class="news-content" @click="todetail(stockitem.href2,stockitem.alt2,stockitem.navid2)" v-bind:style="{backgroundColor:stockitem.backgroundColor2}">
            <text class="txt">  {{stockitem.alt2}}</text>
        </div>
        <div style="width: 20"></div>
        <div class="news-content" @click="todetail(stockitem.href3,stockitem.alt3,stockitem.navid3)" v-bind:style="{backgroundColor:stockitem.backgroundColor3}">
            <text class="txt"> {{stockitem.alt3}}</text>
        </div>
        <div style="width: 20"></div>
        <div class="news-content" @click="todetail(stockitem.href4,stockitem.alt4,stockitem.navid4)" v-bind:style="{backgroundColor:stockitem.backgroundColor4}">
            <text class="txt">  {{stockitem.alt4}}</text>
        </div>
    </div>
</template>

<script>
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meituba = require('../meituba');
    module.exports = {
        created:function(){
        },

        props: {
            stockitem: {
                type: Object
            }
        },

        methods:{
            todetail:function (e,alt,navid) {
                if (navid>=7) {
                    weexEventModule.startWebViewActivity(e);
                } else {

//                weexEventModule.startWebViewActivity(e);
                var name = "mchannel/mchannel_imglist";
//                if(e.indexOf('.shtml')!=-1){
//                    name = "content/pccontentlist";
//                }else{
//                    name = "search/pcimglist_notitlebar_autorefresh";
//                }
                var params = {
                    url: meituba.getDefaultUrl(name),
                    animated: "true",
                    options: {
                        taghref: e,
                        title: alt
                    }
                };

                weexNavigatorModule.push(params, event => {
                    // modal.toast({ message: 'callback: ' + event })
                })
            }
            }
        }
    }
</script>

<style>
    .news-content{
        margin:10;
        flex-direction:column;
        border-radius: 10;
        height: 50px;
        align-content: center;
        align-items: center;
        padding: 10;
    }

    .txt{
        font-size:25;
        color:#fff ;
        align-content: center;
        align-items: center;
    }
</style>