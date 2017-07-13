<template>
    <div style="margin: 5px;flex-direction: column;">
        <div class="news-content">
            <div style="flex-direction:column;">
                <text class="txt"  @click="toweb(tpicNitem.href,tpicNitem.title)">{{tpicNitem.title}}</text>
                <div v-for="stockitem in tostock(tpicNitem)">
                    <mtag_sub_item :stockitem="stockitem"></mtag_sub_item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  mtag_sub_item from '../mtags/mtag_sub_item.vue'
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meituba = require('../meituba');
    module.exports = {
        created:function(){
        },
        components: {
            mtag_sub_item,

        },
        props: {
            tpicNitem: {
                type: Object
            }
        },

        methods:{
            toweb:function (e,alt) {
                weexEventModule.startWebViewActivity(e);

            },
            tostock:function (json) {
                var self = this;
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
                                navid:json.navid,
                                backgroundColor:'#f60',
                                href2:tag2.href,
                                alt2:tag2.alt,
                                id2:i+1,
                                navid2:json.navid,
                                backgroundColor2:'#09f',
                                href3:tag3.href,
                                alt3:tag3.alt,
                                id3:i+2,
                                navid3:json.navid,
                                backgroundColor3:'#7a7a7a',
                                href4:tag4.href,
                                alt4:tag4.alt,
                                id4:i+3,
                                navid4:json.navid,
                                backgroundColor4:'#393',
                            };
                            stockArray.push(item);
                        }
                    }
                }
                return stockArray;
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