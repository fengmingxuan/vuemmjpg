<template>
    <div style="height: 180px">
        <!--<navbar_v :title="title"></navbar_v>-->
        <div style="flex: 1;align-content: flex-start;align-items: flex-start">
            <text style="font-size: 30;margin-top: 30;margin-left: 20">{{title}}</text>
        </div>
        <hlist  style="flex-direction: row;width: 750px;height: 100px;flex: 1"  loadmoreoffset="10" scroll-direction="horizontal">
            <!--<refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">-->
                <!--<text class="indicator">下拉刷新...</text>-->
            <!--</refresh>-->

            <cell v-for="stockitem in stockArray">
                <mtabtags_item_v :stockitem="stockitem"></mtabtags_item_v>
            </cell>

            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
                <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </hlist>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  mtabtags_item_v from '../cat/mtabtags_item_v.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
    var zjito = require('../zjito');

    export default{
        components: {
            mtabtags_item_v,
            navbar_v,

        },

        data(){
            return{
                stockArray:[],
                taghref:zjito.getm_tab_img(),
                pageNo: 0,
                refreshing: false,
                showLoading: 'hide',
                title:"看图"
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

        },
        methods:{
            onloading (event) {
                this.showLoading = 'show'
//                this.pageNo = this.pageNo+1;
                setTimeout(() => {
                    this.showLoading = 'hide'
                }, 2000)
                this.refresh();
            },
            fetch(event){
//                this.pageNo = this.pageNo+1;
                this.refresh();
            },
            onpullingdown (event) {
            },
            onrefresh (event) {
                this.refreshing = true;
//                this.pageNo = 1;
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
                this.refresh();
            },
            refresh:function(){
                var self = this;
                var url = self.taghref;
//                if(self.pageNo==1){
//                    url = self.taghref;
//                }else{
//                    url = self.taghref+"?idx="+self.pageNo;
//                }
                console.log('url==='+url);
//                var params = {
//                    url:url,
//                    pageNo: self.pageNo
//                };
                weexZjitoJsoupModule.mimgtags(url,function(e){
                    var json = JSON.parse(e);
//                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
//                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i++) {
                                var tag = json.list[i];
                                self.title = tag.title;
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