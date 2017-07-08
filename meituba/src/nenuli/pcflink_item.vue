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
        width: 90px;
        height:60px;
        border-color: #1592E5;
        border-width: 1;
        border-radius: 20;
        background-color:#1592E5 ;
        align-items: center;
        align-content: center;
        margin: 5;
        padding: 5;
    }

    .txt{
        font-size:18;
        flex-direction:column;
        color: #ffffff;
        align-items: center;
        align-content: center;
    }
</style>