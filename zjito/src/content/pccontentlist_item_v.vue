<template>
        <div class="news-content" @click="todetail(stockitem.href)">
            <text class="txt">{{stockitem.other}}</text>
            <text class="txt">{{stockitem.title}}</text>
            <text class="txt">{{stockitem.alt}}</text>
            <image class="img" :src="stockitem.src"></image>
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
    }
    .img{
        width: 750;
        height: 900;
    }
    .txt{
        opacity:0.3;
        font-size:30;
    }
</style>