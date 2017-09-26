<template>
    <div style="flex-direction: row;flex: 1;margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.href,stockitem.alt)">
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
//                    weexEventModule.startWebViewActivity(e);
//                }else{
                var name = "articlelist/pcnav_articlelist";
                var params={
                    url: uumeitu.getDefaultUrl(name),
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
        padding: 15;
        background-color: #fff;
        border-radius: 5;
    }

    .txt{
        font-size:28;
        padding: 5;
        flex: 1;
    }
    .txt:active{
        font-size:25;
        flex: 1;
        padding: 5;
        color: #d42591;
    }

</style>