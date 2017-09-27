<template>
    <div style="flex-direction: row;flex: 1;margin: 5px;">
        <div class="news-content">
            <text class="txt" @click="todetail(stockitem.href,stockitem.title)">{{stockitem.title}}</text>
            <text class="txt" @click="todetail2(stockitem.href2,stockitem.title2)">{{stockitem.title2}}</text>
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
            },
            todetail2:function (e,alt) {
                console.log('main list==='+e)
//                if(e.indexOf('http://www.ys8.com')!=-1){
//                    weexEventModule.startWebViewActivity(e);
//                }else{
                var name = "imagelist/pc_imagelist";
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
        flex-direction:row;
        flex: 1;
        padding: 5;
        background-color: #fff;
        border-radius: 5;
    }

    .txt{
        font-size:25;
        padding: 10;
    }

</style>