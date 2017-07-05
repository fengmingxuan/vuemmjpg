<template>
    <div>
        <div>
            <navbar_v></navbar_v>
        </div>
        <div class="wrapper">
            <input ref="input" class="input" type="text" @input="oninput" @change="onchange" @focus="onfocus" @blur="onblur"/>
            <text class="search" @click="tosearch">搜索</text>
        </div>
        <div class="row">
            <text class="text">热门搜索：</text>
        </div>
        <div class="row" v-for="hotitem in hotkeys">
            <text class="text" @click="todetail(hotitem.href)">{{hotitem.alt}}</text>
        </div>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    const modal = weex.requireModule('modal')
    var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
    var weexEventModule = weex.requireModule('weexEventModule');
    var zjito = require('../zjito');
    export default {
        components: {
            navbar_v,
        },
        data(){
            return{
                 key:"",
                 taghref:zjito.getpc_search(),
                 pageNo:1,
                 hotkeys:[]
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
            },
            refresh(event){
                var self = this;
                var url = self.taghref;
                weexZjitoJsoupModule.pchotsearch(url,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.hotkeys.splice(0, self.hotkeys.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i++) {
                                var tag = json.list[i];
                                self.hotkeys.push(tag);
                            }
                        }
                    }
                });
            },
            todetail:function (e) {
                weexEventModule.startWebViewActivity(e);
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
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DDDDDD;
    }
    .text {
        font-size: 45px;
        color: #666666;
    }
</style>