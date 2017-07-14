<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <!--<navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>-->
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <!--<cell>-->
                <!--<mtabtags :taghref="taghref"></mtabtags>-->
            <!--</cell>-->
            <cell v-for="stockitem in stockArray">
                <pcflink_item :stockitem="stockitem"></pcflink_item>
            </cell>

            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
                <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pcflink_item from '../main/pcflink_item.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeizituJsoupModule = weex.requireModule('weexMeizituJsoupModule');
    var meizitu = require('../meizitu');
    var storage = weex.requireModule('storage');
    export default{
        components: {
            pcflink_item,
            navbar_v,

        },
        props: ['taghref','pageNo'],
        data(){
            return{
                stockArray:[],
                taghref:meizitu.getpc_meizitu(),
                pageNo:0,
                refreshing: false,
                showLoading: 'hide',
                title:"美女分类",
                isFirst:1,
                shown:false,
                leftsrc:'./images/back.png'
                 
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

//            storage.getItem('pageNo',function(s){
//                console.log('get pageNo result:'+JSON.stringify(s));
//                var spageNo = s.data;
//                if(spageNo!=undefined){
//                    self.pageNo = spageNo;
//                }
//                console.log('pageNo=='+self.pageNo);
//                self.refresh();
//            });
            self.refresh();

        },
        methods:{
            autoRefresh(){
                var self = this;
                self.refresh();
//                storage.getItem('pageNo',function(s){
//                    console.log('get pageNo result:'+JSON.stringify(s));
//                    var spageNo = s.data;
//                    if(spageNo!=undefined){
//                        self.pageNo = spageNo;
//                    }
//                    console.log('pageNo=='+self.pageNo);
//                    self.refresh();
//                });
            },
            onloading (event) {
                this.showLoading = 'show'
//                 this.pageNo = this.pageNo+1;
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
//                this.pageNo = 0;
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
                this.refresh();
            },
            refresh:function(){
                var self = this;
                self.isFirst=0;
                if(self.taghref==undefined){
                    self.taghref = meizitu.getpc_meizitu();
                }
                var url = self.taghref;
//                if(self.pageNo==1){
//                    url = self.taghref;
//                }else{
//                    //index_2.shtml
//                    url = self.taghref+"list28"+self.pageNo+".html";
//                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexMeizituJsoupModule.pcflink(params,function(e){
                    var json = JSON.parse(e);
//                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
//                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i++) {
                                var tag = json.list[i];
                                tag.id = i+1;
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
</style>