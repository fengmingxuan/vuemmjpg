var BASE_URL = {
    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
    IP: 'raw.githubusercontent.com/fengmingxuan/vuemmjpg/master',
    HTTP: 'https://',//https:// http://

};

var MEITUBA = {
    pc_meituba:"http://www.meituba.com/",
    pc_yijing:"http://www.meituba.com/yijing/",
    pc_meinv:"http://www.meituba.com/meinv/",
    pc_other:"http://www.meituba.com/tstx/ylbg/",
    pc_other_main:"http://www.meituba.com/tstx/",
    pc_article:"http://www.meituba.com/yijing/35141.html",
    pc_other_article:"http://www.meituba.com/tstx/ylbg/62425.html",
    pc_tag:"http://www.meituba.com/tag/",
    pc_tag_img:"http://www.meituba.com/tag/DGC.html",
    pc_search:"http://www.meituba.com/plus/search.php?q=%E5%A6%B9%E5%A6%B9",
    pc_search_url:"http://www.meituba.com/plus/search.php?q=",
    pc_new:"http://www.meituba.com/new/",
    m_channel:"http://m.meituba.com/xinggan/",
    m_article:"http://m.meituba.com/xinggan/60954.html",
    m_meinv:"http://m.meituba.com/meinv/",
    m_meituba:"http://m.meituba.com",
    m_search:"http://m.meituba.com/plus/search.php?q=%E7%BE%8E%E5%A5%B3",
    m_search_url:"http://m.meituba.com/plus/search.php?q=",
    m_tags:"http://m.meituba.com/tag/"

};
exports.getm_tags= function () {
    var url = MEITUBA.m_tags;
    console.log('m_tags==' + url);
    return url;
};
exports.getm_search_url= function () {
    var url = MEITUBA.m_search_url;
    console.log('m_search_url==' + url);
    return url;
};
exports.getm_search= function () {
    var url = MEITUBA.m_search;
    console.log('m_search==' + url);
    return url;
};
exports.getm_meituba= function () {
    var url = MEITUBA.m_meituba;
    console.log('m_meituba==' + url);
    return url;
};
exports.getm_meinv= function () {
    var url = MEITUBA.m_meinv;
    console.log('m_meinv==' + url);
    return url;
};
exports.getm_article= function () {
    var url = MEITUBA.m_article;
    console.log('m_article==' + url);
    return url;
};
exports.getm_channel = function () {
    var url = MEITUBA.m_channel;
    console.log('m_channel==' + url);
    return url;
};
exports.getpc_new = function () {
    var url = MEITUBA.pc_new;
    console.log('pc_new==' + url);
    return url;
};
exports.getpc_search_url = function () {
    var url = MEITUBA.pc_search_url;
    console.log('pc_search_url==' + url);
    return url;
};
exports.getpc_search = function () {
    var url = MEITUBA.pc_search;
    console.log('pc_search==' + url);
    return url;
};
exports.getpc_tag_img = function () {
    var url = MEITUBA.pc_tag_img;
    console.log('pc_tag_img==' + url);
    return url;
};
exports.getpc_tag = function () {
    var url = MEITUBA.pc_tag;
    console.log('pc_tag==' + url);
    return url;
};
exports.getpc_other_article = function () {
    var url = MEITUBA.pc_other_article;
    console.log('pc_other_article==' + url);
    return url;
};
exports.getpc_article = function () {
    var url = MEITUBA.pc_article;
    console.log('pc_article==' + url);
    return url;
};
exports.getpc_other_main = function () {
    var url = MEITUBA.pc_other_main;
    console.log('pc_other_main==' + url);
    return url;
};
exports.getpc_other = function () {
    var url = MEITUBA.pc_other;
    console.log('pc_other==' + url);
    return url;
};
exports.getpc_meinv = function () {
    var url = MEITUBA.pc_meinv;
    console.log('pc_meinv==' + url);
    return url;
};
exports.getpc_yijing = function () {
    var url = MEITUBA.pc_yijing;
    console.log('pc_yijing==' + url);
    return url;
};
exports.getpc_meituba = function () {
    var url = MEITUBA.pc_meituba;
    console.log('pc_meituba==' + url);
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
        url = BASE_URL.HTTP + BASE_URL.IP + '/meituba' + path.substring(1, path.length);
    } else {
        url = BASE_URL.HTTP + BASE_URL.IP + '/meituba' + path.substring(1, path.length);

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
            if (host.endsWith(':8080/meituba') || host.endsWith(':12580/meituba')) {
                host = host.replace('/meituba', '');
                // console.log('replace local test storm name');
            }
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
        if (typeof window === 'object') {
            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./meituba/build/src/' : BASE_URL.HTTP + host + '/meituba/build/src/';
        } else {
            nativeBase = BASE_URL.HTTP + host + '/meituba/build/src/';
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
