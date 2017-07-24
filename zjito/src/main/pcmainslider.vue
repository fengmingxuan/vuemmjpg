<template>
    <div>
        <!--<navbar_v :title="title"></navbar_v>-->
        <slider class="slider" interval="3000" auto-play="true">
            <indicator class="indicator"></indicator>
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src" @click="todetail(img.href)"></image>
            </div>
        </slider>

    </div>
</template>

<style scoped>
    .image {
        width: 750px;
        height: 550px;
    }
    .slider {
        width: 750px;
        height: 550px;
    }
    .frame {
        width: 750px;
        flex-direction: column;
        height: 550px;
    }
    .txt{
        margin-top: 10;
        font-size:30;
        color: #ffffff;
    }
    .indicator {
        position: absolute;
        width: 750;
        height: 550;
        top: 250;
        left: 10;
        itemColor: #dddddd;
        itemSelectedColor: rgb(40, 96, 144);
    }

</style>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
    var zjito = require('../zjito');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default {
        components: {
            navbar_v,

        },
        data () {
            return {
                imageList: [],
                taghref:zjito.getpc_zjito(),
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
                var url = self.taghref;
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexZjitoJsoupModule.pcmainslider(url,function(e){
                    var json = JSON.parse(e);
                    self.imageList.splice(0, self.imageList.length);
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pcmainslider"
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else {
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pcmainslider"
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