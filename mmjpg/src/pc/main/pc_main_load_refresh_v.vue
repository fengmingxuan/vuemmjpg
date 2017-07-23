<template>
    <div>
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <cell>
                <pcmaintopslider></pcmaintopslider>
            </cell>
            <cell v-for="stockitem in stockArray">
                <pc_main_item_v :stockitem="stockitem"></pc_main_item_v>
            </cell>
            <cell>
                <pcmainhotlist_v></pcmainhotlist_v>
            </cell>
            <cell>
                <pcmainlikelist_v></pcmainlikelist_v>
            </cell>
            <cell>
                <pcmainmmlist_v></pcmainmmlist_v>
            </cell>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator_loading">加载更多...</text>
            </loading>
        </list>
    </div>
</template>

<script>
    import  pc_main_item_v from '../main/pc_main_item_v.vue'
    import  pcmaintopslider from '../mainpager/pcmaintopslider.vue'
    import pcmainhotlist_v from '../mainhot/pcmainhotlist_v.vue'
    import pcmainlikelist_v from '../mainlike/pcmainlikelist_v.vue'
    import pcmainmmlist_v from '../mainmm/pcmainmmlist_v.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexJsoupModule = weex.requireModule('weexJsoupModule');
    var mmjpg = require('../../mmjpg');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            pc_main_item_v,
            pcmaintopslider,
            pcmainhotlist_v,
            pcmainlikelist_v,
            pcmainmmlist_v
        },

        data(){
            return{
                stockArray:[],
                taghref:mmjpg.getm_mmjpg(),
                pageNo: 1,
                refreshing: false,
                showLoading: 'hide',
            }
        },
        created: function(){
            var self = this;
            self.refresh();

        },
        methods:{
            onloading (event) {
                this.showLoading = 'show'
                this.pageNo = this.pageNo+1;
                setTimeout(() => {
                    this.showLoading = 'hide'
                }, 2000)
                this.refresh();
            },
            fetch(event){
                this.pageNo = this.pageNo+1;
                this.refresh();
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
                if(self.pageNo==1){
                    url = self.taghref;
                }else{
                    url = self.taghref+"home/"+self.pageNo;
                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexJsoupModule.pcmainlist(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pcmainlist"+self.pageNo
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else {
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pcmainlist"+self.pageNo
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

            },

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
    .loading {
        justify-content: center;
    }
    .indicator_loading {
        color: #888888;
        font-size: 42px;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
    }
</style>