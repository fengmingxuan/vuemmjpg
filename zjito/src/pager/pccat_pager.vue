<template>
    <div class="content">
        <navbar_v :title="title"></navbar_v>
        <scroller class="tabclass" scroll-direction="horizontal">
            <div class="top_tab_item" v-for="item in  buttomData" @click="setIndex(item.index)">
                <div class="pointdiv">
                    <text class="rednum" v-if="davNum!=0 && item.index==1">{{davNum}}</text>
                </div>
                <text class="item_text">{{item.itemName}}</text>
            </div>
        </scroller>
        <div class="tablineclass">
            <div class="top_item_line" repeat="item in buttomData">
                <div class="lineClass">
                </div>
            </div>
        </div>
        <slider class="slider" append="tree" :interval="1000" needloop="false" :auto-play="false" @change="onchange"
                index="indexMetting" offScreenPageLimit="3"  style="height: 1200">
            <div v-for="item in buttomData">
                <pcimglist_notitlebar :ref="item.id"></pcimglist_notitlebar>
            </div>

        </slider>
    </div>
</template>

<script>
    const dom = weex.requireModule('dom')
    import  navbar_v from '../template/navbar_v.vue'
    import  pcimglist_notitlebar from '../search/pcimglist_notitlebar.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
    var zjito = require('../zjito');
    var img0 = '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg';
    var img1 = '//gw.alicdn.com/tps/i1/TB1M3sQMpXXXXakXXXXApNeJVXX-360-360.png';
    export default{
        components: {
            pcimglist_notitlebar,
            navbar_v

        },

        data() {
            return{
                skinType: 0,
                eventCnt: 0,
                togglePlayMsg: 'pause',
                indexMetting: 0,
                title: '',
                navBar_display: true,
                shown:false,
                screenHeight:0,
                platform: 'unknown',
    //            left_line_color: 'select_line_color-0',
    //            right_line_color: 'unselect_line_color-0',
                buttomData: [],
                davNum:0,//我的观点数
                davmargin:0,
                taghref:zjito.getpc_cat(),
            }
        },
        created(){
            this.platform = this.$getConfig().env.platform;
            var cskinType = this.$getConfig().skinType;
            if (this.platform == 'iOS') {
                this.screenHeight = this.$getConfig().env.deviceHeight / this.$getConfig().env.scale - 64;   
                this.navBar_display = false;
                var event_ios = require('@weex-module/event');
                event_ios.setNavbarTitle(this.title);
            }
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
            refresh: function () {
                var self = this;
                var url = self.taghref;
                var params = {
                    url:url,
                    pageNo: 0
                };
                weexZjitoJsoupModule.pccatlist(params, function (e) {
                    var json;
                    json = eval('(' + e + ')');
                    console.log('json===' + json);
                    self.buttomData.splice(0, self.buttomData.length);
                    if (json.list) {
                        if (json.list && json.list.length > 0) {
                            for (var i = 0; i < json.list.length; i++) {
                                var tag = json.list[i];
                                var tab = {
                                    index: i,
                                    itemName: tag.alt,
                                    itemNameColor: "item_text-select-0",
                                    itemLineColor:"select_line_color-0",
                                    id:"point_sub"+i,
                                    href:tag.href,
                                    isFirst:1
                                    // UrlUnSelect:"http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png"
                                };
                                console.log('tab==='+JSON.stringify(tab));
                                self.buttomData.push(tab);
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
//                        const el = this.$refs.item10[0];
//                        if (this.$vm('point_sub' + i).isFirst == 1) {
//                            this.$vm('point_sub' + i).autoRefresh();
//                        }
                        console.log("i==="+i)
                        if(i==0){
                            if(this.$refs.point_sub0[0].isFirst == 1){
                                this.$refs.point_sub0[0].autoRefresh();
                            }
                        }else if(i==1){
                            if(this.$refs.point_sub1[0].isFirst == 1){
                                this.$refs.point_sub1[0].autoRefresh();
                            }
                        }else if(i==2){
                            if(this.$refs.point_sub2[0].isFirst == 1){
                                this.$refs.point_sub2[0].autoRefresh();
                            }
                        }else if(i==3){
                            if(this.$refs.point_sub3[0].isFirst == 1){
                                this.$refs.point_sub3[0].autoRefresh();
                            }
                        }else if(i==4){
                            if(this.$refs.point_sub4[0].isFirst == 1){
                                this.$refs.point_sub4[0].autoRefresh();
                            }
                        }else if(i==5){
                            if(this.$refs.point_sub5[0].isFirst == 1){
                                this.$refs.point_sub5[0].autoRefresh();
                            }
                        }else if(i==6){
                            if(this.$refs.point_sub6[0].isFirst == 1){
                                this.$refs.point_sub6[0].autoRefresh();
                            }
                        }else if(i==7){
                            if(this.$refs.point_sub7[0].isFirst == 1){
                                this.$refs.point_sub7[0].autoRefresh();
                            }
                        }else if(i==8){
                            if(this.$refs.point_sub8[0].isFirst == 1){
                                this.$refs.point_sub8[0].autoRefresh();
                            }
                        }
                    } else {
                        tabItem.imgUrl = tabItem.imgUrlUnSelect;
                        tabItem.itemNameColor = "item_text-" + this.skinType;
                        tabItem.itemLineColor= "unselect_line_color-" + this.skinType;
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
        width: 750;
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
        /*flex: 1;*/
        align-items: center;
        justify-content: center;
        width: 150px;
        margin-top: -40;
    }

    .img {
        width: 20wx;
        height: 20wx;
    }


    .item_text {
        font-size: 15wx;
        color: #666666;
        flex: 1;
        top:-5wx;
        text-align: center;
        /*background-color: #00ff00;*/
    }

    .tablineclass {
        width: 750;
        height: 2wx;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .top_item_line {
        flex: 1;
        height: 2wx;
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
        flex: 1;
        height: 2wx;
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