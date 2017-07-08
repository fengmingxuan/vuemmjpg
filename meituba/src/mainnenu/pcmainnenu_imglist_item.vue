<template>
    <div style="margin: 5px;flex-direction: column;">
        <div class="news-content" @click="todetail(tpicNitem.href,tpicNitem.title)">
            <text class="txt">{{tpicNitem.title}}</text>
            <text class="txt">{{tpicNitem.more}}</text>
        </div>
        <div style="background-color: #1592E5;height: 50px;"></div>
        <div v-for="stockitem in tpicNitem.list">
            <pcchannel_imglist_item :stockitem="stockitem"></pcchannel_imglist_item>
        </div>
    </div>
</template>

<script>
    import  pcchannel_imglist_item from '../channelimg/pcchannel_imglist_item.vue'
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meituba = require('../meituba');
    module.exports = {
        created:function(){
        },
        components: {
            pcchannel_imglist_item,

        },
        props: {
            tpicNitem: {
                type: Object
            }
        },

        methods:{
            todetail:function (e,alt) {
                weexEventModule.startWebViewActivity(e);
//                var name = "content/pccontentlist";
//                if(e.indexOf('.shtml')!=-1){
//                    name = "content/pccontentlist";
//                }else{
//                    name = "search/pcimglist_notitlebar_autorefresh";
//                }
//                var params={
//                    url: meituba.getDefaultUrl(name),
//                    animated: "true",
//                    options:{
//                        taghref: e,
//                        title:alt
//                    }
//                };
//
//                weexNavigatorModule.push(params, event => {
//                    // modal.toast({ message: 'callback: ' + event })
//                })
            }
        }
    }
</script>

<style>
    .news-content{
        margin-left:1;
        margin-right:1;
        flex-direction:row;
        padding: 5;
        background-color: #fff;
    }
    .txt{
        font-size:30;
        color: #1592E5;
        flex: 1;
    }
</style>