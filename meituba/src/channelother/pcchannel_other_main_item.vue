<template>
    <div style=" margin: 5px;flex-direction:column;">
        <div class="news-content" @click="todetail(mainitem.href,mainitem.title)">
            <text class="txt">{{mainitem.title}}</text>
            <text class="txt">{{mainitem.more}}</text>
        </div>
        <div v-for="stockitem in mainitem.list">
            <pcchannel_other_imglist_item :stockitem="stockitem"></pcchannel_other_imglist_item>
        </div>
    </div>
</template>

<script>
    import  pcchannel_other_imglist_item from '../channelother/pcchannel_other_imglist_item.vue'
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meituba = require('../meituba');
    module.exports = {
        created:function(){
            console.log('title=='+this.mainitem.title+';more=='+this.mainitem.more);
        },
        components: {
            pcchannel_other_imglist_item,
        },
        props: {
            mainitem: {
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
        flex: 1;
        padding: 5;
        background-color: #1592e5;
        border-radius: 5;
    }

    .txt{
        font-size:30;
        flex: 1;
        color: #fff;
    }
</style>