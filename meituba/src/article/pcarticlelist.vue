<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <navbar_v :title="title"></navbar_v>
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <cell>
                <pcarticlenew_slider :taghref="taghref"></pcarticlenew_slider>
            </cell>
            <cell v-for="stockitem in stockArray">
                <pcarticlelist_item :stockitem="stockitem"></pcarticlelist_item>
            </cell>
            <cell>
                <pcarticle_showtag :taghref="taghref"></pcarticle_showtag>
            </cell>
            <cell>
                <pcarticle_foot :taghref="taghref"></pcarticle_foot>
            </cell>
            <cell>
                <pcarticlenewlike :taghref="taghref"></pcarticlenewlike>
            </cell>
            <cell>
                <pcarticle_channel_pager :taghref="taghref"></pcarticle_channel_pager>
            </cell>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator_loading">加载更多...</text>
            </loading>
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pcarticlelist_item from '../article/pcarticlelist_item.vue'
    import  pcarticlenew_slider from '../article/pcarticlenew_slider.vue'
    import  pcarticle_showtag from '../article/pcarticle_showtag.vue'
    import  pcarticle_foot from '../article/pcarticle_foot.vue'
    import  pcarticle_channel_pager from '../article/pcarticle_channel_pager.vue'
    import  pcarticlenewlike from '../article/pcarticlenewlike.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
    var meituba = require('../meituba');
    var storage = weex.requireModule('storage');
    var utils = require('../common/utils');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            pcarticlelist_item,
            navbar_v,
             pcarticlenew_slider,
            pcarticle_showtag,
            pcarticle_foot,
            pcarticle_channel_pager,
            pcarticlenewlike

        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meituba.getpc_article(),
                pageNo: 1,
                refreshing: false,
                showLoading: 'hide',
                title:"唯美意境",
                isFirst:1,
                 
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
//                self.refresh();
//            });
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
                self.isFirst=0;
                if(self.taghref==undefined){
                    self.taghref = meituba.getpc_article();
                }
                var url = self.taghref;
                if(self.pageNo==1){
                    url = self.taghref;
                }else{
                    //index_2.shtml
                    var href = self.taghref.replaceAllStr(".html","");
                    url = href+"_"+self.pageNo+".html";
                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeitubaJsoupModule.pcarticlelist(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pcarticlelist"+self.pageNo
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else {
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pcarticlelist"+self.pageNo
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