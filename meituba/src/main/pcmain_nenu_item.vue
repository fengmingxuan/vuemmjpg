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
    var meituba = require('../meituba');
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
                var name = "";
                if(id==1){
                    name = "main/pcmain_imglist";
                }else{
                    name = "nenuli/pcnenuli_tabbar";
                }
//                weexEventModule.startWebViewActivity(e);

                var params={
                    url: meituba.getDefaultUrl(name),
                    animated: "true",
                    options:{
                        taghref: e,
                        title:alt,
                        pageNo:id-1
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