<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <!--<cell>-->
                <!--<div style="flex: 1;padding: 10;background-color: #FF5B90">-->
                    <!--<text style="font-size: 28;margin-top: 10;margin-left: 20;color: #fff;padding: 10">一周热图</text>-->
                <!--</div>-->
            <!--</cell>-->

            <cell v-for="stockitem in stockArray">
                <mimage_main_imglist_item :stockitem="stockitem"></mimage_main_imglist_item>
            </cell>
            <cell>
                <mimage_tuijian_imglist :taghref="taghref"></mimage_tuijian_imglist>
            </cell>
            <cell>
                <mimage_xilie_imglist :taghref="taghref"></mimage_xilie_imglist>
            </cell>
            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
                <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  mimage_main_imglist_item from '../mimage/mimage_main_imglist_item.vue'
    import  mimage_tuijian_imglist from '../mimage/mimage_tuijian_imglist.vue'
    import  mimage_xilie_imglist from '../mimage/mimage_xilie_imglist.vue'


    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
    var meitu = require('../meitu');
    var storage = weex.requireModule('storage');
    var utils = require('../common/utils');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            mimage_main_imglist_item,
            navbar_v,
            mimage_tuijian_imglist,
            mimage_xilie_imglist



        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meitu.getm_image(),
                pageNo: 1,
                refreshing: false,
                showLoading: 'hide',
                title:"性感美女",
                isFirst:1,
                shown:false,
                leftsrc:'./images/back.png',
//                pagenumbers:''

                 
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
//
            self.refresh();
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
                 this.pageNo = this.pageNo+1;
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
                this.pageNo = 1;
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
                this.refresh();
            },
            refresh:function(){
                var self = this;
                self.isFirst=0;
                if(self.taghref==undefined){
                    self.taghref = meitu.getm_image();
                }
                var url = self.taghref;
//                if(self.pageNo==1){
//                    url = self.taghref;
//                }else{
//                    url = self.taghref.replaceAllStr("1.htm","")+self.pageNo+".htm";
//                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeiu4493JsoupModule.mimagelist(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "mimagelist",
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else{
                            console.log('异常==获取缓存==');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "mimagelist"
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
                    self.title = tag.title;
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