<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <navbar_v :title="title" :shown="shown" :leftsrc="leftsrc" @nativeback="nativeback"  :shownleft="shownleft"></navbar_v>
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <!--<cell>-->
                <!--<pchotclick :taghref="taghref"></pchotclick>-->
            <!--</cell>-->
            <cell v-for="stockitem in stockArray">
                <mtuijian_imglist_item :stockitem="stockitem"></mtuijian_imglist_item>
            </cell>
            <cell>
                <mtuijian_imglist :taghref="taghref"></mtuijian_imglist>
            </cell>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator_loading">加载更多...</text>
            </loading>
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  mtuijian_imglist_item from '../mmain/mtuijian_imglist_item.vue'
    import  mtuijian_imglist from '../mmain/mtuijian_imglist.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
    var meizitu = require('../meizitu');
    var storage = weex.requireModule('storage');
    var utils = require('../common/utils');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            mtuijian_imglist,
            mtuijian_imglist_item,
            navbar_v,

        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meizitu.getm_meizitu(),
                pageNo: 1,
                refreshing: false,
                showLoading: 'hide',
                title:"妹子图",
                isFirst:1,
                shown:false,
                leftsrc:'./images/menu.png',
                pagenumbers:'',
                url:'',
                shownleft:true

                 
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
            var cleftsrc = self.$getConfig().leftsrc;
            if(cleftsrc!=undefined){
                self.leftsrc = cleftsrc;
            }
            console.log('title=='+self.title+';taghref=='+self.taghref)
//
            self.refresh();

            var paramsEvent={
                event:"6000",
                label:"妹子图"
            };
            weexEventModule.onEvent(paramsEvent,event => {

            });

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
            nativeback:function(){
                var params ={};
                this.$emit('toggle', params);
            },
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
                    self.taghref = meizitu.getm_meizitu();
                }
                var url = self.taghref;
                if(self.pageNo==1){
                    //http://m.meizitu.com
                    //http://m.meizitu.com/a/pure.html
                    //http://m.meizitu.com/tag/suxiong_17_1.html
                    //http://m.meizitu.com/a/xinggan.html
                    url = self.taghref;
                }else if(self.pageNo==2){
                    if(self.pagenumbers==undefined){
                        //http://m.meizitu.com/a/pure.html
                        //http://m.meizitu.com/a/pure_2.html
                        //http://m.meizitu.com/tag/suxiong_17_2.html
                        if(self.taghref.indexOf('tag')!=-1){
                            self.url = url.replaceAllStr('1.html','');
                            url = self.url+self.pageNo+'.html';
                        }else{
                            self.url = url.replaceAllStr('.html','');
                            url = self.url+"_"+self.pageNo+'.html';
                        }
                    }else{
                        if(self.pagenumbers.indexOf('list_')!=-1) {
                            //http://m.meizitu.com +  /a/list_1_2.html
                            url = meizitu.getm_meizitu() + self.pagenumbers;
                            self.url = url.replaceAllStr('2.html', '');
                        }else{
                            //http://m.meizitu.com/a/xinggan.html
                            //http://m.meizitu.com/a/ + xinggan_2_2.html
                            url = meizitu.getm_meizitu()+"/a/" + self.pagenumbers;
                            self.url = url.replaceAllStr('_2.html', '');;
                        }
                    }
                }else{
                    //http://m.meizitu.com/a/pure_3.html
                    //http://m.meizitu.com/tag/suxiong_17_3.html
                    //http://m.meizitu.com/a/+  list_1_3.html
                    if(self.pagenumbers.indexOf('list_')!=-1){
                        url = self.url+self.pageNo+'.html';
                    }else if(self.pagenumbers.indexOf('tag')!=-1){
                        url = self.url+self.pageNo+'.html';
                    }else{
                        url = self.url+"_"+self.pageNo+'.html';
                    }
                }

                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeizituJsoupModule.mlastest(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "mlastest"+self.pageNo
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else {
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "mlastest"+self.pageNo
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
                        href2:tag2.href,
                        alt2:tag2.alt,
                        src2:tag2.src,
                        other2:tag2.other,
                    };
                    self.pagenumbers = tag.pagenumbers;
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