<template>
    <div>
        <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src" @click="todetail(img.href)"></image>
            </div>
        </slider>
    </div>
</template>

<style scoped>
    .image {
        width: 750px;
        height: 500px;
    }
    .slider {
        width: 750px;
        height: 500px;
    }
    .frame {
        width: 750px;
        height: 500px;
        position: relative;
    }
</style>

<script>
    import  pc_main_item_v from '../main/pc_main_item_v.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexJsoupModule = weex.requireModule('weexJsoupModule');
    var mmjpg = require('../../mmjpg');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default {
        data () {
            return {
                imageList: [],
                taghref:mmjpg.getm_mmjpg(),
            }
        },
        created: function(){
            var self = this;
            self.refresh();
        },
        methods:{
            todetail:function (e) {
                weexEventModule.startWebViewActivity(e);
            },
            refresh:function(){
                var self = this;
                var url = self.taghref;
                weexJsoupModule.pcmaintoppage(url,function(e){
                    var json = JSON.parse(e);
                    self.imageList.splice(0, self.imageList.length);
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pcmaintoppage"
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else {
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pcmaintoppage"
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
            }

        }
    }
</script>