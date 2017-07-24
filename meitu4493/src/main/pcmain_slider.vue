<template>
    <div style="flex: 1;flex-direction: column">
        <!--<navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>-->
        <slider class="slider" interval="3000" auto-play="false">
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src" @click="todetail(img.href,img.title)"></image>
                <text class="txt">{{img.title}}</text>
            </div>
        </slider>
    </div>
</template>

<style scoped>
    .image {
        width: 750px;
        margin:1;
        height: 440px;
    }
    .slider {

    }
    .frame {
        width: 750px;
        flex-direction: column;
    }
    .txt{
        font-size:30;
        margin:1;
    }
</style>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
    var meitu = require('../meitu');
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')

    export default {
        components: {
            navbar_v
        },
        props: ['taghref'],
        data () {
            return {
                imageList: [],
                taghref:meitu.getpc_meitu(),
                pageNo:1,
                title:"",
                shown:false,
                leftsrc:'./images/back.png',
            }
        },
        created: function(){
            var self = this;
            var ctaghref = self.$getConfig().taghref;
            if(ctaghref!=undefined){
                self.taghref = ctaghref;
            }

            var ctitle = self.$getConfig().title;
            if(ctitle!=undefined){
                self.title = ctitle;
            }
            self.refresh();

//            var paramsEvent={
//                event:"8000",
//                label:"看图详细"
//            };
//            weexEventModule.onEvent(paramsEvent,event => {
//
//            });
        },
        methods:{
            todetail:function (e,alt) {
//                var paramsEvent={
//                    event:"9000",
//                    label:"妹子图web"
//                };
//                weexEventModule.onEvent(paramsEvent,event => {
//
//                });
//                weexEventModule.startWebViewActivity(e);
                var name = "mingxing/pcmingxing_imglist";
//                if(e.indexOf('m.meituba.com')!=-1){
//                    name = "marticle/marticlelist";
//                }else{
//                    name = "article/pcarticlelist";
//                }
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
            },
            refresh:function(){
                var self = this;
                if(self.taghref==undefined){
                    self.taghref = meitu.getpc_meitu();
                }
                var url = self.taghref;
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeiu4493JsoupModule.pcmingxingmainpager(params,function(e){
                    var json = JSON.parse(e);
                    self.imageList.splice(0, self.imageList.length);
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pcmingxingmainpager",
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else{
                            console.log('异常==获取缓存==');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pcmingxingmainpager"
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
                    self.title = tag.title;
                    self.imageList.push(tag);
                }
            },

        }
    }
</script>