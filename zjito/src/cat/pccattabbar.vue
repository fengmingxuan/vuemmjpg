<template>
    <div style="flex-direction: column;">
        <tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></tabbar>
    </div>
</template>

<script>
    var zjito = require('../zjito');
    var storage = weex.requireModule('storage');
    module.exports = {
        data: function () {
            return {
                tabItems: [
                    {
                        index: 0,
                        title: '首页',
                        titleColor: '#000000',
                        icon: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                        image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                        selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                        src: zjito.getPathUrl('main/mmainimgscroller.js'),
                        visibility: 'visible',
                        taghref: zjito.getpc_zjito()
                    },
                    {
                        index: 1,
                        title: '地区分类',
                        titleColor: '#000000',
                        icon: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                        image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
                        selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
                        src: zjito.getPathUrl('pager/pccat_pager.js'),
                        visibility: 'hidden',
                        taghref: zjito.getpc_cat()
                    },
                    {
                        index: 2,
                        title: '图片分类',
                        titleColor: '#000000',
                        icon: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                        image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                        selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
                        src: zjito.getPathUrl('pager/pccat_pager.js'),
                        visibility: 'hidden',
                        taghref: zjito.getpc_tupian()
                    },
                    {
                        index: 3,
                        title: '名站写真',
                        titleColor: '#000000',
                        icon: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                        image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                        selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
                        src: zjito.getPathUrl('pager/pccat_pager.js'),
                        visibility: 'hidden',
                        taghref: zjito.getpc_mingzhan()
                    },
                    {
                        index: 4,
                        title: '日本套图',
                        titleColor: '#000000',
                        icon: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                        image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                        selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
                        src: zjito.getPathUrl('pager/pccat_pager.js'),
                        visibility: 'hidden',
                        taghref: zjito.getpc_taotu()
                    }
                ],
            }
        },
        components: {
            tabbar: require('../template/tabbar.vue')
        },
        created: function () {
        },
        methods: {
            tabBarOnClick: function (e) {
                console.log('tabBarOnClick', e.index)
                var vm = this;
                if(e.index>0){
                    var taghref = vm.tabItems[e.index].taghref;
                    var params={
                        taghref:taghref,
                        pageNo:e.index-1
                    };
                    console.log('set [taghref]:'+JSON.stringify(params));
                    storage.setItem('taghref',params,function(s){
//                    console.log('set [taghref]:'+JSON.stringify(s));
                    });
                }

            }
        }
    }
</script>
