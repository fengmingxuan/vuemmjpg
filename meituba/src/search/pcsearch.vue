<template>
    <div>
        <div>
            <navbar_v :title="title"></navbar_v>
        </div>
        <div class="wrapper">
            <input ref="input" class="input" type="text" @input="oninput" @change="onchange" @focus="onfocus" @blur="onblur"/>
            <text class="search" @click="tosearch">搜索</text>
        </div>
        <div class="row">
            <text class="text">热门搜索：</text>
        </div>
        <div class="row" v-for="hotitem in hotkeys">
            <text class="text" @click="todetail(hotitem.href,hotitem.alt)">{{hotitem.alt}}</text>
            <text class="text" @click="todetail(hotitem.href2,hotitem.alt2)">{{hotitem.alt2}}</text>
        </div>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    const modal = weex.requireModule('modal')
    var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
    var weexEventModule = weex.requireModule('weexEventModule');
    var meituba = require('../meituba');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    export default {
        components: {
            navbar_v,
        },
        data(){
            return{
                 key:"",
                 taghref:meituba.getpc_search(),
                 pageNo:1,
                 hotkeys:[],
                title:"搜索"
            }
        },
        created: function(){
            var self = this;
            self.refresh();

        },
        methods: {
            oninput (event) {
                console.log('oninput:', event.value)
                this.key = event.value;
            },
            onchange (event) {
                console.log('onchange:', event.value)
                this.key = event.value;
            },
            onfocus (event) {
                console.log('onfocus:', event.value)

            },
            onblur (event) {
                console.log('onblur:', event.value)
            },
            tosearch(event){
                console.log('tosearch:', this.key)
                var name = "search/pcsearchlist";
                var params={
                    url: meituba.getDefaultUrl(name),
                    animated: "true",
                    options:{
                        taghref: meituba.getpc_search_url()+encodeURIComponent(this.key),
                        title:this.key,
                    }
                };

                weexNavigatorModule.push(params, event => {
                    // modal.toast({ message: 'callback: ' + event })
                })
            },
            refresh(event){
                var self = this;
                var url = self.taghref;
                weexMeitubaJsoupModule.pchotsearch(url,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.hotkeys.splice(0, self.hotkeys.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            self.parseJSON(json);
                            var paramsCache = {
                                url:url,
                                typename: "pchotsearch"
                            };
                            weexEventModule.saveCache(paramsCache,json,function(ee){

                            });
                        }else {
                            //异常
                            console.log('异常====');
                            //获取缓存
                            var paramsCache = {
                                url:url,
                                typename: "pchotsearch"
                            };
                            weexEventModule.queryCache(paramsCache,function(e){
                                console.log('queryCache=='+e);
                                var json = JSON.parse(e);
                                self.parseJSON(json);
                            });
                        }
                    }
                });
            },
            parseJSON:function (json) {
                var self = this;
                for (var i = 0; i < json.list.length; i+=2) {
                    var tag = json.list[i];
                    var tag2 = json.list[i+1];
                    var keyitem={
                        href:tag.href,
                        alt:tag.alt,
                        href2:tag2.href,
                        alt2:tag2.alt,
                    };
                    self.hotkeys.push(keyitem);
                }
            },
            todetail:function (url,e) {
//                weexEventModule.startWebViewActivity(e);
                console.log('tosearch:', e)
                var name = "zhuanti/pctag_imglist";
                var params={
                    url: meituba.getDefaultUrl(name),
                    animated: "true",
                    options:{
                        taghref: url,
                        title:e,
                    }
                };

                weexNavigatorModule.push(params, event => {
                    // modal.toast({ message: 'callback: ' + event })
                })
            }
        }
    }
</script>

<style>
    .wrapper{
        flex-direction: row;
        height: 100px;
    }
    .input {
        font-size: 40px;
        flex: 1;
        margin-top: 10px;
        margin-left: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        color: #030303;
        border-width: 2px;
        border-style: solid;
        border-color: #ca5e54;
    }
    .search{
        width: 120px;
        padding: 18px;
        font-size: 40px;
        margin-top: 10px;
        margin-right: 10;
        background-color:#ca5e54 ;
        color: #ffffff;
    }
    .row {
        height: 100px;
        flex-direction: row;
        justify-content: flex-start;
        padding-left: 20px;
        margin-top: 10px;
    }
    .text {
        font-size: 45px;
        color: #666666;
        flex: 1;
    }
</style>