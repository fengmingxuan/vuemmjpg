<template>
    <div>
        <list class="list" @loadmore="fetch" loadmoreoffset="10">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">下拉刷新...</text>
            </refresh>
            <cell v-for="stockitem in stockArray">
                <pcmainhotlistitem_v :stockitem="stockitem"></pcmainhotlistitem_v>
            </cell>
        </list>
    </div>
</template>

<script>
    import  pcmainhotlistitem_v from '../mainhot/pcmainhotlistitem_v.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexJsoupModule = weex.requireModule('weexJsoupModule');
    var mmjpg = require('../../mmjpg');

    export default{
        components: {
            pcmainhotlistitem_v
        },

        data(){
            return{
                stockArray:[],
                taghref:mmjpg.getm_mmjpg(),
                pageNo: 1,
                refreshing: false,
            }
        },
        created: function(){
            var self = this;
            self.refresh();

        },
        methods:{
            fetch(event){
//                this.pageNo = this.pageNo+1;
//                this.refresh();
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
                var url = self.taghref;
                weexJsoupModule.pcmainheadlist(url,function(e){
                    var json = JSON.parse(e);
                    if(self.pageNo==1){
                        self.stockArray.splice(0, self.stockArray.length);
                    }
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i++) {
                                var tag = json.list[i];
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

</style>