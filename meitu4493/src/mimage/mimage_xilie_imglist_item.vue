<template>
    <div style="flex-direction: row;flex: 1;margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.href,stockitem.title)">
            <image class="img" :src="stockitem.src" ></image>
            <text class="txt">{{stockitem.title}}</text>
            <!--<div style="flex-direction: row;flex: 1">-->
                <!--<image class="icon" :src="getImgUrl('./images/time.png')" ></image>-->
                <!--<text class="txt">{{stockitem.alt}}</text>-->
                <!--<image class="icon" :src="getImgUrl('./images/love.png')" ></image>-->
                <!--<text class="txt2">{{stockitem.other}}</text>-->
            <!--</div>-->
        </div>
        <div style="width: 5px">

        </div>
        <div class="news-content" @click="todetail(stockitem.href2,stockitem.title2)">
            <image class="img" :src="stockitem.src2"></image>
            <text class="txt">{{stockitem.title2}}</text>
            <!--<div style="flex-direction: row;flex: 1">-->
                <!--<image class="icon" :src="getImgUrl('./images/time.png')" ></image>-->
                <!--<text class="txt">{{stockitem.alt2}}</text>-->
                <!--<image class="icon" :src="getImgUrl('./images/love.png')" ></image>-->
                <!--<text class="txt2">{{stockitem.other2}}</text>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meitu = require('../meitu');
    module.exports = {
        created:function(){
        },

        props: {
            stockitem: {
                type: Object
            }
        },

        methods:{
            getImgUrl: function (url) {
                return meitu.getImageUrl(url);
            },
            todetail:function (e,alt) {
                console.log('main list==='+e)
                var name = "mxilie/mxilie_imglist";
//                weexEventModule.startWebViewActivity(e);
                if(e.indexOf('1.htm')!=-1){
                    name = "image/pcimage_main_imgalllist";
                }else {
                    name = "mxilie/mxilie_imglist";
                }
                var params={
                    url: meitu.getDefaultUrl(name),
                    animated: "true",
                    options:{
                        taghref: e,
                        title:alt
                    }
                };

                weexNavigatorModule.push(params, event => {
                    // modal.toast({ message: 'callback: ' + event })
                });
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
        height: 440;
        border-radius: 5;
    }
    .txt{
        font-size:22;
        padding: 5;
        flex: 1;
    }
    .txt:active{
        font-size:22;
        flex: 1;
        padding: 5;
        color: #d42591;
    }
    .txt2{
        font-size:22;
        flex: 1;
    }
    .icon{
        width: 30;
        height: 30;
    }
</style>