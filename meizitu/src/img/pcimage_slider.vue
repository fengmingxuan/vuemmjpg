<template>
    <div>
        <!--<navbar_v :title="title"></navbar_v>-->
        <slider class="slider" interval="3000" auto-play="false">
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src" @click="todetail(img.href,img.alt)"></image>
                <text class="txt">{{img.alt}}</text>
            </div>
        </slider>
    </div>
</template>

<style scoped>
    .image {
        width: 750px;
        margin:1;
        height: 1250;
    }
    .slider {
        flex: 1;
    }
    .frame {
        width: 750px;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }
    .txt{
        font-size:30;
        margin:1;
    }
</style>

<script>
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
    var meizitu = require('../meizitu');
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    export default {
        components: {

        },
        props: ['taghref'],
        data () {
            return {
                imageList: [],
                taghref:meizitu.getpc_image(),
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
            todetail:function (e,alt) {
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
            refresh:function(){
                var self = this;
                if(self.taghref==undefined){
                    self.taghref = meizitu.getpc_image();
                }
                var url = self.taghref;
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeizituJsoupModule.pcimagelist(params,function(e){
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