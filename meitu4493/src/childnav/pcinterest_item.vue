<template>
    <div style="margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.id,stockitem.href,stockitem.alt)">
            <text class="txt">{{stockitem.id}} {{stockitem.alt}}</text>
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
            todetail:function (id,e,alt) {
                if(id==5){
                    weexEventModule.startWebViewActivity(e);
                    return;
                }

//
                var name = "star/pcstar_hot_pager";
//                if(e.indexOf('m.meituba.com')!=-1){
//                    name = "marticle/marticlelist";
//                }else{
//                    name = "article/pcarticlelist";
//                }
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
        align-content: flex-start;
        align-items: flex-start;
    }

    .txt{
        font-size:30;
        padding: 20;
    }
</style>