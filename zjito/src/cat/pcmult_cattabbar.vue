<template>
  <div style="flex-direction: column;">
    <tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></tabbar>
  </div>
</template>

<script>
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexZjitoJsoupModule = weex.requireModule('weexZjitoJsoupModule');
    var zjito = require('../zjito');
  module.exports = {
    data: function () {
      return {
          tabItems: [],
          taghref:zjito.getpc_cat(),
          pageNo: 0,
      }
    },
    components: {
      tabbar: require('../template/tabbar.vue')
    },
    created: function() {
        var self = this;
        var ctaghref = self.$getConfig().taghref;
        if(ctaghref!=undefined){
            self.taghref = ctaghref;
        }
        self.refresh();
    },
    methods: {
      tabBarOnClick: function (e) {
        console.log('tabBarOnClick', e.index)
      },
        refresh:function(){
            var self = this;
            var url = self.taghref;
//                if(self.pageNo==1){
//                    url = self.taghref;
//                }else{
//                    url = self.taghref+"?idx="+self.pageNo;
//                }
            console.log('url==='+url);
            var params = {
                url:url,
                pageNo: self.pageNo
            };
            weexZjitoJsoupModule.pccatlist(params,function(e){
                var json = JSON.parse(e);
//                    if(self.pageNo==1){
                self.tabItems.splice(0, self.tabItems.length);
//                    }
                if (json.list) {
                    if (json.list && json.list.length > 0) {
                        for (var i = 0; i < json.list.length; i++) {
                            var tag = json.list[i];
                            var tabitem ={
                                index: i,
                                title: tag.alt,
                                titleColor: '#000000',
                                icon: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                                image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                                selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
                                src: zjito.getPathUrl('search/pcsearchimglist.js'),
                                visibility: 'hidden',
                            };
                            if(i==0){
                                tabitem.visibility = 'visible';
                            }
                            self.tabItems.push(tabitem);
                        }
                    }
                }


            });
        }
    }
  }
</script>
