<template>
    <div style="flex-direction:row;margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.id,stockitem.href,stockitem.alt,stockitem.ptitle)">
            <text class="txt"> {{stockitem.alt}}</text>
        </div>
        <div class="news-content" @click="todetail(stockitem.id2,stockitem.href2,stockitem.alt2,stockitem.ptitle2)">
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
            todetail:function (id,e,alt,ptitle) {

                var paramsEvent={
                    event:"2000",
                    label:ptitle
                };
                if(id==2){
                    paramsEvent.event = "2000";
                }else if(id==3){
                    paramsEvent.event = "3000";
                }else if(id==4){
                    paramsEvent.event = "4000";
                }else if(id==5){
                    paramsEvent.event = "5000";
                }
                weexEventModule.onEvent(paramsEvent,event => {

                });
                if(alt=="两性私房网" || alt=="美女写真"){
                    weexEventModule.startWebViewActivity(e);
                }else{
                    //                 weexEventModule.startWebViewActivity(e);
                    var name = "mmain/mmain_lastest_imglist";
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