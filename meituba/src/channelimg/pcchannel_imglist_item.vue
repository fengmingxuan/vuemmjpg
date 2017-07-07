<template>
    <div style="flex-direction: row;flex: 1;margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.href,stockitem.alt)">
            <image class="img" :src="stockitem.src" ></image>
            <text class="txt">{{stockitem.alt}}</text>
            <text class="txt">{{stockitem.other}}</text>
        </div>
        <div style="width: 5px">

        </div>
        <div class="news-content" @click="todetail(stockitem.href2,stockitem.alt2)">
            <image class="img" :src="stockitem.src2"></image>
            <text class="txt">{{stockitem.alt2}}</text>
            <text class="txt">{{stockitem.other2}}</text>
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
        background-color: #fff;
        border-radius: 5;
    }
    .img{
        width: 350;
        height: 400;
        border-radius: 5;
    }
    .txt{
        font-size:30;
        width: 350;
    }
</style>