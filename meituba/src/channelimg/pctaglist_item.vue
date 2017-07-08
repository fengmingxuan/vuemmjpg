<template>
    <div style="flex: 1;margin: 5px;flex-direction: row">
        <div class="news-content" @click="todetail(stockitem.href,stockitem.alt)" v-bind:style="{backgroundColor:stockitem.backgroundColor}">
            <text class="txt">  {{stockitem.alt}}</text>
        </div>
        <div style="width: 20"></div>
        <div class="news-content" @click="todetail(stockitem.href2,stockitem.al2t)" v-bind:style="{backgroundColor:stockitem.backgroundColor2}">
            <text class="txt">  {{stockitem.alt2}}</text>
        </div>
        <div style="width: 20"></div>
        <div class="news-content" @click="todetail(stockitem.href3,stockitem.alt3)" v-bind:style="{backgroundColor:stockitem.backgroundColor3}">
            <text class="txt"> {{stockitem.alt3}}</text>
        </div>
        <div style="width: 20"></div>
        <div class="news-content" @click="todetail(stockitem.href4,stockitem.alt4)" v-bind:style="{backgroundColor:stockitem.backgroundColor4}">
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
            todetail:function (e,alt) {
                weexEventModule.startWebViewActivity(e);
//                var name = "content/pccontentlist";
//                if(e.indexOf('.shtml')!=-1){
//                    name = "content/pccontentlist";
//                }else{
//                    name = "search/pcimglist_notitlebar_autorefresh";
//                }
//                var params={
//                    url: meituba.getDefaultUrl(name),
//                    animated: "true",
//                    options:{
//                        taghref: e,
//                        title:alt
//                    }
//                };
//
//                weexNavigatorModule.push(params, event => {
//                    // modal.toast({ message: 'callback: ' + event })
//                })
            }
        }
    }
</script>

<style>
    .news-content{
        margin-left:1;
        margin-right:1;
        flex-direction:column;
        flex: 1;
        padding: 5;
        border-radius: 5;
        align-content: center;
        align-items: center;
    }

    .txt{
        font-size:20;
        color:#fff ;
    }
</style>