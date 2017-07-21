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
            <cell>
                <pcimage_bottomtag_hlist :taghref="taghref"></pcimage_bottomtag_hlist>
            </cell>
            <cell v-for="stockitem in stockArray">
                <pcimage_main_imglist_item :stockitem="stockitem"></pcimage_main_imglist_item>
            </cell>
            <cell>
                <pcimageleft_imglist :taghref="taghref"></pcimageleft_imglist>
            </cell>
            <cell>
                <pcimageright_imglist :taghref="taghref"></pcimageright_imglist>
            </cell>
            <cell>
                <pcimage_paihang :taghref="taghref"></pcimage_paihang>
            </cell>
            <cell>
                <pcimagehot_imglist :taghref="taghref"></pcimagehot_imglist>
            </cell>
            <cell>
                <pcimagejingxuan_imglist :taghref="taghref"></pcimagejingxuan_imglist>
            </cell>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator_loading">加载更多...</text>
            </loading>
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pcimage_main_imglist_item from '../image/pcimage_main_imglist_item.vue'
    import  pcimage_bottomtag_hlist from '../image/pcimage_bottomtag_hlist.vue'
    import  pcimageleft_imglist from '../image/pcimageleft_imglist.vue'
    import  pcimageright_imglist from '../image/pcimageright_imglist.vue'
    import  pcimage_paihang from '../image/pcimage_paihang.vue'
    import  pcimagehot_imglist from '../image/pcimagehot_imglist.vue'
    import  pcimagejingxuan_imglist from '../image/pcimagejingxuan_imglist.vue'
//    import  pcinterest_hlist from '../childnav/pcinterest_hlist.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
    var meitu = require('../meitu');
    var storage = weex.requireModule('storage');
    var utils = require('../common/utils');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            pcimage_main_imglist_item,
            navbar_v,
            pcimage_bottomtag_hlist,
            pcimageleft_imglist,
            pcimageright_imglist,
            pcimage_paihang,
            pcimagehot_imglist,
            pcimagejingxuan_imglist

        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meitu.getpc_xingganmote_image(),
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
                    self.taghref = meitu.getpc_xingganmote_image();
                }
                var url = self.taghref;
                if(self.pageNo==1){
                    url = self.taghref;
                }else{
                    url = self.taghref.replaceAllStr("1.htm","")+self.pageNo+".htm";
                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeiu4493JsoupModule.pcpicsboxcenter(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pcpicsboxcenter"+self.pageNo,
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else{
                            console.log('异常==获取缓存==');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pcpicsboxcenter"+self.pageNo
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
                    var pageNo = self.pageNo;
                    tag.pageNo = pageNo;
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