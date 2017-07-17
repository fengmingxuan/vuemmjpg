<template>
    <div style="flex-direction:row;margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.href,stockitem.alt)">
            <text class="txt"> {{stockitem.alt}}</text>
        </div>
        <div class="news-content" @click="todetail(stockitem.href2,stockitem.alt2)">
            <text class="txt"> {{stockitem.alt2}}</text>
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
                if(alt=="两性私房网" || alt=="美女写真"){
                    weexEventModule.startWebViewActivity(e);
                }else{
                    //                 weexEventModule.startWebViewActivity(e);
                    var name = "mmain/mlastest_imglist";
                    //                if(e.indexOf('m.meituba.com')!=-1){
                    //                    name = "marticle/marticlelist";
                    //                }else{
                    //                    name = "article/pcarticlelist";
                    //                }
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
                    });
                }
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
        align-content: flex-start;
        align-items: flex-start;
    }

    .txt{
        font-size:30;
        padding: 20;
    }
</style>