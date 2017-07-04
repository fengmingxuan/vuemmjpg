var BASE_URL = {
    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
    IP: '192.168.1.15:8080',
    HTTP: 'http://',//https:// http://

};

var MZITU = {
    mzitu_pc:"http://www.mzitu.com/",
    mzitu_pc_zhuanti:"http://www.mzitu.com/zhuanti/",
    mzitu_pc_zipai:"http://www.mzitu.com/zipai/",
    mzitu_pc_all:"http://www.mzitu.com/all/",
    mzitu_pc_search:"http://www.mzitu.com/search/",
    mzitu_pc_image:"http://www.mzitu.com/96554",
    mzitu_m:"http://m.mzitu.com/",
    mzitu_m_zipai:"http://m.mzitu.com/zipai/",
    mzitu_m_zhuanti:"http://m.mzitu.com/zhuanti/",
    mzitu_m_all:"http://m.mzitu.com/all/",
};
exports.getmzitu_m_all = function () {
    var url = MZITU.mzitu_m_all;
    console.log('mzitu_m_all==' + url);
    return url;
};
exports.getmzitu_m_zhuanti = function () {
    var url = MZITU.mzitu_m_zhuanti;
    console.log('mzitu_m_zhuanti==' + url);
    return url;
};
exports.getmzitu_m_zipai = function () {
    var url = MZITU.mzitu_m_zipai;
    console.log('mzitu_m_zipai==' + url);
    return url;
};
exports.getmzitu_m = function () {
    var url = MZITU.mzitu_m;
    console.log('mzitu_m==' + url);
    return url;
};
exports.getmzitu_pc_image = function () {
    var url = MZITU.mzitu_pc_image;
    console.log('mzitu_pc_image==' + url);
    return url;
};
exports.getmzitu_pc_search = function () {
    var url = MZITU.mzitu_pc_search;
    console.log('mzitu_pc_search==' + url);
    return url;
};
exports.getmzitu_pc_all = function () {
    var url = MZITU.mzitu_pc_all;
    console.log('mzitu_pc_all==' + url);
    return url;
};
exports.getmzitu_pc_zipai = function () {
    var url = MZITU.mzitu_pc_zipai;
    console.log('mzitu_pc_zipai==' + url);
    return url;
};
exports.getmzitu_pc_zhuanti = function () {
    var url = MZITU.mzitu_pc_zhuanti;
    console.log('mzitu_pc_zhuanti==' + url);
    return url;
};
exports.getmzitu_pc = function () {
    var url = MZITU.mzitu_pc;
    console.log('mzitu_pc==' + url);
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
        url = BASE_URL.HTTP + BASE_URL.IP + '/mzitu' + path.substring(1, path.length);
    } else {
        url = BASE_URL.HTTP + BASE_URL.IP + '/mzitu' + path.substring(1, path.length);

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
            if (host.endsWith(':8080/mzitu') || host.endsWith(':12580/mzitu')) {
                host = host.replace('/mzitu', '');
                // console.log('replace local test storm name');
            }
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
        if (typeof window === 'object') {
            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./mzitu/build/src/' : BASE_URL.HTTP + host + '/mzitu/build/src/';
        } else {
            nativeBase = BASE_URL.HTTP + host + '/mzitu/build/src/';
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
