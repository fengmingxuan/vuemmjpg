var BASE_URL = {
    IP: 'raw.githubusercontent.com/fengmingxuan/vuemmjpg/master',
    HTTP: 'https://',//https:// http://
};

var MMJPG = {
    m_mmjpg:"http://www.mmjpg.com/",
    m_mmjpg_article:"http://www.mmjpg.com/mm/1030/",
    m_mmjpg_hot:"http://www.mmjpg.com/hot/",
    m_mmjpg_top:"http://www.mmjpg.com/top/",
    m_mmjpg_top_page:"http://www.mmjpg.com/getmore.php?page=",
    m_mmjpg_more:"http://www.mmjpg.com/more/",
    m_mmjpg_search:"http://www.mmjpg.com/search.php",
    m_mmjpg_m:"http://m.mmjpg.com/",
    m_mmjpg_m_more:"http://m.mmjpg.com/more/",
    m_mmjpg_m_hot:"http://m.mmjpg.com/hot/",
    m_mmjpg_article_m:"http://m.mmjpg.com/mm/1033/",
};
exports.getm_mmjpg_article_m = function () {
    var url = MMJPG.m_mmjpg_article_m;
    console.log('m_mmjpg_article_m==' + url);
    return url;
};
exports.getm_mmjpg_m_hot = function () {
    var url = MMJPG.m_mmjpg_m_hot;
    console.log('m_mmjpg_m_hot==' + url);
    return url;
};
exports.getm_mmjpg_m_more = function () {
    var url = MMJPG.m_mmjpg_m_more;
    console.log('m_mmjpg_m_more==' + url);
    return url;
};
exports.getm_mmjpg_m = function () {
    var url = MMJPG.m_mmjpg_m;
    console.log('m_mmjpg_m==' + url);
    return url;
};
exports.getm_mmjpg_search = function () {
    var url = MMJPG.m_mmjpg_search;
    console.log('m_mmjpg_search==' + url);
    return url;
};
exports.getm_mmjpg_more = function () {
    var url = MMJPG.m_mmjpg_more;
    console.log('m_mmjpg_more==' + url);
    return url;
};
exports.getm_mmjpg_top_page = function () {
    var url = MMJPG.m_mmjpg_top_page;
    console.log('m_mmjpg_top_page==' + url);
    return url;
};
exports.getm_mmjpg_top = function () {
    var url = MMJPG.m_mmjpg_top;
    console.log('m_mmjpg_top==' + url);
    return url;
};
exports.getm_mmjpg_hot = function () {
    var url = MMJPG.m_mmjpg_hot;
    console.log('m_mmjpg_hot==' + url);
    return url;
};
exports.getm_mmjpg_article = function () {
    var url = MMJPG.m_mmjpg_article;
    console.log('m_mmjpg_article==' + url);
    return url;
};

exports.getm_mmjpg = function () {
    var url = MMJPG.m_mmjpg;
    console.log('m_mmjpg==' + url);
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
        url = BASE_URL.HTTP + BASE_URL.IP + '/mmjpg' + path.substring(1, path.length);
    } else {
        if(BASE_URL.IP.indexOf('code.taobao.org')!=-1){
            url = BASE_URL.HTTP + BASE_URL.IP + '/mmjpg/trunk' + path.substring(1, path.length);
        }else{
            url = BASE_URL.HTTP + BASE_URL.IP + '/mmjpg' + path.substring(1, path.length);
        }


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
            if (host.endsWith(':8080/mmjpg') || host.endsWith(':12580/mmjpg')) {
                host = host.replace('/mmjpg', '');
                // console.log('replace local test storm name');
            }
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
        if (typeof window === 'object') {
            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./mmjpg/build/src/' : BASE_URL.HTTP + host + '/mmjpg/build/src/';
        } else {
            if(host.indexOf('code.taobao.org')!=-1){
                nativeBase = BASE_URL.HTTP + host + '/mmjpg/trunk/build/src/';
            }else{
                nativeBase = BASE_URL.HTTP + host + '/mmjpg/build/src/';
            }

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
