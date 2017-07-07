<template>
    <div style="width: 750;">
        <navbar_v :title="title"></navbar_v>
        <list class="list">
            <cell>
                <div style="flex: 1;align-content: flex-start;align-items: flex-start">
                    <text style="font-size: 40;margin: 20">地区分类</text>
                </div>
            </cell>
             <cell>
                 <pccatgrid :taghref="taghref" :pageNo="0"></pccatgrid>
             </cell>
            <cell>
                <div style="flex: 1;align-content: flex-start;align-items: flex-start">
                    <text style="height: 1;background-color: #282c34"></text>
                </div>
            </cell>

            <cell>
                <div style="flex: 1;align-content: flex-start;align-items: flex-start">
                    <text style="font-size: 40;margin: 20">图片分类</text>
                </div>
            </cell>
            <cell>
                <pccatgrid :taghref="taghref" :pageNo="1"></pccatgrid>
            </cell>
            <cell>
                <div style="flex: 1;align-content: flex-start;align-items: flex-start">
                    <text style="height: 1;background-color: #282c34"></text>
                </div>
            </cell>

            <cell>
                <div style="flex: 1;align-content: flex-start;align-items: flex-start">
                    <text style="font-size: 40;margin: 20">名站写真</text>
                </div>
            </cell>
            <cell>
                <pccatgrid :taghref="taghref" :pageNo="2"></pccatgrid>
            </cell>
            <cell>
                <div style="flex: 1;align-content: flex-start;align-items: flex-start">
                    <text style="height: 1;background-color: #282c34"></text>
                </div>
            </cell>
            <cell>
                <div style="flex: 1;align-content: flex-start;align-items: flex-start">
                    <text style="font-size: 40;margin: 20">日本套图</text>
                </div>
            </cell>
            <cell>
                <pccatgrid :taghref="taghref" :pageNo="3"></pccatgrid>
            </cell>
            <cell>
                <div style="flex: 1;align-content: flex-start;align-items: flex-start">
                    <text style="height: 1;background-color: #282c34"></text>
                </div>
            </cell>
        </list>
    </div>
</template>

<script>
    import  navbar_v from '../template/navbar_v.vue'
    import  pccatgrid from '../cat/pccatgrid.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
    var zjito = require('../zjito');

    export default{
        components: {
            pccatgrid,
            navbar_v,

        },

        data(){
            return{
                taghref:zjito.getpc_cat(),
                title:"全部导航"
            }
        },
        created: function(){


        },
        methods:{


        }

    }
</script>

<style>
    .refresh-view{
        height:100;
        width:750;
        align-items:center;
    }
    .indicator {
        color: #888888;
        font-size: 42px;
        text-align: center;
    }
    .loading {
        justify-content: center;
    }
    .indicator_loading {
        color: #888888;
        font-size: 42px;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
    }
</style>