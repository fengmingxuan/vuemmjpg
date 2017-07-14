<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <cell>
                <pcpicnew_slider :taghref="taghref"></pcpicnew_slider>
            </cell>
            <cell v-for="stockitem in stockArray">
                <pctagcontent_imglist_item :stockitem="stockitem"></pctagcontent_imglist_item>
            </cell>
            <cell>
                <pclastest :taghref="url"></pclastest>
            </cell>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator_loading">加载更多...</text>
            </loading>
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pctagcontent_imglist_item from '../tags/pctagcontent_imglist_item.vue'
    import  pcpicnew_slider from '../main/pcpicnew_slider.vue'
    import  pclastest from '../main/pclastest.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
    var meizitu = require('../meizitu');
    var storage = weex.requireModule('storage');
    var utils = require('../common/utils');
    export default{
        components: {
            pctagcontent_imglist_item,
            navbar_v,
            pcpicnew_slider,
            pclastest,

        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meizitu.getpc_tag(),
                pageNo: 1,
                refreshing: false,
                showLoading: 'hide',
                title:"性感美女",
                isFirst:1,
                shown:false,
                leftsrc:'./images/back.png',
                pagenumbers:'',
                url:meizitu.getpc_tag(),

                 
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
                    self.taghref = meizitu.getpc_tag();
                }
                var url = self.taghref;
                if(self.pageNo==1){
                    url = self.taghref;
                }else{
                    url = meizitu.getpc_tag().replaceAllStr(".html","")+"_"+ self.pageNo+".html";
                }
                self.url = url;
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeizituJsoupModule.pctagimglist(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i+=2) {
                                var tag = json.list[i];
                                var tag2 = json.list[i+1];
                                if(tag2==undefined){
                                    tag2={
                                        title:"",
                                        alt:"",
                                        href:"",
                                        src:""
                                    };
                                }
                                var item ={
                                    title:tag.title,
                                    alt:tag.alt,
                                    href:tag.href,
                                    src:tag.src,
                                    title2:tag2.title,
                                    alt2:tag2.alt,
                                    href2:tag2.href,
                                    src2:tag2.src,
                                };
                                self.pagenumbers = tag.pagenumbers;
                                self.stockArray.push(item);
                            }
                        }
                    }


                });
            }

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