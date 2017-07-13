<template>
    <div style="margin: 5px;flex-direction: column;">
        <div class="news-content">
            <image class="img" :src="tpicNitem.more" @click="toweb(tpicNitem.href,tpicNitem.title)"></image>
            <div style="flex-direction:column;">
                <text class="txt"  @click="todetail(tpicNitem.href,tpicNitem.title)">{{tpicNitem.title}}</text>
                <div v-for="stockitem in tpicNitem.list">
                    <mmenubox_nav_item :stockitem="stockitem"></mmenubox_nav_item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  mmenubox_nav_item from '../mmenubox/mmenubox_nav_item.vue'
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meituba = require('../meituba');
    module.exports = {
        created:function(){
        },
        components: {
            mmenubox_nav_item,

        },
        props: {
            tpicNitem: {
                type: Object
            }
        },

        methods:{
            todetail:function (e,alt) {
//                weexEventModule.startWebViewActivity(e);
                var name = "mchannel/mmain_channel_imglist";
//                if(e.indexOf('.shtml')!=-1){
//                    name = "content/pccontentlist";
//                }else{
//                    name = "search/pcimglist_notitlebar_autorefresh";
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
            },
            toweb:function (e,alt) {
                weexEventModule.startWebViewActivity(e);

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
        font-size:35;
        color: #1592E5;
        padding: 20;
        flex: 1;
    }
    .img{
        width: 450;
        height: 500;
        border-radius: 5;
    }
</style>