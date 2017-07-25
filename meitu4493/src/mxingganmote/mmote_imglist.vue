<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <!--<cell>-->
                <!--<pcinterest_hlist :taghref="taghref"></pcinterest_hlist>-->
            <!--</cell>-->
            <cell v-for="stockitem in stockArray">
                <mmote_imglist_item :stockitem="stockitem"></mmote_imglist_item>
            </cell>
            <!--<cell>-->
                <!--<pcrecommend :taghref="taghref"></pcrecommend>-->
            <!--</cell>-->
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator_loading">加载更多...</text>
            </loading>
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  mmote_imglist_item from '../mxingganmote/mmote_imglist_item.vue'
    import  pcinterest_hlist from '../childnav/pcinterest_hlist.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
    var meitu = require('../meitu');
    var utils = require('../common/utils');
    var storage = weex.requireModule('storage');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            mmote_imglist_item,
            navbar_v,
            pcinterest_hlist

        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meitu.getm_xingganmote(),
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
                    self.taghref = meitu.getm_xingganmote();
                }
                var url = self.taghref;
                //https://m.4493.com/akcms_ajax3.php?cate=1&page=2&pagenum=16&pagesize=16
                if(self.pageNo==1){
                    url = self.taghref;
                }else{
                    url = "https://m.4493.com/akcms_ajax3.php?cate=1&page="+self.pageNo+"&pagenum=16&pagesize=16";

//                    "id":"126815",
//                        "category":"1",
//                        "title":"%E6%B8%85%E7%BA%AF%E6%80%A7%E6%84%9F%E7%BE%8E%E5%A5%B3%E6%A8%A1%E7%89%B9%E7%BB%AE%E6%A2%A6Cherish%E6%B5%91%E5%9C%86%E7%BF%98%E8%87%80%E5%AD%A6%E7%94%9F%E5%88%B6%E6%9C%8D%E6%B9%BF%E8%BA%AB%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F",
//                        "picture":"uploads/previews/2017/07/0-zV3squu.jpg",
//                        "page":null

                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeiu4493JsoupModule.mxingganmote(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "mxingganmote"+self.pageNo
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else{
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "mxingganmote"+self.pageNo
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
                var catepath = new Array();//定义栏目路劲
                catepath[1] = 'xingganmote';
                catepath[2] = 'mingxingxiezhen';
                catepath[3] = 'weimeixiezhen';
                catepath[4] = 'wangluomeinv';
                catepath[5] = 'tiyumeinv';
                catepath[6] = 'dongmanmeinv';
                catepath[7] = 'motemeinv';
                catepath[8] = 'siwameitui';
                catepath[9] = 'yule';
                catepath[10] = 'gaoqingmeinv';
                catepath[15] = 'nanxing';

                for (var i = 0; i < json.list.length; i+=2) {
                    var tag = json.list[i];
                    var tag2 = json.list[i+1];
                    if(tag2==undefined){
                        tag2={};
                    }
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
                    if(tag.picture!=undefined){
                        item.src="http://img.1985t.com/"+tag.picture;
                        item.href="https://m.4493.com/"+catepath[tag.category]+"/"+tag.id+".html";
                    }
                    if(tag2.picture!=undefined){
                        item.src2="http://img.1985t.com/"+tag2.picture;
                        item.href2="https://m.4493.com/"+catepath[tag2.category]+"/"+tag2.id+".html";
                    }
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