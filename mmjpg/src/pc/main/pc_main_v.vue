<template>
    <div>
        <list>
            <cell v-for="stockitem in stockArray">
                <pc_main_item_v :stockitem="stockitem"></pc_main_item_v>
            </cell>
        </list>
    </div>
</template>

<script>
    import  pc_main_item_v from '../main/pc_main_item_v.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexJsoupModule = weex.requireModule('weexJsoupModule');
    var mmjpg = require('../../mmjpg');

    export default{
        components: {
            pc_main_item_v
        },

        data(){
            return{
                stockArray:[],
                taghref:mmjpg.getm_mmjpg(),
                pageNo: 1,
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
//                if(self.pageNo==1){
//                    url = self.taghref;
//                }else{
//                    url = self.taghref+"home/"+self.pageNo;
//                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexJsoupModule.pcmainlist(params,function(e){
                    console.log('e==='+e);
                    var json = JSON.parse(e);
                    console.log('json==='+json);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i++) {
                                var tag = json.list[i];
                                self.stockArray.push(tag);
                            }
                        }
                    }


                });
            }

        }

    }
</script>

<style>
    .refresh-view{
        height:100;
        width:750;
        align-items:center;
    }

    .indicator{
        width:60;
        height:60;
        color:#889967;
    }
</style>