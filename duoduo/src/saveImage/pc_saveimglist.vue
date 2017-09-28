<template>
    <div style="background-color:rgba(0, 0, 0, .25) ">
        <navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>
        <list class="list"  loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <cell v-for="stockitem in stockArray">
                <pc_saveimglist_item :stockitem="stockitem"></pc_saveimglist_item>
            </cell>
            <!--<loading class="loading" @loading="onloading" :display="showLoading">-->
                <!--<text class="indicator_loading">加载更多...</text>-->
            <!--</loading>-->
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pc_saveimglist_item from './pc_saveimglist_item.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexDuoduoJsoupModule = weex.requireModule('weexDuoduoJsoupModule');
    var duoduo = require('../duoduo');
    var utils = require('../common/utils');
    var storage = weex.requireModule('storage');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            pc_saveimglist_item,
            navbar_v,
        },
        props: ['taghref'],
        data(){
            return{
                stockArray:[],
                taghref:duoduo.getpc_weimeitupian(),
                pageNo: 1,
                refreshing: false,
                showLoading: 'hide',
                title:"唯美图片",
                isFirst:1,
                shown:false,
                leftsrc:'./images/back.png',
                type:1

                 
            }
        },
        created: function(){
            var self = this;
            self.refresh();
        },
        mounted: function() {
            var self = this;
        },
        methods:{
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
                //获取缓存
                var paramsCache = {
                    type:self.type,
                };
                weexEventModule.queryImage(paramsCache,function(e){
                    console.log('queryImage=='+e);
                    var json = JSON.parse(e);
                    self.parseJSON(json);
                });
            },
            parseJSON:function (json) {
                var self = this;
                for (var i = 0; i < json.list.length; i+=2) {
                    var tag = json.list[i];
                    var tag2 = json.list[i+1];
                    if(tag2==undefined){
                        tag2={};
                    }
                    var item={
                        title:tag.time,
                        src:tag.url,
                        src2:tag2.url,
                        title2:tag2.time,
                    };
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