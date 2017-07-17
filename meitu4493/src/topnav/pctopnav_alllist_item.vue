<template>
    <div style="margin: 5px;">
        <div class="news-content" @click="todetail(tpicNitem.id,tpicNitem.href,tpicNitem.title)">
            <text class="txt">{{tpicNitem.id}} {{tpicNitem.title}}</text>
        </div>
        <div v-for="stockitem in tostock(tpicNitem)">
            <pctopnav_alllist_subitem :stockitem="stockitem"></pctopnav_alllist_subitem>
        </div>
    </div>
</template>

<script>
    import  pctopnav_alllist_subitem from '../topnav/pctopnav_alllist_subitem.vue'
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meitu = require('../meitu');
    module.exports = {
        created:function(){
        },
        components: {
            pctopnav_alllist_subitem,

        },
        props: {
            tpicNitem: {
                type: Object
            }
        },

        methods:{
            todetail:function (id,e,alt) {
                if(e==undefined){
                    return;
                }

                 weexEventModule.startWebViewActivity(e);
//                var name = "img/pcimage_imglist";
////                if(e.indexOf('m.meituba.com')!=-1){
////                    name = "marticle/marticlelist";
////                }else{
////                    name = "article/pcarticlelist";
////                }
//                var params={
//                    url: meizitu.getDefaultUrl(name),
//                    animated: "true",
//                    options:{
//                        taghref: e,
//                        title:alt
//                    }
//                };
//
//                weexNavigatorModule.push(params, event => {
//                    // modal.toast({ message: 'callback: ' + event })
//                });
            },
            tostock:function (json) {
                var stockArray = [];
                if (json.list) {
                    if (json.list && json.list.length > 0) {
                        for (var i = 0; i < json.list.length; i+=2) {
                            var tag = json.list[i];
                            var tag2 = json.list[i+1];
                            if(tag2==undefined){
                                tag2={

                                };
                            }
                            var item={
                                id:json.id,
                                href:tag.href,
                                alt:tag.alt,
                                src:tag.src,
                                title:tag.title,
                                other:tag.other,
                                href2:tag2.href,
                                alt2:tag2.alt,
                                src2:tag2.src,
                                other2:tag2.other,
                                title2:tag2.title,
                                id2:json.id,
                            };
                            stockArray.push(item);
                        }
                    }
                }
                return stockArray;
            },
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