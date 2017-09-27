<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <!--<cell>-->
                <!--<pcnav_topgrid :taghref="taghref" :pageNo="0"></pcnav_topgrid>-->
            <!--</cell>-->
            <cell v-for="stockitem in stockArray">
                <pc_imagelist_item :stockitem="stockitem"></pc_imagelist_item>
            </cell>
            <cell>
                <pc_image_hot_list :taghref="taghref"></pc_image_hot_list>
            </cell>
            <cell>
                <pc_image_newest_list :taghref="taghref"></pc_image_newest_list>
            </cell>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator_loading">加载更多...</text>
            </loading>
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pc_imagelist_item from './pc_imagelist_item.vue'
    import  pc_image_hot_list from '../imglist/pc_image_hot_list.vue'
    import  pc_image_newest_list from '../imglist/pc_image_newest_list.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexDuoduoJsoupModule = weex.requireModule('weexDuoduoJsoupModule');
    var duoduo = require('../duoduo');
    var utils = require('../common/utils');
    var storage = weex.requireModule('storage');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            pc_imagelist_item,
            navbar_v,
            pc_image_hot_list,
            pc_image_newest_list

        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:duoduo.getpc_image(),
                pageNo: 1,
                refreshing: false,
                showLoading: 'hide',
                title:"唯美图片",
                isFirst:1,
                shown:false,
                leftsrc:'./images/back.png',
                pagenumbers:''

                 
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
                    self.taghref = duoduo.getpc_image();
                }
                var url = self.taghref;
                if(self.pageNo==1){
                    url = self.taghref;
                }else{
                    url = self.taghref.replaceAllStr('.html','_') + self.pageNo+".html";
                }
                console.log('url==='+url);
                var params = {
                    className:"com.open.mmjpg.jsoup.pc.DuoduoJsoupService",
                    methodName:"pcimagelist",
                    parameterTypes:['String','int'],
                    args:[url,self.pageNo]
                };
                weexDuoduoJsoupModule.jsoupModule(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pcimagelist"+self.pageNo,
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else{
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pcimagelist"+self.pageNo
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
                    var item={
                        href:tag.href,
                        alt:tag.alt,
                        src:tag.src,
                        other:tag.other,
                        title:tag.title,
                        category:tag.category,
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