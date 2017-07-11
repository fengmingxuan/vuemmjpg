<template>
    <div style="margin: 5px;flex-direction: column;">
        <div class="news-content" @click="todetail(tpicNitem.href,tpicNitem.title)">
            <text class="txt">{{tpicNitem.title}}</text>
        </div>
        <div style="background-color: #1592E5;height: 50px;"></div>
        <div v-for="stockitem in totagitem(tpicNitem)">
            <pctaglist_item :stockitem="stockitem"></pctaglist_item>
        </div>
    </div>
</template>

<script>
    import  pctaglist_item from '../channelimg/pctaglist_item.vue'
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meituba = require('../meituba');
    module.exports = {
        created:function(){
        },
        components: {
            pctaglist_item,

        },
        props: {
            tpicNitem: {
                type: Object
            }
        },

        methods:{
            totagitem:function (json) {
                var stockArray=[];
                if (json.list) {
                    if (json.list && json.list.length > 0) {
                        for (var i = 0; i < json.list.length; i+=4) {
                            var tag = json.list[i];
                            var tag2 = json.list[i+1];
                            if(tag2==undefined){
                                tag2 = {

                                };
                            }
                            var tag3 = json.list[i+2];
                            if(tag3==undefined){
                                tag3 = {

                                };
                            }
                            var tag4 = json.list[i+3];
                            if(tag4==undefined){
                                tag4 = {

                                };
                            }
                            var item={
                                href:tag.href,
                                alt:tag.alt,
                                id:i,
                                backgroundColor:'#f60',
                                href2:tag2.href,
                                alt2:tag2.alt,
                                id2:i+1,
                                backgroundColor2:'#09f',
                                href3:tag3.href,
                                alt3:tag3.alt,
                                id3:i+2,
                                backgroundColor3:'#7a7a7a',
                                href4:tag4.href,
                                alt4:tag4.alt,
                                id4:i+3,
                                backgroundColor4:'#393',
                            };
                           stockArray.push(item);
                        }
                    }
                }
                return stockArray;
            },
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