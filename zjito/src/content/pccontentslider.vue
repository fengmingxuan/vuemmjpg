<template>
    <div>
        <!--<navbar_v :title="title"></navbar_v>-->
        <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="img in imageList">
                <text class="txt">{{img.other}}</text>
                <text class="txt">{{img.title}}</text>
                <text class="txt">{{img.alt}}</text>
                <image class="image" resize="cover" :src="img.src" @click="todetail(img.href)"></image>
            </div>
        </slider>
    </div>
</template>

<style scoped>
    .image {
        width: 750px;
        height: 1100px;
        margin:20;
    }
    .slider {
        width: 750px;
    }
    .frame {
        width: 750px;
        flex-direction: column;
        height: 1300px;
        justify-content: center;
        align-items: center;
        background-color: #282c34;
        flex: 1;
    }
    .txt{
        margin-top: 10;
        font-size:30;
        color: #ffffff;
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
                taghref:zjito.getpc_content(),
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
                weexZjitoJsoupModule.pccontentpager(params,function(e){
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