<template>
    <div style="height: 500px">
        <!--<navbar_v :title="title"></navbar_v>-->
        <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src" @click="todetail(img.href)"></image>
                <text class="txt">{{img.alt}}</text>
            </div>
        </slider>
    </div>
</template>

<style scoped>
    .image {
        width: 730px;
        height: 400px;
        margin:10;
    }
    .slider {
        width: 750px;
    }
    .frame {
        width: 750px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 500px;
    }
    .txt{
        font-size:30;
        margin:10;
    }
</style>

<script>
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
    var meituba = require('../meituba');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default {
        components: {

        },
        props: ['taghref'],
        data () {
            return {
                imageList: [],
                taghref:meituba.getpc_article(),
                pageNo:1,
                title:""
            }
        },
        created: function(){
            var self = this;
            var ctaghref = self.$getConfig().taghref;
            if(ctaghref!=undefined){
                self.taghref = ctaghref;
            }
            self.refresh();
        },
        methods:{
            todetail:function (e) {
                weexEventModule.startWebViewActivity(e);
            },
            refresh:function(){
                var self = this;
                if(self.taghref==undefined){
                    self.taghref = meituba.getpc_article();
                }
                var url = self.taghref;
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeitubaJsoupModule.pcarticlenew(url,function(e){
                    var json = JSON.parse(e);
                    self.imageList.splice(0, self.imageList.length);
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pcarticlenew"
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else {
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pcarticlenew"
                            };
                            weexEventModule.queryCache(paramsCache,function(e){
                                console.log('queryCache=='+e);
                                var json = JSON.parse(e);
                                self.parseJSON(json);
                            });
                        }
                    }

                });
            },
            parseJSON:function (json) {
                var self = this;
                for (var i = 0; i < json.list.length; i++) {
                    var tag = json.list[i];
                    self.imageList.push(tag);
                }
            },

        }
    }
</script>