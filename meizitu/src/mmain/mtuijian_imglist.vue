<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <navbar_v :title="title" :shown="shown" :leftsrc="leftsrc" :shownleft="shownleft"></navbar_v>
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
            <!--<cell>-->
                <!--<pcrecommend :taghref="taghref"></pcrecommend>-->
            <!--</cell>-->
            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
                <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  mtuijian_imglist_item from '../mmain/mtuijian_imglist_item.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
    var meizitu = require('../meizitu');
    var storage = weex.requireModule('storage');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
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
                title:"精彩推荐",
                isFirst:1,
                shown:false,
                leftsrc:'./images/back.png',
                shownleft:false
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
            var paramsEvent={
                event:"6001",
                label:"精彩推荐"
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
//                if(self.pageNo==1){
//                    url = self.taghref;
//                }else{
//                    url = self.taghref+ "&PageNo="+self.pageNo;
//                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeizituJsoupModule.mtuijian(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
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
//                                self.pagenumbers = tag.pagenumbers;
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