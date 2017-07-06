<template>
    <div style="flex-direction: row;flex: 1;margin: 10px">
        <div class="news-content" @click="todetail(stockitem.href)">
            <image class="img" :src="stockitem.src"></image>
            <text class="txt">{{stockitem.alt}}</text>
        </div>
        <div class="news-content" @click="todetail(stockitem.href2)">
            <image class="img" :src="stockitem.src2"></image>
            <text class="txt">{{stockitem.alt2}}</text>
        </div>
    </div>
</template>

<script>
    var weexEventModule = weex.requireModule('weexEventModule');
    module.exports = {
        created:function(){
            console.log('news');
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
        margin-left:1;
        margin-right:1;
        flex-direction:column;
        flex: 1;
        padding: 10;
    }
    .img{
        width: 350;
        height: 450;
    }
    .txt{
        font-size:30;
        width: 350;
    }
</style>