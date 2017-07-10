var myUtil = require('./myUtil.js');
var $ = require('jQuery');
exports.index = function(req, res){
var url="http://movie.douban.com/subject/11529526";
console.log(url);
myUtil.get(url,function(content,status){
    console.log("status:="+status);
    var movie={}
    movie.name = $(content).find('span[property="v:itemreviewed"]').text();
    movie.director = $(content).find('#info span:nth-child(1) a').text();
    console.log(movie);
    res.send(content);
});
};