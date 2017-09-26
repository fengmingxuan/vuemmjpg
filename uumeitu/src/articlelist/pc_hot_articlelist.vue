<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <!--<navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>-->
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>

            <cell v-for="stockitem in stockArray">
                <pcnav_articlelist_item :stockitem="stockitem"></pcnav_articlelist_item>
            </cell>

            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
                <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pcnav_articlelist_item from './pcnav_articlelist_item.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexUUMeiuJsoupModule = weex.requireModule('weexUUMeiuJsoupModule');
    var uumeitu = require('../uumeitu');
    var utils = require('../common/utils');
    var storage = weex.requireModule('storage');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            pcnav_articlelist_item,
            navbar_v,
        },
        props: ['taghref','pageNo'],
        data(){
            return{
                stockArray:[],
                taghref:uumeitu.getpc_image(),
                pageNo: 0,
                refreshing: false,
                showLoading: 'hide',
                title:"清纯美女",
                isFirst:1,
                shown:false,
                leftsrc:'./images/back.png',
            }
        },
        created: function(){
            var self = this;
            if(self.pageNo==1){
                setTimeout(() => {
                    self.refresh();
                }, 2000)
            }else{
                self.refresh();
            }
//            storage.getItem('taghref',function(s){
//                console.log('get taghref result:'+JSON.stringify(s));
//                var staghref = s.data;
//                if(staghref!=undefined){
//                    self.taghref = staghref;
//                }
//                console.log('taghref=='+self.taghref);
//
//                self.refresh();
//
//            });
        },
        mounted: function() {
            var self = this;
        },
        methods:{
            autoRefresh(event){
                var self = this;
                storage.getItem('taghref',function(s){
                    console.log('get taghref result:'+JSON.stringify(s));
                    var staghref = s.data;
                    if(staghref!=undefined){
                        self.taghref = staghref;
                    }
                    console.log('taghref=='+self.taghref);
                    self.refresh();
                });
            },
            onloading (event) {
                this.showLoading = 'show'
                setTimeout(() => {
                    this.showLoading = 'hide'
                }, 2000)
                this.refresh();
            },

            onpullingdown (event) {
            },
            onrefresh (event) {
                this.refreshing = true;
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
                this.refresh();
            },
            refresh:function(){
                var self = this;
                self.isFirst=0;
                if(self.taghref==undefined){
                    self.taghref = uumeitu.getpc_image();
                }
                if(self.pageNo==undefined){
                    self.pageNo = 0;
                }
                var url = self.taghref;

                console.log('url==='+url);
                var params = {
                    className:"com.open.mmjpg.jsoup.pc.UUMeituJsoupService",
                    methodName:"pchotarticlelist",
                    parameterTypes:['String','int'],
                    args:[url,self.pageNo]
                };
                weexUUMeiuJsoupModule.jsoupModule(params,function(e){
                    var json = JSON.parse(e);
                    self.stockArray.splice(0, self.stockArray.length);
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pchotarticlelist"+self.pageNo,
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else{
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pchotarticlelist"+self.pageNo
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
                for (var i = 0; i < json.list.length; i+=2) {
                    var tag = json.list[i];
                    var tag2 = json.list[i+1];
                    var item={
                        href:tag.href,
                        alt:tag.alt,
                        src:tag.src,
                        other:tag.other,
                        title:tag.title,
                        href2:tag2.href,
                        alt2:tag2.alt,
                        src2:tag2.src,
                        other2:tag2.other,
                        title2:tag2.title,
                    };
                    self.stockArray.push(item);
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