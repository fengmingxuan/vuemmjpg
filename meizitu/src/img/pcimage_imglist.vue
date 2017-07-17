<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <cell>
            <pclastest :taghref="url"></pclastest>
            </cell>
            <cell>
                <div>
                    <text class="title">{{celltitle}}</text>
                </div>
            </cell>
            <cell v-for="stockitem in stockArray">
                <pcimage_imglist_item :stockitem="stockitem"></pcimage_imglist_item>
            </cell>
            <cell>
                <div>
                    <text class="alt">{{cellother}}</text>
                </div>
            </cell>
            <cell>
                <pchotpic_imglist :taghref="taghref"></pchotpic_imglist>
            </cell>
            <cell>
                <pcimage_relatedpost :taghref="url"></pcimage_relatedpost>
            </cell>
            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
                <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pcimage_imglist_item from '../img/pcimage_imglist_item.vue'
    import  pcimage_relatedpost from '../img/pcimage_relatedpost.vue'
    import  pclastest from '../main/pclastest.vue'
    import  pchotpic_imglist from '../main/pchotpic_imglist.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
    var meizitu = require('../meizitu');
    var storage = weex.requireModule('storage');
    export default{
        components: {
            pcimage_imglist_item,
            navbar_v,
           pcimage_relatedpost,
            pclastest,
            pchotpic_imglist,

        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meizitu.getpc_image(),
                pageNo: 1,
                refreshing: false,
                showLoading: 'hide',
                title:"性感美女",
                isFirst:1,
                shown:false,
                leftsrc:'./images/back.png',
                pagenumbers:'',
                url:meizitu.getpc_image(),
                celltitle:"",
                cellother:""

                 
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
                    self.taghref = meizitu.getpc_image();
                }
                var url = self.taghref;
//                if(self.pageNo==1){
//                    url = self.taghref;
//                }else if(self.pageNo==2){
//                    url = meizitu.getpc_meizitu()+ self.pagenumbers;
//                }else{
//                    url = meizitu.getpc_main_more()+ self.pagenumbers;
//                }
                self.url = url;
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeizituJsoupModule.pcimagelist(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i++) {
                                var tag = json.list[i];
                                if(i==0){
                                    self.celltitle = tag.title;
                                    self.cellother = tag.other;
                                }
                                self.stockArray.push(tag);
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
    .title{
        font-size:38;
        padding: 10;
    }
    .alt{
        font-size:30;
        padding: 10;
    }
</style>