<template>
    <div style="flex-direction: row;flex: 1;margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.href,stockitem.title)">
            <image class="img" :src="stockitem.src" ></image>
            <text class="txt">{{stockitem.title}}</text>
        </div>
        <div style="width: 5px">
        </div>
        <div class="news-content" @click="todetail(stockitem.href2,stockitem.title2)">
            <image class="img" :src="stockitem.src2"></image>
            <text class="txt">{{stockitem.title2}}</text>
        </div>
    </div>
</template>

<script>
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var duoduo = require('../duoduo');
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
                return duoduo.getImageUrl(url);
            },
            todetail:function (e,alt) {
                console.log('main list==='+e)
//                if(e.indexOf('http://www.ys8.com')!=-1){
//                    weexEventModule.startWebViewActivity(e);
//                }else{
                var name = "imglist/pc_imglist";
                var params={
                    url: duoduo.getDefaultUrl(name),
                    animated: "true",
                    options:{
                        taghref: e,
                        title:alt
                    }
                };

                weexNavigatorModule.push(params, event => {
                    // modal.toast({ message: 'callback: ' + event })
                });
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
        width: 350;
        height: 440;
        border-radius: 5;
    }
    .txt{
        font-size:22;
        padding: 5;
        flex: 1;
    }

</style>