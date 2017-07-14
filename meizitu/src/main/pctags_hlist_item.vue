<template>
        <div class="news-content" @click="todetail(stockitem.href)">
            <div class="news-content">
                <text class="txt">{{stockitem.alt}}</text>
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
            todetail:function (e) {
//                weexEventModule.startWebViewActivity(e);
                var name = "tags/pctagcontent_imglist";
//                if(e.indexOf('m.meituba.com')!=-1){
//                    name = "marticle/marticlelist";
//                }else{
//                    name = "article/pcarticlelist";
//                }
                var params={
                    url: meituba.getDefaultUrl(name),
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
        flex-direction:column;
        width: 90px;
        height:60px;
        border-color: #FF6B9C;
        border-width: 1;
        border-radius: 20;
        background-color:#FF6B9C ;
        align-items: center;
        align-content: center;
        margin: 5;
        padding: 5;
    }

    .txt{
        font-size:18;
        flex-direction:column;
        color: #ffffff;
        align-items: center;
        align-content: center;
    }
</style>