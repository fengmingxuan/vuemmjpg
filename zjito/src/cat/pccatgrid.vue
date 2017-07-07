<template>
    <div>
        <!--<navbar_v :title="title"></navbar_v>-->
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>

            <cell v-for="stockitem in stockArray">
                <pccatgrid_item_v :stockitem="stockitem"></pccatgrid_item_v>
            </cell>

            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
                <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pccatgrid_item_v from '../cat/pccatgrid_item_v.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
    var zjito = require('../zjito');

    export default{
        components: {
            pccatgrid_item_v,
            navbar_v,

        },
        props: ['taghref','pageNo'],
        data(){
            return{
                stockArray:[],
                taghref:zjito.getpc_cat(),
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
                if( self.taghref==undefined){
                    self.taghref = zjito.getpc_cat();
                    self.pageNo = 0;
                }
                var url = self.taghref;
//                if(self.pageNo==1){
//                    url = self.taghref;
//                }else{
//                    url = self.taghref+"?idx="+self.pageNo;
//                }
                console.log('url==='+url);
                var params = {
                    url:url,
                    pageNo: self.pageNo
                };
                weexZjitoJsoupModule.pccatlist(params,function(e){
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
                                    tag2={
                                        href:"",
                                        alt:""
                                    };
                                }
                                var tag3 = json.list[i+2];
                                if(tag3==undefined){
                                    tag3={
                                        href:"",
                                        alt:""
                                    };
                                }
                                var tag4 = json.list[i+3];
                                if(tag4==undefined){
                                    tag4={
                                        href:"",
                                        alt:""
                                    };
                                }
                                self.title = tag.title;
                                var item ={
                                    href:tag.href,
                                    alt:tag.alt,
                                    href2:tag2.href,
                                    alt2:tag2.alt,
                                    href3:tag3.href,
                                    alt3:tag3.alt,
                                    href4:tag4.href,
                                    alt4:tag4.alt,
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