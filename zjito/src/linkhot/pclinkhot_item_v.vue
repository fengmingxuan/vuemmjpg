<template>
        <div class="news-content" @click="todetail(stockitem.href)">
            <text class="txt">{{stockitem.alt}}</text>
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
        margin-bottom: 15px;
        flex-direction:column;
        padding: 10px;
        border-bottom-width: 1px;
        border-color: #ca5e54;
    }
    .img{
        width: 750;
        height: 900;
    }
    .txt{
        font-size:30;
        color: #000000;
    }
</style>