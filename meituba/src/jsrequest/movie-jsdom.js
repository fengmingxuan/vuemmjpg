const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
var myUtil = require('./myUtil.js');
var url="http://movie.douban.com/subject/11529526";
console.log(url);
myUtil.get(url,function(content,status){
    console.log("status:="+status);
    // var movie={}
    const dom = new JSDOM(content);
    console.log(dom.window.document.querySelector("div.nav-logo").textContent);
    // movie.name = $(content).find('span[property="v:itemreviewed"]').text();
    // movie.director = $(content).find('#info span:nth-child(1) a').text();
    // console.log(movie);
    // res.send(content);
});
