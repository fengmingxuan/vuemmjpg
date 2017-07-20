<template>
    <div style="flex-direction: row;flex: 1;margin: 5px;padding: 10;background-color: #fff;" @click="todetail(stockitem.href,stockitem.title)">
        <image class="img" :src="stockitem.src" ></image>
        <div class="news-content" >
            <text class="txt">{{stockitem.title}}</text>
        </div>

    </div>
</template>

<script>
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meitu = require('../meitu');
    var utils = require('../common/utils');
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
                //https://www.4493.com/xingganmote/126139/1.htm
                //https://www.4493.com/xingganmote/126139/1.htm
                //https://www.4493.com/xingganmote/126139.htm
//                weexEventModule.startWebViewActivity(e);
                var name = "image/pcimage_main_imglist";
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
        border-radius: 5;
    }
    .img{
        height: 200;
        width: 300;
        border-radius: 10;
    }
    .txt{
        font-size:28;
        padding: 5;
        flex: 1;
    }
    .txt:active{
        font-size:28;
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