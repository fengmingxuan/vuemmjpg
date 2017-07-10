// var http = require('http');
//
//
// //http.request
//
// var options = {
//     hostname: 'mobile.weather.com.cn',
//     path: '/data/forecast/101010100.html?_=1381891660081',
// };
//
// var req = http.request(options, (res) => {
//     console.log(`STATUS: ${res.statusCode}`);
//     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//         console.log(`BODY: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data in response.')
//     })
// });
//
// req.on('error', (e) => {
//     console.log(`problem with request: ${e.message}`);
// });
//
// // write data to request body
// req.end();


//http.get方法获得数据

var http = require('http');
http.get("http://mobile.weather.com.cn/data/forecast/101010100.html?_=1381891660081", function(res) {
    var size = 0;
    var chunks = [];
  res.on('data', function(chunk){
      size += chunk.length;
      chunks.push(chunk);
  });
  res.on('end', function(){
      var data = Buffer.concat(chunks, size);
      console.log(data.toString())
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});