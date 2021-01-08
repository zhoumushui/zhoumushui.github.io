// <script src="js/zms.page.pattern.js"></script>
// "  --->  \"

let path = "";
if (directoryDepth != null) {
    switch (directoryDepth) {
        case 1:
            path = "../";
            break;
        case 2:
            path = "../../";
            break;
        case 3:
            path = "../../../";
            break;
        case 0:
        default:
            path = "";
            break;
    }
}

/**
 * AZ:添加头部
 */
function insertHeader() {
    document.getElementById("header").innerHTML = "<div class=\"logo\">" +
        "<a href=\"" + path + "\" class=\"hidden-xs\">周木水<small>时间过得好快。</small></a>" +
        "<i class=\"logo__trigger zmdi zmdi-menu\" data-mae-action=\"block-open\" data-mae-target=\"#navigation\"></i>" +
        "</div>" +
        "<ul class=\"top-menu\">" +
        "<li class=\"top-menu__apps dropdown hidden-xs hidden-sm\">" +
        "<a data-toggle=\"dropdown\" href=\"\"> <i class=\"zmdi zmdi-apps\"></i> </a>" +
        "<ul class=\"dropdown-menu pull-right\">" +
        "<li><a href=\"" + path + "\"><i class=\"zmdi zmdi-file-text\"></i><small>随笔</small></a></li>" +
        // "<li><a href=\"" + path + "app.html\"> <i class=\"zmdi zmdi-android\"></i><small>开发</small></a></li>" +
        "<li><a href=\"" + path + "book\"> <i class=\"zmdi zmdi-book\"></i><small>书籍</small></a></li>" +
        "<li><a href=\"" + path + "movie\"><i class=\"zmdi zmdi-movie\"></i><small>电影</small></a></li>" +
        "<li><a href=\"" + path + "game\"> <i class=\"zmdi zmdi-gamepad\"></i><small>游戏</small></a></li>" +
        "<li><a href=\"" + path + "world\"> <i class=\"zmdi zmdi-globe\"></i><small>足迹</small></a></li>" +
        //"<li><a href=\"" + path + "timeline.html\"> <i class=\"zmdi zmdi-chart\"></i><small>年鉴</small></a></li>" +
        //"<li><a href=\"" + path + "dream\"> <i class=\"zmdi zmdi-flag\"></i><small>梦想</small></a></li>" +
        "<li><a href=\"" + path + "profile\"> <i class=\"zmdi zmdi-account-circle\"></i><small>关于</small></a></li>" +
        "</ul>" +
        "</li>" +
        "<li class=\"top-menu__profile dropdown\">" +
        "<a data-toggle=\"dropdown\" href=\"\"> <img src=\"" + path + "/resource/img/logo/1.jpg\" alt=\"\"> </a>" +
        "<ul class=\"dropdown-menu pull-right dropdown-menu--icon\">" +
        "<li class=\"hidden-xs\"><a href=\"" + path + "index-remote.html\"><i class=\"zmdi zmdi-home\"></i>返回主页</a></li>" +
        "<li class=\"hidden-xs\"><a data-mae-action=\"fullscreen\" href=\"\"><i class=\"zmdi zmdi-fullscreen\"></i>全屏模式</a></li>" +
        "<li><a data-mae-action=\"clear-localstorage\" href=\"\"><i class=\"zmdi zmdi-delete\"></i>清除缓存</a></li>" +
        "</ul>" +
        "</li></ul>";
}

/**
 * 获取HTML文件名
 * @returns {string}
 */
function getHtmlName() {
    let str = window.location.href;
    if (str.indexOf("essay") != -1) { // 随笔
        str = 'essay';
    } else {
        str = str.substring(str.lastIndexOf("/") + 1);
        if (isEmpty(str)) {
            str = window.location.href; // zhoumushui.github.io/world/
            var ss = str.split("/");
            str = ss[ss.length - 2];
            // str = str.substring(str.lastIndexOf("/"));
        } else {
            str = str.substring(0, str.lastIndexOf("."));
            if (str > 0 && str < 1000) str = 'essay';
        }
    }
    console.log("HTML.NAME=" + str);
    return str;
}

/**
 * 判断字符是否为空的方法
 */
function isEmpty(obj) {
    return (typeof obj == "undefined" || obj == null || obj == "");
}

/**
 * AZ:添加左侧导航
 */
function insertNavigation() {
    let htmlName = getHtmlName();
    let liNormal = "<li>";
    let liActive = "<li class=\"navigation__active\">"; // 高亮
    document.getElementById("page-pattern-navigation").innerHTML = "<ul>" +
        ((htmlName == 'essay') ? liActive : liNormal) + "<a href='" + path + "'><i class='zmdi zmdi-file-text'></i><span class='nav-left'>随笔</span></a></li>" +
        // (htmlName == 'app' ? liActive : liNormal ) + "<a href='" + path + "app.html'><i class=\"zmdi zmdi-android\"></i><span class=\"nav-left\">开发</span></a></li>" +
        (htmlName == 'book' ? liActive : liNormal) + "<a href='" + path + "book'><i class='zmdi zmdi-book'></i><span class='nav-left'>书籍</span></a></li>" +
        (htmlName == 'movie' ? liActive : liNormal) + "<a href='" + path + "movie'><i class='zmdi zmdi-movie'></i><span class='nav-left'>电影</span></a></li>" +
        (htmlName == 'game' ? liActive : liNormal) + "<a href='" + path + "game'><i class='zmdi zmdi-gamepad'></i><span class='nav-left'>游戏</span></a></li>" +
        (htmlName == 'world' ? liActive : liNormal) + "<a href='" + path + "world'><i class='zmdi zmdi-globe'></i><span class='nav-left'>足迹</span></a></li>" +
        //(htmlName == 'timeline' ? liActive : liNormal) + "<a href='" + path + "az/timeline/'><i class='zmdi zmdi-chart'></i><span class='nav-left'>年鉴</span></a></li>" +
        //(htmlName == 'dream' ? liActive : liNormal) + "<a href='" + path + "dream'><i class='zmdi zmdi-flag'></i><span class='nav-left'>梦想</span></a></li>" +
        (htmlName == 'profile' ? liActive : liNormal) + "<a href='" + path + "profile'><i class='zmdi zmdi-account-circle'></i><span class='nav-left'>关于</span></a></li>" +
        "</ul>";
}

/**
 * AZ:添加分享按钮
 */
function insertShareButton() {
    let essayTitle = document.title;
    let essaySummary = document.title;
    let essayUrl = window.location.href;//'http://www.zhoumushui.com/essay.html';
    let essayPic = 'http://www.zhoumushui.com/img/logo/1.jpg'; // This
    document.getElementById("menu").innerHTML = "<li class='mfb-component__wrap'><a class='mfb-component__button--main'><i class='mfb-component__main-icon--resting zmdi zmdi-share'></i><i class='mfb-component__main-icon--active zmdi zmdi-close'></i></a><ul class='mfb-component__list'><li><a data-mfb-label='分享到QQ空间' class='mfb-component__button--child' href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url= " + essayUrl + "&title=" + essayTitle + "&pics=" + essayPic + "&summary=" + essaySummary + "' target='_blank'><i class='mfb-component__child-icon zmdi zmdi-star-circle'></i></a></li><li> <a data-mfb-label='分享到新浪微博' class='mfb-component__button--child' href='http://service.weibo.com/share/share.php?title= " + essayTitle + "&url=" + essayUrl + "' target='_blank'><i class='mfb-component__child-icon zmdi zmdi-eye'></i></a></li><li><a data-mfb-label='分享到豆瓣' class='mfb-component__button--child' href='https://www.douban.com/share/service?image= " + essayPic + "&href=" + essayUrl + "&name=" + essayTitle + "&text=" + essaySummary + "' target='_blank'><i class='mfb-component__child-icon zmdi zmdi-flower-alt'></i></a></li><li><a data-mfb-label='剪藏到印象笔记' class='mfb-component__button--child' href='https://app.yinxiang.com/clip.action?url=" + essayUrl + "&title=" + essayTitle + "' target='_blank\"><i class='mfb-component__child-icon zmdi zmdi-evernote'></i></a></li></ul></li>"
}

/**
 * AZ:添加脚部
 */
function insertFooter() {
    document.getElementById("footer").innerHTML = "&copy; <span id='footer-copyright'></span> zhoumushui<ul class='footer__menu'><li><div class='sucaihuo-container'><section class='cd-section toolbox-link'>" +
        /*
        "<a class=\"cd-bouncy-nav-trigger\" href=\"#0\">工具箱</a>" +
        "</section>" +
         */
        "<div class='cd-bouncy-nav-modal'><nav><ul class=\"cd-bouncy-nav\"><li><a target='_blank' href='" + path + "link'>导航</a></li><li><a target='_blank' href='" + path + "pass.html'>密码</a></li><li><a target='_blank' href='" + path + "game'>游戏</a></li><li><a target='_blank' href='" + path + "file'>文件</a></li><li><a target='_blank' href='" + path + "module/colorpicker'>颜色</a></li><li><a target='_blank' href='" + path + "module/icon'>图标</a></li></ul></nav><a href='#0' class='cd-close'>Close</a></div></div></li><li><a href=\"" + path + "comment\">留言板</a></li><span id='busuanzi_container_site_pv'>PV: <span id='busuanzi_value_site_pv'></span></span><span id='busuanzi_container_site_uv'> | UV: <span id='busuanzi_value_site_uv'></span></span></ul>"
}

function setCopyRightYear() {
    document.getElementById("footer-copyright").innerHTML = "" + new Date().getFullYear();
    // $("#footer-copyright").html(new Date().getFullYear());
}

function insertIEWarning() {
    document.getElementById("ie-warning").innerHTML = "<h1>Warning!!</h1><p>You are using an outdated version of Internet Explorer, please upgrade <br/>to any of the following web browsers to access this website.</p><div class='ie-warning__container'><ul class='ie-warning__download'><li><a href='http://www.google.com/chrome/'><img src='" + path + "img/browsers/chrome.png' alt=''><div>Chrome</div></a></li><li><a href=\"https://www.mozilla.org/en-US/firefox/new/'><img src='" + path + "img/browsers/firefox.png' alt=''><div>Firefox</div></a></li><li><a href='http://www.opera.com'><img src='" + path + "img/browsers/opera.png' alt=''><div>Opera</div></a></li><li><a href='https://www.apple.com/safari/'><img src='" + path + "img/browsers/safari.png' alt=''><div>Safari</div></a></li><li><a href='http://windows.microsoft.com/en-us/internet-explorer/download-ie'><img src='" + path + "img/browsers/ie.png' alt=''><div>IE (New)</div></a></li></ul></div><p>Sorry for the inconvenience!</p>"
}

function isIEBrowser() { //ie?
    return (!!window.ActiveXObject || "ActiveXObject" in window);
}

function getBrowserInfo() {
    let appName = navigator.appName; // Chrome:Netscape
    let appVersion = navigator.appVersion;
    let userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
    let version = parseFloat(appVersion);
    console.log("appName:" + appName + ",appVersion:" + appVersion + ",userAgent:" + userAgent);
}

function GetQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

function isPublic() {
    let str = window.location.href;
    return !(str.indexOf("az") != -1 ||
        str.indexOf("movie") != -1 ||
        str.indexOf("book") != -1 ||
        str.indexOf("game") != -1 ||
        str.indexOf("world") != -1 ||
        str.indexOf("dream") != -1 ||
        str.indexOf("profile") != -1);
}

let mPublic = false; //isPublic();
console.log("isPublic=" + mPublic);
if (mPublic)
    document.getElementById("navigation").style.display = "none";
else {
    insertHeader();
    insertNavigation();
}
insertFooter();
setCopyRightYear();
insertShareButton();
//insertIEWarning();

function getIconByType(type) {
    switch (type) {
        case 'ai':          return "<i class=\"essay-list-type zmdi zmdi-blur yellow\"></i>";
        case 'android':     return "<i class=\"essay-list-type zmdi zmdi-android green\"></i>";
        case 'apple':       return "<i class=\"essay-list-type zmdi zmdi-apple grey\"></i>";
        case 'bike':        return "<i class=\"essay-list-type zmdi zmdi-bike orange\"></i>";
        case 'book':        return "<i class=\"essay-list-type zmdi zmdi-book grey\"></i>";
        case 'car':         return "<i class=\"essay-list-type zmdi zmdi-car blue\"></i>";
        case 'car-green':   return "<i class=\"essay-list-type zmdi zmdi-car green\"></i>";
        case 'car-grey':    return "<i class=\"essay-list-type zmdi zmdi-car grey\"></i>";
        case 'car-red':     return "<i class=\"essay-list-type zmdi zmdi-car red\"></i>";
        case 'car-pink':    return "<i class=\"essay-list-type zmdi zmdi-car pink\"></i>";
        case 'car-yellow':  return "<i class=\"essay-list-type zmdi zmdi-car yellow\"></i>";
        case 'chip-green':  return "<i class=\"essay-list-type zmdi zmdi-memory green\"></i>";
        case 'chip-red':    return "<i class=\"essay-list-type zmdi zmdi-memory red\"></i>";
        case 'cloud':       return "<i class=\"essay-list-type zmdi zmdi-cloud\"></i>";
        case 'css':         return "<i class=\"essay-list-type zmdi zmdi-language-css3 brown\"></i>";
        case 'eat':         return "<i class=\"essay-list-type zmdi zmdi-local-pizza yellow\"></i>";
        case 'eye':         return "<i class=\"essay-list-type zmdi zmdi-eye brown\"></i>";
        case 'fit':         return "<i class=\"essay-list-type zmdi zmdi-run orange\"></i>";
        case 'fun':         return "<i class=\"essay-list-type zmdi zmdi-mood yellow\"></i>";
        case 'game':        return "<i class=\"essay-list-type zmdi zmdi-xbox green\"></i>";
        case 'gear':        return "<i class=\"essay-list-type zmdi zmdi-settings grey\"></i>";
        case 'git':         return "<i class=\"essay-list-type zmdi zmdi-github-alt purple\"></i>";
        case 'global':      return "<i class=\"essay-list-type zmdi zmdi-globe green\"></i>";
        case 'golden_boot': return "<i class=\"essay-list-type zmdi zmdi-n-1-square yellow\"></i>";
        case 'google':      return "<i class=\"essay-list-type zmdi zmdi-google red\"></i>";
        case 'home':        return "<i class=\"essay-list-type zmdi zmdi-home pink\"></i>";
        case 'home-green':  return "<i class=\"essay-list-type zmdi zmdi-home green\"></i>";
        case 'home-yellow': return "<i class=\"essay-list-type zmdi zmdi-home yellow\"></i>";
        case 'hospital':    return "<i class=\"essay-list-type zmdi zmdi-hospital red\"></i>";
        case 'html':        return "<i class=\"essay-list-type zmdi zmdi-language-html5 yellow\"></i>";
        case 'idea':        return "<i class=\"essay-list-type zmdi zmdi-lamp yellow\"></i>";
        case 'js':          return "<i class=\"essay-list-type zmdi zmdi-language-javascript\"></i>";
        case 'love':        return "<i class=\"essay-list-type zmdi zmdi-favorite red\"></i>";
        case 'map':         return "<i class=\"essay-list-type zmdi zmdi-map green\"></i>";
        case 'movie':       return "<i class=\"essay-list-type zmdi zmdi-movie blue-grey\"></i>";
        case 'phone':       return "<i class=\"essay-list-type zmdi zmdi-smartphone-android green\"></i>";
        case 'quote':       return "<i class=\"essay-list-type zmdi zmdi-quote orange\"></i>";
        case 'router':      return "<i class=\"essay-list-type zmdi zmdi-router green\"></i>";
        case 'subway':      return "<i class=\"essay-list-type zmdi zmdi-subway orange\"></i>";
        case 'sun':         return "<i class=\"essay-list-type zmdi zmdi-sun pink\"></i>";
        case 'think':       return "<i class=\"essay-list-type zmdi zmdi-coffee brown\"></i>";
        case 'tv':          return "<i class=\"essay-list-type zmdi zmdi-tv green\"></i>";
        case 'up':          return "<i class=\"essay-list-type zmdi zmdi-trending-up red\"></i>";
        case 'walk':        return "<i class=\"essay-list-type zmdi zmdi-walk orange\"></i>";
        case 'windows':     return "<i class=\"essay-list-type zmdi zmdi-windows blue\"></i>";
        case 'x':           return "<i class=\"essay-list-type zmdi zmdi-close-circle red\"></i>";
        case 'yi':          return "<i class=\"essay-list-type zmdi zmdi-n-1-square green\"></i>";
        default:            return "<i class=\"essay-list-type zmdi zmdi-widgets blue\"></i>";
    }

}




