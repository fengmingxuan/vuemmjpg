<template>
    <div style="height: 600px">
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
        height: 500px;
        margin:10;
    }
    .slider {
        width: 750px;
    }
    .frame {
        width: 750px;
        flex-direction: column;
        align-content: center;
        align-items: center;
        height: 600px;
    }
    .txt{
        font-size:30;
        margin:10;
    }
</style>

<script>
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
    var meizitu = require('../meizitu');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default {
        components: {

        },
        props: ['taghref'],
        data () {
            return {
                imageList: [],
                taghref:meizitu.getpc_meizitu(),
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
                    self.taghref = meizitu.getpc_meizitu();
                }
                var url = self.taghref;
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeizituJsoupModule.pcpicnew(params,function(e){
                    var json = JSON.parse(e);
                    self.imageList.splice(0, self.imageList.length);
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i++) {
                                var tag = json.list[i];
                                self.imageList.push(tag);
                            }
                        }
                    }

                });
            }

        }
    }
</script>