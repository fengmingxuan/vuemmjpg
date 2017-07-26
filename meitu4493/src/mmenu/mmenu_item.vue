<template>
    <div style="margin: 5px;">
        <div class="news-content" @click="todetail(stockitem.id,stockitem.href,stockitem.title,stockitem.category)">
            <text class="txt">{{stockitem.id}} {{stockitem.title}}</text>
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
            todetail:function (id,e,alt,category) {
//                weexEventModule.startWebViewActivity(e);
                var name = "mxingganmote/mmote_imglist";
                if(id==8){
                    name = "mxingganmote/mstar_imglist";
                }
                var params={
                    url: meitu.getDefaultUrl(name),
                    animated: "true",
                    options:{
                        taghref: e,
                        title:alt,
                        category:category
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