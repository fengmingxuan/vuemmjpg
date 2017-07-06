<template>
    <div style="flex: 1;flex-direction: row;padding: 10">
        <div class="news-content" @click="todetail(stockitem.href)">
            <text class="txt">{{stockitem.alt}}</text>
        </div>
        <div class="news-content" @click="todetail(stockitem.href2)">
            <text class="txt">{{stockitem.alt2}}</text>
        </div>
        <div class="news-content" @click="todetail(stockitem.href3)">
            <text class="txt">{{stockitem.alt3}}</text>
        </div>
        <div class="news-content" @click="todetail(stockitem.href4)">
            <text class="txt">{{stockitem.alt4}}</text>
        </div>
    </div>

</template>

<script>
    var weexEventModule = weex.requireModule('weexEventModule');
    module.exports = {
        created:function(){
        },

        props: {
            stockitem: {
                type: Object
            }
        },

        methods:{
            todetail:function (e) {
                weexEventModule.startWebViewActivity(e);
            }
        }
    }
</script>

<style>
    .news-content{
        margin-left:10;
        margin-right:10;
        margin-bottom: 10;
        padding: 10;
        flex: 1;
    }

    .txt{
        font-size:30;
        color: #000000;
    }
</style>