<template>
    <div>
        <div class="news-bottom" @click="todetail(stockitem.href)">
            <text class="tucao_numClass">{{stockitem.alt}}</text>
        </div>
        <div class="lineClass"></div>
    </div>
</template>

<script>
    var weexJsoupModule = weex.requireModule('weexJsoupModule');
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
    .news-bottom {
        flex: 1;
        align-items: center;
        flex-direction: row;
        margin: 5;
    }
    .tucao_numClass {
        font-size: 12wx;
        margin-left: 4wx;
        flex: 1;
        align-items: flex-start;
        text-align: flex-start;
        padding: 10;
        margin: 10;

    }
    .lineClass {
        height: 2;
        background-color: #eeeeee;
    }
</style>