<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <!--<navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>-->
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <cell>
                <div @click="todetail(bighref,bigtitle)">
                    <image class="img" :src="bigsrc" ></image>
                    <text class="txt">{{bigtitle}}</text>
                </div>
            </cell>
            <cell v-for="stockitem in stockArray">
                <pcxilie_imglist_item :stockitem="stockitem"></pcxilie_imglist_item>
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
    import  pcxilie_imglist_item from '../xilie/pcxilie_imglist_item.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
    var meitu = require('../meitu');
    var storage = weex.requireModule('storage');
    var utils = require('../common/utils');
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    export default{
        components: {
            pcxilie_imglist_item,
            navbar_v,

        },
//        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meitu.getpc_xilie_top(),
                pageNo: 1,
                refreshing: false,
                showLoading: 'hide',
                title:"系列",
                isFirst:1,
                shown:false,
                leftsrc:'./images/back.png',
                bigsrc:"",
                bigtitle:"",
                bighref:""
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
            todetail:function (e,alt) {
                console.log('main list==='+e)
                var name = "star/pcstar_hot_pager";
                var params={
                    url: meitu.getDefaultUrl(name),
                    animated: "true",
                    options:{
                        taghref: e,
                        title:alt
                    }
                };

                weexNavigatorModule.push(params, event => {
                    // modal.toast({ message: 'callback: ' + event })
                });
            },
            autoRefresh(){
                console.log('autoRefresh');
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
                    self.taghref = meitu.getpc_xilie_top();
                }
                var url = self.taghref;
//                if(self.pageNo==1){
//                    //https://www.4493.com/tag/%C4%DA%D2%C2/
//                    url = self.taghref;
//                }else{
//                    //https://www.4493.com/tag/%C4%DA%D2%C2/
//                    //https://www.4493.com/tag/2/%C4%DA%D2%C2
//
//                    var newurl = meitu.getpc_meitu()+"tag/";
//                    var key = self.taghref.replaceAllStr(newurl,"").replaceAllStr("/","");
//                    url = newurl+self.pageNo+"/"+key;
//                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeiu4493JsoupModule.pcxlimg(params,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            var bigtag= json.list[0];
                            self.bigsrc = bigtag.src;
                            self.bigtitle = bigtag.title;
                            self.bighref =  bigtag.href;

                            for (var i = 1; i < json.list.length; i+=2) {
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
    .img{
        width: 750;
        height: 440;
        border-radius: 5;
    }
    .txt{
        font-size:22;
        padding: 5;
        flex: 1;
    }
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