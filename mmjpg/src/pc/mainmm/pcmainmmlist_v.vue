<template>
    <div>
        <list class="list" @loadmore="fetch" loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <cell v-for="stockitem in stockArray">
                <pcmainlikelistitem_v :stockitem="stockitem"></pcmainlikelistitem_v>
            </cell>
        </list>
    </div>
</template>

<script>
    import  pcmainlikelistitem_v from '../mainlike/pcmainlikelistitem_v.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexJsoupModule = weex.requireModule('weexJsoupModule');
    var mmjpg = require('../../mmjpg');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            pcmainlikelistitem_v
        },

        data(){
            return{
                stockArray:[],
                taghref:mmjpg.getm_mmjpg(),
                pageNo: 1,
                refreshing: false,
            }
        },
        created: function(){
            var self = this;
            self.refresh();

        },
        methods:{
            fetch(event){
//                this.pageNo = this.pageNo+1;
//                this.refresh();
            },
            onpullingdown (event) {
            },
            onrefresh (event) {
                this.refreshing = true;
                this.pageNo = 1;
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
                this.refresh();
            },
            refresh:function(){
                var self = this;
                var url = self.taghref;
                weexJsoupModule.pcmainmmlist(url,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pcmainmmlist"
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else {
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pcmainmmlist"
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
                    self.stockArray.push(tag);
                }
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
    .indicator {
        color: #888888;
        font-size: 42px;
        text-align: center;
    }

</style>