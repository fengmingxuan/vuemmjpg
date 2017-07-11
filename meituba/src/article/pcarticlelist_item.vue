<template>
    <div style="margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.href,stockitem.alt)">
            <text class="txt">{{stockitem.title}}</text>
            <text class="txt">{{stockitem.alt}}</text>
            <image class="img" :src="stockitem.src" ></image>
            <text class="txt">{{stockitem.pagenumbers}}</text>
            <text class="txt">{{stockitem.other}}</text>
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
        height: 600;
        border-radius: 5;
    }
    .txt{
        font-size:30;
    }
</style>