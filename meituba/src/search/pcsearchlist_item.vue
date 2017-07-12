<template>
    <div style="margin: 5px;">
        <div class="news-content" @click="todetail(tpicNitem.href,tpicNitem.title)">
            <text class="txt">{{tpicNitem.title}}</text>
            <text class="txt2">{{tpicNitem.alt}}</text>
            <text class="txt2">{{tpicNitem.other}}</text>
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
        components: {

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
        flex-direction:column;
        padding: 5;
        background-color: #fff;
    }
    .txt{
        font-size:35px;
        color: #1592E5;
        flex: 1;
        padding: 10;
    }
    .txt2{
        font-size:30px;
        padding: 10;
        flex: 1;
    }
</style>