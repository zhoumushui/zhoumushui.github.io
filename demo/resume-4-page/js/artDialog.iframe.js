/*!
 * artDialog iframeTools
 * Date: 2011-11-25 13:54
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */

;(function ($, window, artDialog, undefined) {

    var _topDialog, _proxyDialog, _zIndex,
        _data = '@ARTDIALOG.DATA',
        _open = '@ARTDIALOG.OPEN',
        _opener = '@ARTDIALOG.OPENER',
        _winName = window.name = window.name
            || '@ARTDIALOG.WINNAME' + + new Date,
        _isIE6 = window.VBArray && !window.XMLHttpRequest;

    $(function () {
        !window.jQuery && document.compatMode === 'BackCompat'
        // 娑撳秵鏁幐浣光偓顏勭磽濡€崇础閿涘矁顕悽銊ゅ瘜濞翠胶娈慩HTML1.0閹存牞鈧専TML5閻ㄥ嚍OCTYPE閻㈣櫕妲�
        && alert('artDialog Error: document.compatMode === "BackCompat"');
    });


    /** 閼惧嘲褰� artDialog 閸欘垵娉曠痪褑鐨熼悽銊ф畱閺堚偓妤傛ê鐪伴惃锟� window 鐎电钖� */
    var _top = artDialog.top = function () {
        var top = window,
            test = function (name) {
                try {
                    var doc = window[name].document;	// 鐠恒劌鐓檤閺冪姵娼堥梽锟�
                    doc.getElementsByTagName; 			// chrome 閺堫剙婀寸€瑰鍙忛梽鎰煑
                } catch (e) {
                    return false;
                };

                return window[name].artDialog
                    // 濡楀棙鐏﹂梿鍡樻￥濞夋洘妯夌粈铏诡儑娑撳鏌熼崗鍐
                    && doc.getElementsByTagName('frameset').length === 0;
            };

        if (test('top')) {
            top = window.top;
        } else if (test('parent')) {
            top = window.parent;
        };

        return top;
    }();
    artDialog.parent = _top; // 閸忕厧顔恦4.1娑斿澧犻悧鍫熸拱閿涘本婀弶銉у閺堫剙鐨㈤崚鐘绘珟濮濓拷


    _topDialog = _top.artDialog;


// 閼惧嘲褰囨い璺虹湴妞ょ敻娼扮€电鐦藉鍡楀綌閸旂姴鈧拷
    _zIndex = function () {
        return _topDialog.defaults.zIndex;
    };



    /**
     * 鐠恒劍顢嬮弸鑸垫殶閹诡喖鍙℃禍顐ｅ复閸欙拷
     * @see		http://www.planeart.cn/?p=1554
     * @param	{String}	鐎涙ê鍋嶉惃鍕殶閹诡喖鎮�
     * @param	{Any}		鐏忓棜顩︾€涙ê鍋嶉惃鍕崲閹板繑鏆熼幑锟�(閺冪姵顒濇い鐟板灟鏉╂柨娲栫悮顐ｇ叀鐠囥垻娈戦弫鐗堝祦)
     */
    artDialog.data = function (name, value) {
        var top = artDialog.top,
            cache = top[_data] || {};
        top[_data] = cache;

        if (value !== undefined) {
            cache[name] = value;
        } else {
            return cache[name];
        };
        return cache;
    };


    /**
     * 閺佺増宓侀崗鍙橀煩閸掔娀娅庨幒銉ュ經
     * @param	{String}	閸掔娀娅庨惃鍕殶閹诡喖鎮�
     */
    artDialog.removeData = function (name) {
        var cache = artDialog.top[_data];
        if (cache && cache[name]) delete cache[name];
    };


    /** 鐠恒劍顢嬮弸鑸垫珮闁艾顕拠婵囶攱 */
    artDialog.through = _proxyDialog = function () {
        var api = _topDialog.apply(this, arguments);

        // 缂傛挸鐡ㄦ禒搴＄秼閸擄拷 window閿涘牆褰查懗鎴掕礋iframe閿涘鐨熼崙鐑樺閺堝娉曞鍡樼仸鐎电鐦藉鍡礉
        // 娴犮儰绌剁拋鈺佺秼閸擄拷 window 閸楁瓕娴囬崜宥呭箵閸忔娊妫存潻娆庣昂鐎电鐦藉鍡愨偓锟�
        // 閸ョ姳璐焛frame濞夈劑鏀㈤崥搴濈瘍娴兼矮绮犻崘鍛摠娑擃厼鍨归梽銈呭従閸掓稑缂撻惃鍕嚠鐠炩槄绱濇潻娆愮壉閸欘垯浜掗梼鍙夘剾閸ョ偠鐨熼崙鑺ユ殶閹躲儵鏁�
        if (_top !== window) artDialog.list[api.config.id] = api;
        return api;
    };

// 濡楀棙鐏︽い鐢告桨閸楁瓕娴囬崜宥呭彠闂傤厽澧嶉張澶屸敍鐡掑﹦娈戠€电鐦藉锟�
    _top !== window && $(window).bind('unload', function () {
        var list = artDialog.list, config;
        for (var i in list) {
            if (list[i]) {
                config = list[i].config;
                if (config) config.duration = 0; // 閸欐牗绉烽崝銊ф暰
                list[i].close();
                //delete list[i];
            };
        };
    });


    /**
     * 瀵湱鐛� (iframe)
     * @param	{String}	閸︽澘娼�
     * @param	{Object}	闁板秶鐤嗛崣鍌涙殶. 鏉╂瑩鍣锋导鐘插弳閻ㄥ嫬娲栫拫鍐ㄥ毐閺佺増甯撮弨鍓佹畱缁楋拷1娑擃亜寮弫棰佽礋iframe閸愬懘鍎磜indow鐎电钖�
     * @param	{Boolean}	閺勵垰鎯侀崗浣筋啅缂傛挸鐡�. 姒涙ǹ顓籺rue
     */
    artDialog.open = function (url, options, cache) {
        options = options || {};

        var api, DOM,
            $content, $main, iframe, $iframe, $idoc, iwin, ibody,
            top = artDialog.top,
            initCss = 'position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent',
            loadCss = 'width:100%;height:100%;border:none 0';

        if (cache === false) {
            var ts = + new Date,
                ret = url.replace(/([?&])_=[^&]*/, "$1_=" + ts );
            url = ret + ((ret === url) ? (/\?/.test(url) ? "&" : "?") + "_=" + ts : "");
        };

        var load = function () {
            var iWidth, iHeight,
                loading = DOM.content.find('.aui_loading'),
                aConfig = api.config;

            $content.addClass('aui_state_full');

            loading && loading.hide();

            try {
                iwin = iframe.contentWindow;
                $idoc = $(iwin.document);
                ibody = iwin.document.body;
            } catch (e) {// 鐠恒劌鐓�
                iframe.style.cssText = loadCss;

                aConfig.follow
                    ? api.follow(aConfig.follow)
                    : api.position(aConfig.left, aConfig.top);

                options.init && options.init.call(api, iwin, top);
                options.init = null;
                return;
            };

            // 閼惧嘲褰噄frame閸愬懘鍎寸亸鍝勵嚟
            iWidth = aConfig.width === 'auto'
                ? $idoc.width() + (_isIE6 ? 0 : parseInt($(ibody).css('marginLeft')))
                : aConfig.width;

            iHeight = aConfig.height === 'auto'
                ? $idoc.height()
                : aConfig.height;

            // 闁倸绨瞚frame鐏忓搫顕�
            setTimeout(function () {
                iframe.style.cssText = loadCss;
            }, 0);// setTimeout: 闂冨弶顒汭E6~7鐎电鐦藉鍡樼壉瀵繑瑕嗛弻鎾崇磽鐢拷
            api.size(iWidth, iHeight);

            // 鐠嬪啯鏆ｇ€电鐦藉鍡曠秴缂冿拷
            aConfig.follow
                ? api.follow(aConfig.follow)
                : api.position(aConfig.left, aConfig.top);

            options.init && options.init.call(api, iwin, top);
            options.init = null;
        };

        var config = {
            zIndex: _zIndex(),
            init: function () {
                api = this;
                DOM = api.DOM;
                $main = DOM.main;
                $content = DOM.content;

                iframe = api.iframe = top.document.createElement('iframe');
                iframe.src = url;
                iframe.name = 'Open' + api.config.id;
                iframe.style.cssText = initCss;
                iframe.setAttribute('frameborder', 0, 0);
                iframe.setAttribute('allowTransparency', true);

                $iframe = $(iframe);
                api.content().appendChild(iframe);
                iwin = iframe.contentWindow;

                try {
                    iwin.name = iframe.name;
                    artDialog.data(iframe.name + _open, api);
                    artDialog.data(iframe.name + _opener, window);
                } catch (e) {};

                $iframe.bind('load', load);
            },
            close: function () {
                $iframe.css('display', 'none').unbind('load', load);

                if (options.close && options.close.call(this, iframe.contentWindow, top) === false) {
                    return false;
                };
                $content.removeClass('aui_state_full');

                // 闁插秷顩﹂敍渚€娓剁憰渚€鍣哥純鐢秄rame閸︽澘娼冮敍灞芥儊閸掓瑤绗呭▎鈥冲毉閻滄壆娈戠€电鐦藉鍡楁躬IE6閵嗭拷7閺冪姵纭堕懕姘卞妽input
                // IE閸掔娀娅巌frame閸氬函绱漣frame娴犲秶鍔ф导姘辨殌閸︺劌鍞寸€涙ü鑵戦崙铏瑰箛娑撳﹨鍫梻顕€顣介敍宀€鐤嗛幑顣檙c閺勵垱娓剁€硅妲楃憴锝呭枀閻ㄥ嫭鏌熷▔锟�
                $iframe[0].src = 'about:blank';
                $iframe.remove();

                try {
                    artDialog.removeData(iframe.name + _open);
                    artDialog.removeData(iframe.name + _opener);
                } catch (e) {};
            }
        };

        // 閸ョ偠鐨熼崙鑺ユ殶缁楊兛绔存稉顏勫棘閺佺増瀵氶崥鎱絝rame閸愬懘鍎磜indow鐎电钖�
        if (typeof options.ok === 'function') config.ok = function () {
            return options.ok.call(api, iframe.contentWindow, top);
        };
        if (typeof options.cancel === 'function') config.cancel = function () {
            return options.cancel.call(api, iframe.contentWindow, top);
        };

        delete options.content;

        for (var i in options) {
            if (config[i] === undefined) config[i] = options[i];
        };

        return _proxyDialog(config);
    };


    /** 瀵洜鏁pen閺傝纭堕幍鈺佺潔閺傝纭�(閸︹暙pen閹垫挸绱戦惃鍒琭rame閸愬懘鍎寸粔浣规箒閺傝纭�) */
    artDialog.open.api = artDialog.data(_winName + _open);


    /** 瀵洜鏁pen閺傝纭剁憴锕€褰傞弶銉︾爱妞ょ敻娼皐indow(閸︹暙pen閹垫挸绱戦惃鍒琭rame閸愬懘鍎寸粔浣规箒閺傝纭�) */
    artDialog.opener = artDialog.data(_winName + _opener) || window;
    artDialog.open.origin = artDialog.opener; // 閸忕厧顔恦4.1娑斿澧犻悧鍫熸拱閿涘本婀弶銉у閺堫剙鐨㈤崚鐘绘珟濮濓拷

    /** artDialog.open 閹垫挸绱戦惃鍒琭rame妞ょ敻娼伴柌灞藉彠闂傤厼顕拠婵囶攱韫囶偅宓庨弬瑙勭《 */
    artDialog.close = function () {
        var api = artDialog.data(_winName + _open);
        api && api.close();
        return false;
    };

// 閻愮懓鍤甶frame閸愬懎顔愰崚鍥ㄥ床閸欑姴濮炴妯哄
    _top != window && $(document).bind('mousedown', function () {
        var api = artDialog.open.api;
        api && api.zIndex();
    });


    /**
     * Ajax婵夘偄鍘栭崘鍛啇
     * @param	{String}			閸︽澘娼�
     * @param	{Object}			闁板秶鐤嗛崣鍌涙殶
     * @param	{Boolean}			閺勵垰鎯侀崗浣筋啅缂傛挸鐡�. 姒涙ǹ顓籺rue
     */
    artDialog.load = function(url, options, cache){
        cache = cache || false;
        var opt = options || {};

        var config = {
            zIndex: _zIndex(),
            init: function(here){
                var api = this,
                    aConfig = api.config;

                $.ajax({
                    url: url,
                    success: function (content) {
                        api.content(content);
                        opt.init && opt.init.call(api, here);
                    },
                    cache: cache
                });

            }
        };

        delete options.content;

        for (var i in opt) {
            if (config[i] === undefined) config[i] = opt[i];
        };

        return _proxyDialog(config);
    };


    /**
     * 鐠€锕€鎲�
     * @param	{String}	濞戝牊浼呴崘鍛啇
     */
    artDialog.alert = function (content, callback) {
        return _proxyDialog({
            id: 'Alert',
            zIndex: _zIndex(),
            icon: 'warning',
            fixed: true,
            lock: true,
            content: content,
            ok: true,
            close: callback
        });
    };


    /**
     * 绾喛顓�
     * @param	{String}	濞戝牊浼呴崘鍛啇
     * @param	{Function}	绾喖鐣鹃幐澶愭尦閸ョ偠鐨熼崙鑺ユ殶
     * @param	{Function}	閸欐牗绉烽幐澶愭尦閸ョ偠鐨熼崙鑺ユ殶
     */
    artDialog.confirm = function (content, yes, no) {
        return _proxyDialog({
            id: 'Confirm',
            zIndex: _zIndex(),
            icon: 'question',
            fixed: true,
            lock: true,
            opacity: .1,
            content: content,
            ok: function (here) {
                return yes.call(this, here);
            },
            cancel: function (here) {
                return no && no.call(this, here);
            }
        });
    };


    /**
     * 閹绘劙妫�
     * @param	{String}	閹绘劙妫堕崘鍛啇
     * @param	{Function}	閸ョ偠鐨熼崙鑺ユ殶. 閹恒儲鏁归崣鍌涙殶閿涙俺绶崗銉モ偓锟�
     * @param	{String}	姒涙ǹ顓婚崐锟�
     */
    artDialog.prompt = function (content, yes, value) {
        value = value || '';
        var input;

        return _proxyDialog({
            id: 'Prompt',
            zIndex: _zIndex(),
            icon: 'question',
            fixed: true,
            lock: true,
            opacity: .1,
            content: [
                '<div style="margin-bottom:5px;font-size:12px">',
                content,
                '</div>',
                '<div>',
                '<input value="',
                value,
                '" style="width:18em;padding:6px 4px" />',
                '</div>'
            ].join(''),
            init: function () {
                input = this.DOM.content.find('input')[0];
                input.select();
                input.focus();
            },
            ok: function (here) {
                return yes && yes.call(this, input.value, here);
            },
            cancel: true
        });
    };


    /**
     * 閻厽娈忛幓鎰仛
     * @param	{String}	閹绘劗銇氶崘鍛啇
     * @param	{Number}	閺勫墽銇氶弮鍫曟？ (姒涙ǹ顓�1.5缁夛拷)
     */
    artDialog.tips = function (content, time) {
        return _proxyDialog({
            id: 'Tips',
            zIndex: _zIndex(),
            title: false,
            cancel: false,
            fixed: true,
            lock: false
        })
            .content('<div style="padding: 0 1em;">' + content + '</div>')
            .time(time || 1.5);
    };


// 婢х偛宸盿rtDialog閹锋牗瀚挎担鎾荤崣
// - 闂冨弶顒涙Η鐘崇垼閽€钘夊弳iframe鐎佃壈鍤ф稉宥嗙ウ閻ｏ拷
// - 鐎电绉存径褍顕拠婵囶攱閹锋牕濮╂导妯哄
    $(function () {
        var event = artDialog.dragEvent;
        if (!event) return;

        var $window = $(window),
            $document = $(document),
            positionType = _isIE6 ? 'absolute' : 'fixed',
            dragEvent = event.prototype,
            mask = document.createElement('div'),
            style = mask.style;

        style.cssText = 'display:none;position:' + positionType + ';left:0;top:0;width:100%;height:100%;'
            + 'cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF';

        document.body.appendChild(mask);
        dragEvent._start = dragEvent.start;
        dragEvent._end = dragEvent.end;

        dragEvent.start = function () {
            var DOM = artDialog.focus.DOM,
                main = DOM.main[0],
                iframe = DOM.content[0].getElementsByTagName('iframe')[0];

            dragEvent._start.apply(this, arguments);
            style.display = 'block';
            style.zIndex = artDialog.defaults.zIndex + 3;

            if (positionType === 'absolute') {
                style.width = $window.width() + 'px';
                style.height = $window.height() + 'px';
                style.left = $document.scrollLeft() + 'px';
                style.top = $document.scrollTop() + 'px';
            };

            if (iframe && main.offsetWidth * main.offsetHeight > 307200) {
                main.style.visibility = 'hidden';
            };
        };

        dragEvent.end = function () {
            var dialog = artDialog.focus;
            dragEvent._end.apply(this, arguments);
            style.display = 'none';
            if (dialog) dialog.DOM.main[0].style.visibility = 'visible';
        };
    });

})(this.art || this.jQuery, this, this.artDialog);
