var BASE_URL = {
    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
    //http://git.oschina.net/fengmengchang/weex-mmjpg
    //http://git.oschina.net/fengmengchang/weex-mmjpg/raw/master/meitu4493/build/src/mainlist.js
    //raw.githubusercontent.com/fengmingxuan/vuemmjpg/master
    IP: 'raw.githubusercontent.com/fengmingxuan/vuemmjpg/master',
    HTTP: 'https://',//https:// http://

};

var DUODUO = {
    pc_weimeitupian:"http://www.duotoo.com/xingganmeinv/",
    pc_duotoo:"http://www.duotoo.com/",
    pc_image:"http://www.duotoo.com/xingganmeinv/56030.html"
};
exports.getpc_image = function () {
    var url = DUODUO.pc_image;
    console.log('pc_image==' + url);
    return url;
};
exports.getpc_duotoo = function () {
    var url = DUODUO.pc_duotoo;
    console.log('pc_duotoo==' + url);
    return url;
};

exports.getpc_weimeitupian = function () {
    var url = DUODUO.pc_weimeitupian;
    console.log('pc_weimeitupian==' + url);
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
        url = BASE_URL.HTTP + BASE_URL.IP + '/duoduo' + path.substring(1, path.length);
    } else {
        url = BASE_URL.HTTP + BASE_URL.IP + '/duoduo' + path.substring(1, path.length);

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
            if (host.endsWith(':8080/duoduo') || host.endsWith(':12580/duoduo')) {
                host = host.replace('/duoduo', '');
                // console.log('replace local test storm name');
            }
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
        if (typeof window === 'object') {
            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./duoduo/build/src/' : BASE_URL.HTTP + host + '/duoduo/build/src/';
        } else {
            nativeBase = BASE_URL.HTTP + host + '/duoduo/build/src/';
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
