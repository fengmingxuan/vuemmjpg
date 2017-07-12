<template>
  <div style="flex-direction: column;">
    <tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></tabbar>
  </div>
</template>

<script>
    var stream = weex.requireModule('stream');
    var storage = weex.requireModule('storage');
    var modal = weex.requireModule('modal');
    var weexMeitubaJsoupModule = weex.requireModule('weexMeitubaJsoupModule');
    var meituba = require('../meituba');

  module.exports = {
    data: function () {
      return {
          tabItems: [],
          taghref:meituba.getpc_yijing(),
          pageNo: 1,
      }
    },
//      props: ['taghref'],
    components: {
      tabbar: require('../template/wxc_tabbar.vue')
    },
    created: function() {
        var self = this;
        var cpageNo = self.$getConfig().pageNo;
        if(cpageNo!=undefined){
            self.pageNo = cpageNo;
        }
        var ctaghref = self.$getConfig().taghref;
        if(ctaghref!=undefined){
            self.taghref = ctaghref;
        }
        self.refresh();
    },
      ready: function () {
          var vm = this;
//          vm.$on('tabBarOnClick', function (e) {
//              var detail = e.detail;
//              nativeLog('$dispatch tabBarOnClick ' + detail.index);
//
//              var taghref = vm.tabItems[detail.index].taghref;
//              storage.setItem('taghref',taghref,function(s){
//                  console.log('set [taghref]:'+JSON.stringify(s));
//              });
//          });


      },
    methods: {
      tabBarOnClick: function (e) {
        console.log('tabBarOnClick', e.index)
          var vm = this;
          var taghref = vm.tabItems[e.index].taghref;
          storage.setItem('taghref',taghref,function(s){
              console.log('set [taghref]:'+JSON.stringify(s));
          });
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
            weexMeitubaJsoupModule.pcnenuli(params,function(e){
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
                                src: meituba.getPathUrl('channelimg/pcchannel_imglist.js'),
                                visibility: 'hidden',
                                taghref:tag.href
                            };
                            if(i==0){
                                tabitem.visibility = 'visible';
                                tabitem.src= meituba.getPathUrl('mainnenu/pcmainnenu_imglist.js');
                            }else{
                                tabitem.src= meituba.getPathUrl('channelimg/pcchannel_imglist.js');
                            }
                            self.tabItems.push(tabitem);
                        }
                        var taghref = self.tabItems[0].taghref;
                        storage.setItem('taghref',taghref,function(s){
                            console.log('set [taghref]:'+JSON.stringify(s));
                        });
                    }
                }


            });
        }
    }
  }
</script>
