<template>
    <div style="width: 750;height: 1330">
           <navbar_v :title="title"></navbar_v>
        <scroller>
            <div>
                <mmainslider></mmainslider>
            </div>
            <div style="flex: 1;align-content: flex-start;align-items: flex-start">
                <text style="font-size: 40;margin: 20">{{title}}</text>
            </div>
            <div>
                <mimglist_notitlebar_autorefresh :taghref="taghref"></mimglist_notitlebar_autorefresh>
            </div>

            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
                <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </scroller>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  mimglist_notitlebar_autorefresh from '../search/mimglist_notitlebar_autorefresh.vue'
    import  mmainslider from '../main/mmainslider.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
    var zjito = require('../zjito');
    var storage = weex.requireModule('storage');
    export default{
        components: {
            mimglist_notitlebar_autorefresh,
            navbar_v,
            mmainslider

        },
        props: ['taghref','pageNo','title'],
        data(){
            return{
                stockArray:[],
                taghref:zjito.getm_zjito(),
                pageNo: 0,
                refreshing: false,
                showLoading: 'hide',
                title:"搜索",
                isFirst:1,
                 
            }
        },
        created: function(){
            var self = this;
//            var ctaghref = self.$getConfig().taghref;
//            if(ctaghref!=undefined){
//                self.taghref = ctaghref;
//            }
//            var ctitle = self.$getConfig().title;
//            if(ctitle!=undefined){
//                self.title = ctitle;
//            }
            console.log('title=='+self.title+';taghref=='+self.taghref+';pageNo=='+self.pageNo)

            self.refresh();

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
//                if(this.taghref.indexOf(".shtml") != -1){
//                    this.pageNo = 1;
//                }else{
//                    this.pageNo = this.pageNo+1;
//                }
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
                    self.taghref = zjito.getm_zjito();
//                    self.pageNo=0;
                }


                var url = self.taghref;
//                if(self.pageNo==1){
//                    url = self.taghref;
//                }else{
//                    //index_2.shtml
//                    url = self.taghref+"index_"+self.pageNo+".shtml";
//                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
//                weexZjitoJsoupModule.parsemainimglist(params,function(e){
//                    var json = JSON.parse(e);
////                    if(self.pageNo==1){
//                        self.stockArray.splice(0, self.stockArray.length);
////                    }
//                    if (json.list) {
//                        if (json.list && json.list.length > 0) {
//                            for (var i = 0; i < json.list.length; i+=2) {
//                                var tag = json.list[i];
//                                var tag2 = json.list[i+1];
//                                var item={
//                                    href:tag.href,
//                                    alt:tag.alt,
//                                    src:tag.src,
//                                    href2:tag2.href,
//                                    alt2:tag2.alt,
//                                    src2:tag2.src,
//                                };
//                                self.stockArray.push(item);
//                            }
//                        }
//                    }
//
//
//                });
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