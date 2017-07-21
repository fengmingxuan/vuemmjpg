<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <!--<navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>-->
        <!--<list class="list"  loadmoreoffset="10">-->
            <refresh class="refresh" @refresh="onrefresh" @click="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <!--<cell>-->
                <!--<pcinterest_hlist :taghref="taghref"></pcinterest_hlist>-->
            <!--</cell>-->
            <div v-for="stockitem in stockArray">
                <pcpic_imglist_item :stockitem="stockitem"></pcpic_imglist_item>
            </div>
            <!--<cell>-->
                <!--<pcrecommend :taghref="taghref"></pcrecommend>-->
            <!--</cell>-->
            <loading class="loading" @loading="onloading" @click="onloading" :display="showLoading">
                <text class="indicator_loading">加载更多...</text>
            </loading>
        <!--</list>-->
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pcpic_imglist_item from '../childnav/pcpic_imglist_item.vue'
    import  pcinterest_hlist from '../childnav/pcinterest_hlist.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
    var meitu = require('../meitu');
    var storage = weex.requireModule('storage');
    var utils = require('../common/utils');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            pcpic_imglist_item,
            navbar_v,
            pcinterest_hlist

        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meitu.getpc_star(),
                pageNo: 1,
                refreshing: false,
                showLoading: 'hide',
                title:"御姐系列",
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
//            self.refresh();
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
            autoRefresh(){
                console.log('autoRefresh');
                var self = this;
//                storage.getItem('taghref',function(s){
//                    console.log('get taghref result:'+JSON.stringify(s));
//                    var staghref = s.data;
//                    if(staghref!=undefined){
//                        self.taghref = staghref;
//                    }
//                    console.log('taghref=='+self.taghref);
                    self.refresh();
//                });
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
                    self.taghref = meitu.getpc_star();
                }
                var url = self.taghref;
                if(self.pageNo==1){
                    url = self.taghref;
                }else{
                    //https://www.4493.com/star/yujiekong/index-hot-1.htm
                    //https://www.4493.com/star/yujiekong/index-hot-2.htm
                    //https://www.4493.com/star/yujiekong/
                    //https://www.4493.com/star/yujiekong/index-1.htm
                    if(self.taghref.indexOf("index-hot-")!=-1){
                        url = self.taghref.replaceAllStr("1.htm","")+ self.pageNo+".htm";
                    }else{
                        url = self.taghref+ "index-"+self.pageNo+".htm";
                    }

                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeiu4493JsoupModule.pcpiclist(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pcpiclist-scroll"+self.pageNo,
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else{
                            console.log('异常==获取缓存==');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pcpiclist-scroll"+self.pageNo,
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
//                                self.pagenumbers = tag.pagenumbers;
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