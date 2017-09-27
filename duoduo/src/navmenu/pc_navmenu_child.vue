<template>
    <div style="margin: 5px;flex-direction: column;">
        <div>
            <text style="color: #F69;font-size: 30;padding: 10px;" @click="todetail(menuitem.href,menuitem.title)">。{{menuitem.title}}</text>
        </div>
        <div v-for="stockitem in menuitem.list">
            <pc_navmenu_item :stockitem="stockitem"></pc_navmenu_item>
        </div>
    </div>
</template>

<script>
    import  pc_navmenu_item from './pc_navmenu_item.vue'
    var weexEventModule = weex.requireModule('weexEventModule');
    var weexNavigatorModule = weex.requireModule('weexNavigatorModule')
    var duoduo = require('../duoduo');
    module.exports = {
        components: {
            pc_navmenu_item,
        },
        created:function(){
        },

        props: {
            menuitem: {
                type: Object
            }
        },

        methods:{
            todetail:function (e,alt) {
                console.log('main list==='+e)
//                if(e.indexOf('http://www.ys8.com')!=-1){
//                    weexEventModule.startWebViewActivity(e);
//                }else{
                var name = "imglist/pc_imglist";
                var params={
                    url: duoduo.getDefaultUrl(name),
                    animated: "true",
                    options:{
                        taghref: e,
                        title:alt
                    }
                };

                weexNavigatorModule.push(params, event => {
                    // modal.toast({ message: 'callback: ' + event })
                });
//                }
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
        padding: 5;
        background-color: #fff;
        border-radius: 5;
        align-content: center;
        align-items: center;
    }

    .txt{
        font-size:28;
        padding: 10;
        flex: 1;
    }

</style>