<template>
    <div style="height: 280px">
        <navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>
        <div style="flex: 1;align-content: flex-start;align-items: flex-start">
            <text style="font-size: 28;margin-top: 30;margin-left: 20">{{title}}</text>
        </div>
        <hlist  style="flex-direction: row;width: 750px;height: 100px;flex: 1"  loadmoreoffset="10" scroll-direction="horizontal">
            <!--<refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">-->
            <!--<text class="indicator">下拉刷新...</text>-->
            <!--</refresh>-->

            <cell v-for="stockitem in stockArray">
                <pctags_hlist_item :stockitem="stockitem"></pctags_hlist_item>
            </cell>

            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
            <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </hlist>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pctags_hlist_item from '../main/pctags_hlist_item.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
    var meizitu = require('../meizitu');
    var storage = weex.requireModule('storage');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            pctags_hlist_item,
            navbar_v,

        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meizitu.getpc_meizitu(),
                pageNo: 0,
                refreshing: false,
                showLoading: 'hide',
                title:"美女分类",
                shown:false,
                leftsrc:'./images/back.png'
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
            console.log('title=='+self.title+';taghref=='+self.taghref)
            self.refresh();
//            storage.getItem('taghref',function(s){
//                console.log('get taghref result:'+JSON.stringify(s));
//                var staghref = s.data;
//                if(staghref!=undefined){
//                    self.taghref = staghref;
//                }
//                console.log('taghref=='+self.taghref);
//                self.refresh();
//            });
//            setTimeout(() => {
//                storage.getItem('taghref',function(s){
//                    console.log('get taghref result:'+JSON.stringify(s));
//                    var staghref = s.data;
//                    if(staghref!=undefined){
//                        self.taghref = staghref;
//                    }
//                    console.log('pre taghref=='+self.taghref);
//                    self.refresh();
//                });
//            }, 2000)
        },
        methods:{
            onloading (event) {
                this.showLoading = 'show'
//                this.pageNo = this.pageNo+1;
                setTimeout(() => {
                    this.showLoading = 'hide'
                }, 2000)
                this.refresh();
            },
            onpullingdown (event) {
            },
            onrefresh (event) {
                this.refreshing = true;
//                this.pageNo = 1;
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
                this.refresh();
            },
            refresh:function(){
                var self = this;
                if(self.taghref==undefined){
                    self.taghref=meizitu.getpc_meizitu();
                }
                var url = self.taghref;
//                if(self.pageNo==1){
//                    url = self.taghref;
//                }else{
//                    url = self.taghref+"?idx="+self.pageNo;
//                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeizituJsoupModule.pctags(params,function(e){
                    var json = JSON.parse(e);
//                    if(self.pageNo==1){
                    self.stockArray.splice(0, self.stockArray.length);
//                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pctags"
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else {
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pctags"
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