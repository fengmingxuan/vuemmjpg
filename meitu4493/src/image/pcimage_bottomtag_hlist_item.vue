<template>
        <div class="news-content" @click="todetail(stockitem.id,stockitem.href,stockitem.alt)">
            <div class="news-content">
                <text class="txt">{{stockitem.alt}}</text>
            </div>

        </div>
</template>

<script>
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var meitu = require('../meitu');
    module.exports = {
        created:function(){
        },

        props: {
            stockitem: {
                type: Object
            }
        },

        methods:{
            todetail:function (id,e,alt) {
                if(e.indexOf('www.4493.com')!=-1){
                    if(alt.indexOf("赞")!=-1){
                        return;
                    }
                    var name = "star/pctag_imglist";
                    var params={
                        url: meitu.getDefaultUrl(name),
                        animated: "true",
                        options:{
                            taghref: e,
                            title:alt
                        }
                    };

                    weexNavigatorModule.push(params, event => {
                        // modal.toast({ message: 'callback: ' + event })
                    })
                }else{

                }


            }
        }
    }
</script>

<style>
    .news-content{
        flex-direction:column;
        width: 130px;
        height:60px;
        border-color: #FF6B9C;
        border-width: 1;
        border-radius: 20;
        background-color:#FF6B9C ;
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