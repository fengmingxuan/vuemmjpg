var BASE_URL = {
    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:mmjpg
    //raw.githubusercontent.com/fengmnegchang/vuemmjpg/master 192.168.1.15:8080 192.168.1.9:8080
    //https://raw.githubusercontent.com/fengmingxuan/vuemmjpg/master/mmjpg/build/src/mainlist.js
    IP: '192.168.1.15:8080',
    HTTP: 'http://',//https:// http://

};

var ZJITO = {
    pc_search:"http://www.zjito.com/search/result?Query=",
    pc_search_meinv:"http://www.zjito.com/search/result?Query=%E7%BE%8E%E5%A5%B3",
    pc_content:"http://www.zjito.com/dqfl/rb/544214.shtml",
    pc_cat:"http://www.zjito.com/dqfl/",
    pc_zjito:"http://www.zjito.com/",
    m_tab_img:"http://m.zjito.com/dqfl/zgnd/",
    m_content:"http://m.zjito.com/dqfl/rb/544214.shtml",
    m_zjito:"http://m.zjito.com/",

};
exports.getm_zjito = function () {
    var url = ZJITO.m_zjito;
    console.log('m_zjito==' + url);
    return url;
};
exports.getm_content = function () {
    var url = ZJITO.m_content;
    console.log('m_content==' + url);
    return url;
};
exports.getm_tab_img = function () {
    var url = ZJITO.m_tab_img;
    console.log('m_tab_img==' + url);
    return url;
};
exports.getpc_zjito = function () {
    var url = ZJITO.pc_zjito;
    console.log('pc_zjito==' + url);
    return url;
};
exports.getpc_cat = function () {
    var url = ZJITO.pc_cat;
    console.log('pc_cat==' + url);
    return url;
};
exports.getpc_content = function () {
    var url = ZJITO.pc_content;
    console.log('pc_content==' + url);
    return url;
};
exports.getpc_search_meinv = function () {
    var url = ZJITO.pc_search_meinv;
    console.log('pc_search_meinv==' + url);
    return url;
};
exports.getpc_search = function () {
    var url = ZJITO.pc_search;
    console.log('pc_search==' + url);
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
        url = BASE_URL.HTTP + BASE_URL.IP + '/zjito' + path.substring(1, path.length);
    } else {
        url = BASE_URL.HTTP + BASE_URL.IP + '/zjito' + path.substring(1, path.length);

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
            if (host.endsWith(':8080/zjito') || host.endsWith(':12580/zjito')) {
                host = host.replace('/zjito', '');
                // console.log('replace local test storm name');
            }
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
        if (typeof window === 'object') {
            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./zjito/build/src/' : BASE_URL.HTTP + host + '/zjito/build/src/';
        } else {
            nativeBase = BASE_URL.HTTP + host + '/zjito/build/src/';
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
