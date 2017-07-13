<template>
    <div>
        <div class="nav_bar">
            <div class="nav_back" @onclick="nativeback">
                <image class="img" :src="getImgUrl(leftsrc)" v-if="shownleft"></image>
                <!--http://192.168.1.15:8080/mmjpg/images/search.png-->
            </div>
            <div class="nav_title">
                <text class="nav_text">{{title}}</text>
                <!--<image class="imglogo" src="{{getImgUrl('../images/logo.png')}}" if="{{shownleft}}"></image>-->
            </div>
            <div class="nav_right_menu">
                <div class="nav_right_menu" v-if="shown" @onclick="onright">
                    <image class="img_menu" :src="getImgUrl('./images/search.png')"></image>
                </div>
            </div>
        </div>
        <div class="nav_line"></div>
    </div>
</template>

<script>
    var meizitu = require('../meizitu');
    const navigator = weex.requireModule('navigator')

    export default {
        data() {
            return {
                title: '妹子图',
                type: 0,
                shown: true,
                showStatusBar: 0,
                nav_text_top: 0,
                shownleft: true,
                leftsrc: './images/menu.png'
            }

        },
        props: ['title','shown','leftsrc'],
        created: function () {
            this.platform = this.$getConfig().env.platform;
            if (this.platform == 'iOS') {
                this.showStatusBar = 1;
            }
            if (typeof window === 'object') {
                this.nav_text_top = 1;
            } else {
                this.nav_text_top = 0;
            }
            if(this.leftsrc==undefined){
                this.leftsrc= './images/menu.png';
            }
            if(this.title==undefined){
                this.title= '妹子图';
            }
        },
        ready: function () {


        },

        methods: {
            nativeback: function (e) {
//                var params = {
//                    'animated': 'true'
//                };
//                navigator.pop(params, event => {
//
//                });
                this._parent.togglemenu();
            },
            onright: function (e) {
                console.log('navbar == onright');
                this._parent.onright();

            },

            getImgUrl: function (url) {
                return meizitu.getImageUrl(url);
            },

            setLeftImage: function (res) {
                this.leftImage = res;
//                console.log('navbar == res'+res);
            },

            setRightImage: function (res) {
                this.rightImage = res;
//                    console.log('navbar == res'+res);
            }

        }
    }
</script>

<style>
    .nav_bar {
        display: flex;
        flex-direction: row;
        height: 100px;
        justify-content: center;
        align-items: center;
        background-color: #FF6B9C;
    }

    .nav_bar-0 {
        background-color: #FF6B9C;
    }

    .nav_bar-1 {
        background-color: #FF6B9C;
    }

    .nav_text {
        font-size: 20wx;;
        flex: 1;
        justify-content: center;
        align-items: center;
        margin-top: 1px;
        color: #ffffff;
    }

    .nav_text_top-0 {
        margin-top: 1px;
    }

    .nav_text_top-1 {
        margin-top: 1px;
    }

    .nav_text-0 {
        color: #FFFFFF;
    }

    .nav_text-1 {
        color: #fff;
    }

    .nav_title {
        flex: 1;
        margin-left: 10px;
        margin-right: 10px;
        justify-content: center;
        align-items: center;
    }

    .nav_back {
        justify-content: center;
        align-items: center;
        width: 45wx;
        height: 80;
    }

    .nav_right_menu {
        width: 45wx;
        height: 80;
        justify-content: center;
        align-items: center;
    }

    .img {
        width: 70;
        height: 70;
        margin-left: 20;
        padding: 10;
    }

    .nav_back-0:active {
        background-color: #000;
    }

    .nav_back-1:active {
        background-color: #000
    }

    .nav_right_menu-0 {
        background-color: #000;
    }

    .nav_right_menu-1 {
        background-color: #000;
    }

    .img_menu {
        width: 50;
        height: 50;
        margin-right: 20;
    }

    .imglogo{
        width: 240;
        flex: 1;
        height: 50;
    }
    .nav_line {
        height: 1px;

    }

    .nav_line-0 {
        background-color: #D8D8D8;
    }

    .nav_line-1 {
        background-color: #192c46;
    }

    .status_bar_ios {
        height: 20wx;
    }

    .status_bar-0 {
        background-color: #000;
    }

    .status_bar-1 {
        background-color: #000;
    }
</style>