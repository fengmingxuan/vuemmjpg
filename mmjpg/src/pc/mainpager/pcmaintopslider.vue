<template>
    <div>
        <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src"></image>
            </div>
        </slider>
    </div>
</template>

<style scoped>
    .image {
        width: 700px;
        height: 700px;
    }
    .slider {
        margin-top: 25px;
        margin-left: 25px;
        width: 700px;
        height: 700px;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
    }
    .frame {
        width: 700px;
        height: 700px;
        position: relative;
    }
</style>

<script>
    import  pc_main_item_v from '../main/pc_main_item_v.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexJsoupModule = weex.requireModule('weexJsoupModule');
    var mmjpg = require('../../mmjpg');
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
            refresh:function(){
                var self = this;
                var url = self.taghref;
                weexJsoupModule.pcmaintoppage(url,function(e){
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