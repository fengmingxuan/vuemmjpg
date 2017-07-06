<template>
        <div class="news-content" @click="todetail(stockitem.href)">
            <div class="news-content">
                <text class="txt">{{stockitem.alt}}</text>
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
        flex-direction:column;
        width: 100px;
        height:80px;
        border-color: #ca5e54;
        border-width: 1;
        border-radius: 20;
        background-color:#ca5e54 ;
        align-items: center;
        align-content: center;
        margin: 10;
        padding: 10;
    }

    .txt{
        font-size:23;
        flex-direction:column;
        color: #ffffff;
        align-items: center;
        align-content: center;
    }
</style>