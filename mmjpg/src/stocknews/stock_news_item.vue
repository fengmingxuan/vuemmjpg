<template>
    <div>
        <div class="news-content">
            <span style="color: #ff0000;font-size: 18"> 12:09 </span> <span style="font-weight: bold;color: #000000;font-size: 22"> {{stockitem.subject}} </span> <span style="color: #000000;font-size: 20"> {{stockitem.subject}} </span>
        </div>

        <div class="news-bottom" >
            <div class="news-txt">

             </div>
              <div class="news-txt">

               </div>
                <div class="news-txt">

               </div>
             <div class="news-share"   >
                 <image class="img" src="http://ww1.sinaimg.cn/large/0060lm7Tgw1fbbe3xef2oj303h02owec.jpg"></image>
                  <text class="txt">{{stockitem.usefulNum}}</text>
             </div>
            <div class="news-reply" >
                <image class="img" src="http://i1.piimg.com/567571/c046122d57e5da9e.png"></image>
                 <text class="txt">{{stockitem.totalReplyNum}}</text>
            </div>
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
        margin-left:20;
        margin-right:20;

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
            width:40;
            height:40;
        }
  .txt{
        opacity:0.3;
        font-size:30;
    }
</style>