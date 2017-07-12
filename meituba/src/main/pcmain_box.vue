<template>
    <div>
        <!--<navbar_v :title="title"></navbar_v>-->
        <list class="list"  loadmoreoffset="10" style="background-color: #f5f5f5">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <!--<cell>-->
                <!--<mtabtags :taghref="taghref"></mtabtags>-->
            <!--</cell>-->
            <cell v-for="stockitem in stockArray">
                <pctaglist_item :stockitem="stockitem"></pctaglist_item>
            </cell>

            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
                <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pctaglist_item from '../channelimg/pctaglist_item.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
    var meituba = require('../meituba');
    var storage = weex.requireModule('storage');
    export default{
        components: {
            pctaglist_item,
            navbar_v,

        },
//        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:meituba.getpc_meituba(),
                pageNo: 0,
                refreshing: false,
                showLoading: 'hide',
                title:"唯美意境",
                isFirst:1,
                 
            }
        },
        created: function(){
//            var self = this;
//            var ctaghref = self.$getConfig().taghref;
//            if(ctaghref!=undefined){
//                self.taghref = ctaghref;
//            }
//            var ctitle = self.$getConfig().title;
//            if(ctitle!=undefined){
//                self.title = ctitle;
//            }
//            console.log('title=='+self.title+';taghref=='+self.taghref)
//            setTimeout(() => {
//                self.refresh();
//            }, 100)


        },
        methods:{
            autoRefresh(event){
                var self = this;
                storage.getItem('pageNo',function(s){
                    console.log('get pageNo result:'+JSON.stringify(s));
                    var spageNo = s.data;
                    if(spageNo!=undefined){
                        self.pageNo = spageNo;
                    }
                    console.log('pageNo=='+self.pageNo);
                    self.refresh();
                });
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
                self.isFirst=0;
                if(self.taghref==undefined){
                    self.taghref = meituba.getpc_meituba();
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
                weexMeitubaJsoupModule.pcmainbox(params,function(e){
                    var json = JSON.parse(e);
//                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
//                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i+=4) {
                                var tag = json.list[i];
                                var tag2 = json.list[i+1];
                                if(tag2==undefined){
                                    tag2 = {

                                    };
                                }
                                var tag3 = json.list[i+2];
                                if(tag3==undefined){
                                    tag3 = {

                                    };
                                }
                                var tag4 = json.list[i+3];
                                if(tag4==undefined){
                                    tag4 = {

                                    };
                                }
                                var item={
                                    href:tag.href,
                                    alt:tag.alt,
                                    id:i,
                                    backgroundColor:'#f60',
                                    href2:tag2.href,
                                    alt2:tag2.alt,
                                    id2:i+1,
                                    backgroundColor2:'#09f',
                                    href3:tag3.href,
                                    alt3:tag3.alt,
                                    id3:i+2,
                                    backgroundColor3:'#7a7a7a',
                                    href4:tag4.href,
                                    alt4:tag4.alt,
                                    id4:i+3,
                                    backgroundColor4:'#393',
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