<template>
    <div style="flex-direction: row;flex: 1;margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.href,stockitem.alt)">
            <image class="img" :src="stockitem.src" ></image>
            <text class="txt">{{stockitem.alt}}</text>
        </div>
    </div>
</template>

<script>
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var uumeitu = require('../uumeitu');
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
                return uumeitu.getImageUrl(url);
            },
            todetail:function (e,alt) {
                console.log('main list==='+e)
//                if(e.indexOf('http://www.ys8.com')!=-1){
                    weexEventModule.startWebViewActivity(e);
//                }else{
//                    var name = "image/pcimage_main_imglist";
//                    var params={
//                        url: meitu.getDefaultUrl(name),
//                        animated: "true",
//                        options:{
//                            taghref: e,
//                            title:alt
//                        }
//                    };
//
//                    weexNavigatorModule.push(params, event => {
//                        // modal.toast({ message: 'callback: ' + event })
//                    });
//                }
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
        height: 1000;
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