<template>
    <div>
        <list>
            <cell v-for="stockitem in stockArray">
                <stock_news_item :stockitem="stockitem"></stock_news_item>
            </cell>
        </list>
    </div>
</template>

<script>
    import  stock_news_item from '../stocknews/stock_news_item.vue'
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    var weexEventModule = weex.requireModule('weexEventModule');
    export default{
        components: {
            stock_news_item
        },

        data(){
            return{
                stockArray:[]
            }
        },
        created: function(){
            var self = this;
            self.refresh();

        },
        methods:{
            refresh:function(){
                var self = this;
                stream.fetch({
                        method:'GET',
                        url:"http://api.taoguba.sp/free/topic/apiGetForums?blockID=1&pageNo=1&flag=0",
                        headers:{
                            'Content-Type':'application/x-www-form-urlencoded',
                        }
                    },
                    function(ret){
                        if(!ret.ok){
                              //modal.toast({"message":"Network Error!",'duration':2}); 
                        }else{
                            var json = JSON.parse(ret.data);
                            for(var i = 0; i < json.dto.length;i++){
                                self.stockArray.push(json.dto[i]);
                            }
                        } },
                    function(res){

                      }
                );

            }

        }

    }
</script>

<style>
    .refresh-view{
        height:100;
        width:750;
        align-items:center;
    }

    .indicator{
        width:60;
        height:60;
        color:#889967;
    }
</style>