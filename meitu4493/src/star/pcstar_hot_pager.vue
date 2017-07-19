<template>
    <scroller class="content">
        <navbar_v :title="title" :shown="shown" :leftsrc="leftsrc"></navbar_v>
        <slider class="sliderpager" interval="3000" auto-play="false">
            <div class="framepager" v-for="img in stockArray">
                <image class="imagepager" resize="cover" :src="img.src" @click="todetail(img.href,img.alt)"></image>
            </div>
        </slider>
        <scroller class="tabclass" scroll-direction="horizontal">
            <div class="top_tab_item" v-for="item in  buttomData" @click="setIndex(item.index)" :ref="item.indextab">
                <div class="pointdiv">
                    <text class="rednum" v-if="davNum!=0 && item.index==1">{{davNum}}</text>
                </div>
                <text class="item_text" v-bind:style="{ color: item.item_text_select}">{{item.itemName}}</text>
            </div>
        </scroller>
        <scroller class="tabclass_line" scroll-direction="horizontal">
           <div class="top_item_line" v-for="item in buttomData" :ref="item.indexline">
                <text class="item_text" v-bind:style="{ backgroundColor: item.item_text_select}">
                </text>
             </div>
        </scroller>
        <slider class="slider" append="tree" :interval="1000" needloop="false" :auto-play="false" @change="onchange"
                index="indexMetting" offScreenPageLimit="3">
            <div v-for="item in buttomData" style="width: 750;">
                <pcstar_imgscroller :ref="item.id" :taghref="item.href"></pcstar_imgscroller>
            </div>

        </slider>
    </scroller>
</template>

<script>
    const dom = weex.requireModule('dom')
    var storage = weex.requireModule('storage');
    import  navbar_v from '../template/navbar_v.vue'
    import  pcstar_imgscroller from '../star/pcstar_imgscroller.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexMeiu4493JsoupModule = weex.requireModule('weexMeiu4493JsoupModule');
    var meituba = require('../meitu');
    var img0 = '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg';
    var img1 = '//gw.alicdn.com/tps/i1/TB1M3sQMpXXXXakXXXXApNeJVXX-360-360.png';
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            pcstar_imgscroller,
            navbar_v

        },
        props: ['taghref'],
        data() {
            return{
                skinType: 0,
                eventCnt: 0,
                togglePlayMsg: 'pause',
                indexMetting: 0,
                title: '最新',
                navBar_display: true,
                shown:false,
                screenHeight:0,
                platform: 'unknown',
    //            left_line_color: 'select_line_color-0',
    //            right_line_color: 'unselect_line_color-0',
                buttomData: [],
                davNum:0,//我的观点数
                davmargin:0,
                taghref:meituba.getpc_star(),
                pageNo:'0',
                shown:false,
                leftsrc:'./images/back.png',
                stockArray:[]

            }
        },
        created(){
//            this.platform = this.$getConfig().env.platform;
//            var cskinType = this.$getConfig().skinType;
//            if (this.platform == 'iOS') {
//                this.screenHeight = this.$getConfig().env.deviceHeight / this.$getConfig().env.scale - 64;
//                this.navBar_display = false;
//                var event_ios = require('@weex-module/event');
//                event_ios.setNavbarTitle(this.title);
//            }
            var self = this;
            var ctaghref = self.$getConfig().taghref;
            if(ctaghref!=undefined){
                self.taghref = ctaghref;
            }
            var ctitle = self.$getConfig().title;
            if(ctitle!=undefined){
                self.title = ctitle;
            }
            console.log('title=='+self.title+';taghref=='+self.taghref)
//            storage.getItem('pageNo',function(s){
//                console.log('get pageNo result:'+JSON.stringify(s));
//                var json  = s.data;
//                console.log('json===' + json);
//
//                json = eval('(' + json + ')');
//
//                var staghref = json.taghref;
//                if(staghref!=undefined){
//                    self.taghref = staghref;
//                }
//                console.log('taghref=='+staghref);
//
//                var spageNo = json.pageNo;
//                if(spageNo!=undefined){
//                    self.pageNo = spageNo;
//                }
//                console.log('pageNo=='+spageNo);
//                self.refresh();
//            });
            this.refresh();
//            if (this.platform == 'iOS') {
//
//            } else if (this.platform == 'android') {
//
//            } else {
//                cskinType = taoguba.getUrlParam('skinType');
//            }
//            if (cskinType == undefined) {
//                cskinType = 0;
//            }
//            this.skinType = cskinType;
//
//            var cdavNum = this.$getConfig().davNum;
//            this.setdavNum(cdavNum);
        },
        methods: {
            todetail:function (e,alt){
                weexEventModule.startWebViewActivity(e);
            },
            refresh: function () {
                var self = this;
                if(self.taghref==undefined){
                    self.taghref=meituba.getpc_star();
                    self.pageNo = '0';
                    console.log('not from tabbar');
                }
                var url = self.taghref;

                for (var i = 0; i < 2; i++) {
                    var tag={
                        alt:"最新",
                        href:url
                    };
                    if(i==1){
                        tag.alt="热门";
                        tag.href=url+"index-hot-1.htm";
                    }

                    var tab = {
                        index: i,
                        itemName: tag.alt,
                        itemNameColor: "item_text-select-0",
                        itemLineColor:"select_line_color-0",
                        item_text_select:"#555555",
                        id:"point_sub"+i,
                        href:tag.href,
                        isFirst:1,
                        indextab: 'tab'+i,
                        indexline: 'line'+i,
                        pageNo:i+''
                        // UrlUnSelect:"http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png"
                    };
                    console.log('tab==='+JSON.stringify(tab));
                    self.buttomData.push(tab);
//                    if(i==0){
//                        var taghref = tab.href;
//                        console.log("taghref==="+taghref)
//                        storage.setItem('taghref',taghref,function(s){
//                            console.log('set [taghref]:'+JSON.stringify(s));
//
//                        });
//                    }
                }

                var params = {
                    url:self.taghref,
                    pageNo: self.pageNo
                };
                weexMeiu4493JsoupModule.pcstarpager(params,function(e){
                    var json = JSON.parse(e);
                    self.stockArray.splice(0, self.stockArray.length);
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i++) {
                                var tag = json.list[i];
                                self.stockArray.push(tag);
                            }
                        }
                    }


                });

            },
            onchange: function (params) {
                var index = params.index;
                console.log("onchange==="+index)
                this.setIndex(index);
//                if ('android' == this.platform) {
//                    weexEventModule.setOnDrawerBackEnabled('' + index);
//                }
            },
            setIndex: function (index) {
                console.log("setIndex=="+index)
                this.indexMetting = index;
                this.title = this.buttomData[index].itemName;
//                if (index == 0) {
//                    this.left_line_color = 'select_line_color-' + this.skinType;
//                    this.right_line_color = 'unselect_line_color-' + this.skinType;
//                }
//                else {
//                    this.left_line_color = 'unselect_line_color-' + this.skinType;
//                    this.right_line_color = 'select_line_color-' + this.skinType;
//                }
                // console.log('\n======\n'+JSON.stringify(this.buttomData));
                for (var i = 0; i < this.buttomData.length; i++) {
                    var tabItem = this.buttomData[i];
                    if (i == index) {
                        tabItem.imgUrl = tabItem.imgUrlSelect;
                        tabItem.itemNameColor = "item_text-select-" + this.skinType;
                        tabItem.itemLineColor= "select_line_color-" + this.skinType;
                        tabItem.item_text_select="#1191f6"

//                        var taghref = tabItem.href;
//                        console.log("taghref==="+taghref)
//                        storage.setItem('taghref',taghref,function(s){
//                            console.log('set [taghref]:'+JSON.stringify(s));
//
//                        });
//                        const el = this.$refs.item10[0];
//                        if (this.$vm('point_sub' + i).isFirst == 1) {
//                            this.$vm('point_sub' + i).autoRefresh();
//                        }


                        console.log("i==="+i)
//                        if(i==0){
//                            if(this.$refs.point_sub0[0].isFirst == 1){
//                                this.$refs.point_sub0[0].autoRefresh();
//                                const eltab = this.$refs.tab0[0];
//                                dom.scrollToElement(eltab, { offset: 0 });
//
//                                const elline = this.$refs.line0[0];
//                                dom.scrollToElement(elline, { offset: 0 });
//                            }
//                        }else if(i==1){
//                            if(this.$refs.point_sub1[0].isFirst == 1){
//                                this.$refs.point_sub1[0].autoRefresh();
//                                const eltab = this.$refs.tab1[0];
//                                dom.scrollToElement(eltab, { offset: 1 });
//
//                                const elline = this.$refs.line1[0];
//                                dom.scrollToElement(elline, { offset: 1 });
//                            }
//                        }
                    } else {
                        tabItem.imgUrl = tabItem.imgUrlUnSelect;
                        tabItem.itemNameColor = "item_text-" + this.skinType;
                        tabItem.itemLineColor= "unselect_line_color-" + this.skinType;
                        tabItem.item_text_select="#555555"
                    }
                }
            },
//            //设置留言管理数字
//            setdavNum:function (num) {
//                var cdavNum = num;
//                if(cdavNum==undefined){
//                    cdavNum = 0;
//                }
//                if(cdavNum>99){
//                    cdavNum = 99;
//                }
//                if(cdavNum<10){
//                    this.davmargin=0;
//                }else{
//                    this.davmargin=1;
//                }
//                this.davNum = cdavNum;
//            }
        },
        ready(){

            this.indexMetting = 0;
            this.setIndex(this.indexMetting);


        },
    };
</script>

<style>
    .imagepager {
        width: 750px;
        margin:1;
        height: 350px;
    }
    .sliderpager {
        width: 750px;
        margin:1;
        height: 350px;
    }
    .framepager {
        width: 750px;
        flex-direction: column;
        height: 350px;
    }

    .pointdiv {
        align-items: center;
        justify-content: center;
        height: 15wx;
        width: 18wx;
        flex: 1;
        margin-left: 75wx;
        margin-top: 2wx;
        flex-direction: column;
    }

    .rednum {
        background-color: #ff531e;
        width: 15wx;
        height: 12wx;
        border-radius: 30;
        align-items: center;
        justify-content: center;
        color: #ff531e;
        font-size: 8wx;

        padding-top: 2wx;
        padding-bottom: 2wx;
    }
    .rednum-0{
        padding-right: 2wx;
        padding-left: 4wx;
    }
    .rednum-1{
        padding-right: 2wx;
        padding-left: 2wx;
    }
    .slider {
        flex-direction: row;
        width: 750px;
        top: 0;
        left: 0;
        /*right: 0;*/
        bottom: 0;
        margin-bottom: 5wx;
    }

    .content {
        flex-direction: column;
        width: 750;
    }

    .tabclass {
        width: 750;
        height: 80;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        bottom: 0;
        left: 0;
        right: 0;

    }
    .tabclass_line {
        width: 750;
        height: 2;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        bottom: 0;
        left: 0;
        right: 0;

    }

    .content-0 {
        background-color: #F6F6F6;
    }

    .content-1 {
        background-color: #15253d;
    }

    .tabclass-0 {
        background-color: #333;
    }

    .tabclass-1 {
        background-color: #132237;
    }

    .top_tab_item {
        flex: 1;
        align-items: center;
        justify-content: center;
        /*width: 150px;*/
        margin-top: -40;
    }

    .img {
        width: 20wx;
        height: 20wx;
    }


    .item_text {
        font-size: 15wx;
        flex: 1;
        top:-5wx;
        text-align: center;
        /*background-color: #00ff00;*/
    }

    .tablineclass {
        height: 2;
    }

    .top_item_line {
        flex: 1;
        height: 2;
        /*width: 150px;*/
    }

    .item_text-0 {
        color: #555555;
    }

    .item_text-1 {
        color: #999999;
    }

    .item_text-select-0 {
        color: #1191f6;
    }

    .item_text-select-1 {
        color: #005e91;
    }

    .lineClass {
        /*flex: 1;*/
        height: 2;
        width: 150px;
    }

    .select_line_color-0 {
        background-color: #1191f6;
    }

    .select_line_color-1 {
        background-color: #005e91;
    }

    .unselect_line_color-0 {
        background-color: #DDDDDD;
    }

    .unselect_line_color-1 {
        background-color: #0e1929;
    }
</style>