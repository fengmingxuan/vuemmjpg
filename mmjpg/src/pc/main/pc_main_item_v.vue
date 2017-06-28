<template>
    <div>
        <div class="news-content">
            <image class="img" :src="stockitem.src"></image>
            <text class="txt">{{stockitem.alt}}</text>
            <text class="txt">{{stockitem.other}}</text>
        </div>
    </div>
</template>

<script>
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

        }
    }
</script>

<style>
    .news-bottom{
        margin-top:15;
        margin-bottom:15;
        flex-direction:row;
    }

    .news-content{
        margin-left:1;
        margin-right:1;
        flex-direction:column;

    }
    .news-bottom{
        margin-left:20;
        margin-right:20;
    }
    .news-reply,.news-txt,.news-share{
        flex:1;
        justify-content:center;
        align-items:center;
        flex-direction:row;
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