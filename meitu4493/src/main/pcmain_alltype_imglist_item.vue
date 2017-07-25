<template>
    <div style="flex-direction: row;flex: 1;margin: 5px;">
        <div class="news-content" @click="todetail(tpicNitem.href,tpicNitem.title)">
            <text class="txt">{{tpicNitem.title}}</text>
            <div v-for="stockitem in toitem(tpicNitem)">
                <pcmain_alltype_imglist_subitem :stockitem="stockitem"></pcmain_alltype_imglist_subitem>
            </div>
        </div>

    </div>
</template>

<script>
    import  pcmain_alltype_imglist_subitem from '../main/pcmain_alltype_imglist_subitem.vue'
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meitu = require('../meitu');
    module.exports = {
        created:function(){
        },
        components: {
            pcmain_alltype_imglist_subitem,
        },
        props: {
            tpicNitem: {
                type: Object
            }
        },

        methods:{
            toitem(json){
                var stockArray=[];
                if (json.list) {
                    if (json.list && json.list.length > 0) {
                        for (var i = 0; i < json.list.length; i+=2) {
                            var tag = json.list[i];
                            var tag2 = json.list[i+1];
                            if(tag2==undefined){
                                tag2={
                                    href:"",
                                    alt:"",
                                    src:"",
                                    other:"",
                                    title:"",
                                };
                            }

                            var item={
                                id:json.id,
                                href:tag.href,
                                alt:tag.title,
                                src:tag.src,
                                other:tag.other,
                                title:tag.title,
                                showimg:true,
                                href2:tag2.href,
                                alt2:tag2.title,
                                src2:tag2.src,
                                other2:tag2.other,
                                title2:tag2.title,
                                showimg2:true,
                                id2:json.id,
                            };
                            if(tag.src==undefined || tag.src==''){
                                item.showimg = false;
                            }else{
                                item.showimg = true;
                            }

                            if(tag2.src==undefined || tag2.src==''){
                                item.showimg2 = false;
                            }else{
                                item.showimg2 = true;
                            }
                            stockArray.push(item);
                        }
                    }
                }
                return stockArray;
            },
            getImgUrl: function (url) {
                return meitu.getImageUrl(url);
            },
            todetail:function (e,alt) {
                console.log('main list==='+e)
                var name = "mingxing/pcmingxing_imglist";
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
                });
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
    }
    .img{
        height: 440;
        border-radius: 5;
    }
    .txt{
        font-size:35;
        padding: 5;
        flex: 1;
        color: #cc3399;
    }
    .txt:active{
        font-size:22;
        flex: 1;
        padding: 5;
        color: #d42591;
    }
    .txt2{
        font-size:22;
        flex: 1;
    }
    .icon{
        width: 30;
        height: 30;
    }
</style>