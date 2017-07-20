var BASE_URL = {
    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
    IP: '192.168.1.15:8080',
    HTTP: 'http://',//https:// http://

};

var MEITU = {
    pc_meitu:"https://www.4493.com/",
    pc_xingganmote:"https://www.4493.com/xingganmote/",
    pc_xingganmote_image:"https://www.4493.com/xingganmote/126139/1.htm",
    pc_new4493content1:"https://gg.dsxdn.com/4493/new4493content1.js",
    pc_new4493content:"https://gg.dsxdn.com/4493/new4493content.js",
    pc_top:"https://www.4493.com/top.html",
    pc_xingganmote_image_all:"https://www.4493.com/xingganmote/126139.htm",
    pc_star:"https://www.4493.com/star/yujiekong/",
    pc_top_paihang:"https://www.4493.com/top/xinggan.html",
    pc_tag:"https://www.4493.com/tag/%D1%FD%D1%DE/",
    pc_xilie:"https://www.4493.com/xilie.html",
    pc_xilie_top:"https://gg.dsxdn.com/4493/xilie_top.js"


};
exports.getpc_xilie_top = function () {
    var url = MEITU.pc_xilie_top;
    console.log('pc_xilie_top==' + url);
    return url;
};
exports.getpc_xilie = function () {
    var url = MEITU.pc_xilie;
    console.log('pc_xilie==' + url);
    return url;
};
exports.getpc_tag = function () {
    var url = MEITU.pc_tag;
    console.log('pc_tag==' + url);
    return url;
};
exports.getpc_top_paihang = function () {
    var url = MEITU.pc_top_paihang;
    console.log('pc_top_paihang==' + url);
    return url;
};
exports.getpc_star = function () {
    var url = MEITU.pc_star;
    console.log('pc_star==' + url);
    return url;
};
exports.getpc_xingganmote_image_all = function () {
    var url = MEITU.pc_xingganmote_image_all;
    console.log('pc_xingganmote_image_all==' + url);
    return url;
};
exports.getpc_top = function () {
    var url = MEITU.pc_top;
    console.log('pc_top==' + url);
    return url;
};
exports.getpc_new4493content = function () {
    var url = MEITU.pc_new4493content;
    console.log('pc_new4493content==' + url);
    return url;
};
exports.getpc_new4493content1 = function () {
    var url = MEITU.pc_new4493content1;
    console.log('pc_new4493content1==' + url);
    return url;
};
exports.getpc_xingganmote_image = function () {
    var url = MEITU.pc_xingganmote_image;
    console.log('pc_xingganmote_image==' + url);
    return url;
};
exports.getpc_xingganmote = function () {
    var url = MEITU.pc_xingganmote;
    console.log('pc_xingganmote==' + url);
    return url;
};

exports.getpc_meitu = function () {
    var url = MEITU.pc_meitu;
    console.log('pc_meitu==' + url);
    return url;
};


exports.getDefaultUrl = function (name) {
    var url;
    url = getBaseUrl(name, true) + name + ".js";
    console.log('getDefaultUrl==' + url);
    return url;
};

exports.getDefaultPathUrl = function (path) {
    var url;
    url = getBaseUrl(path, true) + path;
    console.log('getPathUrl==' + url);
    return url;
};

exports.getPathUrl = function (path, isnative) {
    var url;
    url = getBaseUrl(path, isnative) + path;
    console.log('getPathUrl==' + url);
    return url;
};

//获取线上资源文件地址
exports.getImageUrl = function (path) {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.HTTP + BASE_URL.IP + '/meitu4493' + path.substring(1, path.length);
    } else {
        url = BASE_URL.HTTP + BASE_URL.IP + '/meitu4493' + path.substring(1, path.length);

    }
    console.log('getImageUrl=='+url);
    return url;
};

exports.getUrl = function (path) {
    var url;
    url = BASE_URL.HTTP+BASE_URL.IP+'/'+path;
    console.log('getUrl==' + url);
    return url;
};

function getBaseUrl(bundleUrl, isnav) {
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/build/';
    }
    else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        //'localhost:8080';
        var host = BASE_URL.IP;
        // var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        // if (matches && matches.length >= 2) {
        //     host = matches[1];
        // }

        if (typeof window === 'object') {
            if (host.endsWith(':8080/meitu4493') || host.endsWith(':12580/meitu4493')) {
                host = host.replace('/meitu4493', '');
                // console.log('replace local test storm name');
            }
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
        if (typeof window === 'object') {
            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./meitu4493/build/src/' : BASE_URL.HTTP + host + '/meitu4493/build/src/';
        } else {
            nativeBase = BASE_URL.HTTP + host + '/meitu4493/build/src/';
            //放在官方仓库 'incubator-weex/examples/TGB_WEEX' 文件夹下编译的话，路径用这个
            // nativeBase = 'http://' + host.replace("8080","12580") + '/examples/build/TGB_WEEX/storm/src/';
        }
    }

    return nativeBase;
};


exports.getUrlParam = function getUrlParam(key) {
    var reg = new RegExp('[?|&]' + key + '=([^&]+)')
    var match = location.search.match(reg)
    return match && match[1]
}
