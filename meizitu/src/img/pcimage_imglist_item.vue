<template>
    <div style="margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.href,stockitem.alt)">
            <!--<text class="title">{{stockitem.title}}</text>-->
            <text class="alt">{{stockitem.alt}}</text>
            <image class="img" :src="stockitem.src" ></image>
            <!--<text class="alt">{{stockitem.other}}</text>-->
        </div>
    </div>
</template>

<script>
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meizitu = require('../meizitu');
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
//                weexEventModule.startWebViewActivity(e);
                var name = "img/pcimage_slider";
                var params={
                    url: meizitu.getDefaultUrl(name),
                    animated: "true",
                    options:{
                        taghref: e,
                        title:alt
                    }
                };

                weexNavigatorModule.push(params, event => {
                    // modal.toast({ message: 'callback: ' + event })
                })
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
        height: 1100;
        border-radius: 5;
    }
    .title{
        font-size:38;
        padding: 10;
    }
    .alt{
        font-size:30;
        padding: 10;
    }
</style>