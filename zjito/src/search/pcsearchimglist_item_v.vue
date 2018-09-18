<template>
        <div class="news-content" @click="todetail(stockitem.href)">
            <image class="img" :src="stockitem.src"></image>
            <text class="txt">{{stockitem.alt}}</text>
        </div>
</template>

<script>
    var weexEventModule = weex.requireModule('weexEventModule');
    var zjito = require('../zjito');
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
                var  href = zjito.getm_zjito()+e;
                weexEventModule.startWebViewActivity(href);
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