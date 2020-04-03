//鍏ㄧ珯鍏叡js搴�
$(document).ready(function (e) {
    $(".js_cell_case").click(function () {
        console.log(0);
        url = $(this).attr("data-url"); // 瑕佸姞杞界殑iframe
        title = $(this).attr("data-name");
        art.dialog.open(url, {
            lock: true,
            title: title,
            width: 900,
            drag: false,
            opacity: 0.3,
            background: "#000",
            height: 500
        });
    });
    <!--璁剧疆妗堜緥瀹藉害-->
    var len = $("#js_wrap_case").children().length;
    $("#js_wrap_case").css({"width": len * 1000});

    <!--鍒囨崲妗堜緥-->
    $("#js_tips span").hover(function () {
        var index = $(this).index();
        $(this).addClass("focus").siblings().removeClass("focus");


        $("#js_wrap_case").children().eq(index).addClass("focus").siblings().removeClass("focus");

        var index = $(this).index();
        $("#js_wrap_case").css({
            "left": -index * 1000
        });
        console.log()
    });

    $(function () {
        $('#js_fullpage').fullpage({
            slidesColor: ['#212325', '#fff', '#212325', '#ebfbff'],
            anchors: ['page1', 'page2', 'page3', 'page4'],
            menu: '#menu',
            afterRender: function () {
                $('#js_fullpage').find(".active").addClass("focus");
            },
            afterLoad: function (anchorLink, index) { // 婊氬姩缁撴潫鍚�
                $('#js_fullpage').children().eq(index - 1).addClass("focus");
            },
            onLeave: function (anchorLink, index) { // 婊氬姩鍓�
                $('#js_fullpage').children().removeClass("focus");
            }
        });
    });


    //section鐨勯灏惧鍔犻€夋嫨鍣�
    $(".section").each(function (index, element) {
        $(this).children().first().addClass("first");
        $(this).children().last().addClass("last");
    });
});

var common = {
    //杩斿洖娴忚鍣ㄥ楂�
    getViewSize: function () {
        var de = document.documentElement;
        var db = document.body;
        var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
        var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
        /*
            杩斿洖涓€涓暟缁勫弬鏁帮紝绗竴涓槸娴忚鍣ㄥ搴︼紝绗簩涓槸娴忚鍣ㄥ搴�
            璋冪敤鏂规硶锛�
            var screenW = getViewSize()[0]; // 娴忚鍣ㄥ搴�
            var screenH = getViewSize()[1]; // 娴忚鍣ㄩ珮搴�
        */
        return Array(viewW, viewH);
    },

    //鍩轰簬褰撳墠鐣岄潰鐨勬按骞冲瀭鐩村眳涓�
    vhCenter: function (para) {
        var screenW = $(para).parent().width(); // 娴忚鍣ㄥ搴�
        var screenH = $(para).parent().height(); // 娴忚鍣ㄩ珮搴�

        var paraW = $(para).width(); // 鍏冪礌瀹藉害
        var paraH = $(para).height(); // 鍏冪礌楂樺害

        var scrollTop = $(document).scrollTop(); //娴忚鍣ㄦ粴鍔ㄦ潯椤堕儴鍊�
        var scrollLeft = $(document).scrollLeft(); //娴忚鍣ㄦ粴鍔ㄦ潯宸﹁竟璺濆€�

        var top = 0;
        var left = 0;

        //鏍规嵁娴忚鍣ㄥ楂樻潵璁惧畾鎸囧畾瀹瑰櫒閽堝娴忚鍣ㄨ鍥捐繘琛屽眳涓�
        if (screenW < paraW) {
            left = 0;
        } else {
            left = (screenW - paraW) / 2 + scrollLeft;
        }

        if (screenH < paraH) {
            top = 0;
        } else {
            top = (screenH - paraH) / 2 + scrollTop;
        }

        $(para).css({
            "position": "absolute",
            "left": left,
            "top": top
        });
    }

}


var xlc = {
    /**榧犳爣绉诲叆鑳屾櫙婊戝姩
     鏂囨。鏍煎紡
     <ul id="jq_nav">
     <li class="js_focus"></li>
     <li id="js_navbg"></li>
     <ul>
     obj 涓簎l瀵硅薄 direct 鎸囧畾'涓婁笅'鎴�'宸﹀彸'绉诲姩 easing 涓哄姩鐢� "easeOutElastic"
     */
    navHover: function (obj, direct, easing) {
        var nav = $(obj); // 瀵艰埅

        var navChildren = nav.children().not("#js_navbg");
        var navbg = $(obj + " > #js_navbg"); //瀵艰埅鑳屾櫙
        var focusIndex = $(obj + " > .js_focus").index();

        navChildren.mouseover(function (e) { //榧犳爣绉诲叆绉诲嚭鏃跺彉鎹綅缃�
            var index = $(this).index();
            setPositionNum(index);
        }).mouseleave(function (e) {
            var index = $(".js_focus").index();
            setPositionNum(index);
        });

        $(document).ready(function () {
            setPositionNum(focusIndex);
        });

        function setPositionNum(index) {
            var nowNavItem = navChildren.eq(index).outerWidth(true);

            if (direct == "left") {
                //璁剧疆宸﹀彸绉诲姩
                var leftPosition = 0;
                for (var i = 0; i <= index; i++) {
                    if (i == index) {
                        var lastWidth = (navChildren.eq(i).outerWidth(true) - nowNavItem) / 2;
                        leftPosition += lastWidth;
                    } else {
                        leftPosition += parseInt(navChildren.eq(i).outerWidth(true)); // 寰幆鑾峰彇瑕佺Щ鍔ㄧ殑璺濈
                    }
                }

                $(navbg).stop().animate({
                    "left": leftPosition,
                    "width": nowNavItem
                }, 800, easing);
            } else {
                //璁剧疆涓婁笅绉诲姩
                var topPosition = 0;
                for (var i = 0; i <= index; i++) {
                    if (i == index) {
                        var lastHeight = (parseInt(navChildren.eq(i).outerHeight(true)) - nowNavItem) / 2;
                        topPosition += lastHeight;
                    } else {
                        topPosition += parseInt(navChildren.eq(i).outerHeight(true)); // 寰幆鑾峰彇瑕佺Щ鍔ㄧ殑璺濈
                    }
                }
                $(navbg).stop().animate({
                    "top": topPosition,
                    "width": nowNavItem
                }, 800, easing);
            }
        }
    },
    /**寮瑰嚭妗嗭紝鍩轰簬jquery鐨刲oad鏂规硶
     */
    /*
        鍏抽棴寮瑰嚭绐�
        璋冪敤 xlc.closeDialog();
    */
    closeDialog: function () {
        $("#js_dialogContainer").hide(); // 寮瑰嚭妗嗛噷闈㈡竻闄ゅ唴瀹瑰苟闅愯棌
        $(".zzdiv").fadeOut(200); // 閬僵闅愯棌
    },
    dialog: function (url, submitFn, callbackFn) {
        var closeDialog = {
            /*
            鍏抽棴寮瑰嚭妗�
                鏂规硶鍐呰皟鐢� closeDialog.closeDialog();
            */
            closeDialog: function () {
                $("#js_dialogContainer").hide(); // 寮瑰嚭妗嗛噷闈㈡竻闄ゅ唴瀹瑰苟闅愯棌
                $(".zzdiv").fadeOut(200); // 閬僵闅愯棌
            }
        }

        var len = $("#js_dialogContainer").length; // 鑾峰彇寮瑰嚭妗嗙殑鏁伴噺
        var zzLen = $(".zzdiv").length; // 閬僵鏁伴噺

        /*鍒濆鍖�*/
        /*1.濡傛灉寮瑰嚭妗嗗鍣ㄥ湪鐣岄潰閲岄潰娌℃湁锛屽垯鏂板涓€涓脊鍑烘瀹瑰櫒*/
        if (len <= 0) {
            var contain = $("<div class='dialogContainer' id='js_dialogContainer'></div>");
            $("body").append(contain);
        }

        /*1.濡傛灉閬僵鍦ㄧ晫闈㈤噷闈㈡病鏈夛紝鍒欐柊澧為伄缃�*/
        if (zzLen <= 0) {
            var zz = $("<div class='zzdiv'></div>");
            $("body").append(zz);

        }

        //鍏抽棴寮瑰嚭妗�
        $(".js_close").live("click", function () {
            closeDialog.closeDialog(); // 鍏抽棴寮瑰嚭妗�
        });

        //寮瑰嚭妗嗘彁浜�
        $(".js_submit").live("click", function () {
            //鍥炶皟鍑芥暟锛屽脊鍑烘寮瑰嚭涔嬪悗鎵ц鐨勬柟娉�
            if ($.isFunction(submitFn)) {
                submitFn.apply(this);
            }
        });

        //寮瑰嚭妗嗗唴瀹瑰姞杞斤紝鏍规嵁浼犺繘鏉ョ殑url鏉ユ敼鍙樺脊鍑烘鐨勫唴瀹�
        $("#js_dialogContainer").load(url, function () {
            //鍥炶皟鍑芥暟锛屽脊鍑烘寮瑰嚭涔嬪悗鎵ц鐨勬柟娉�
            if ($.isFunction(callbackFn)) {
                callbackFn.apply(this);
            }

            //寮瑰嚭妗嗘按骞冲瀭鐩村眳涓�
            common.vhCenter("#js_dialogContainer");

            //寮瑰嚭妗嗘笎鏄�
            $("#js_dialogContainer").fadeIn(200);
            //閬僵娓愭樉
            $(".zzdiv").fadeIn(200);

            //娴忚鍣ㄦ敼鍙樺ぇ灏忛噸瀹氫綅寮瑰嚭妗�
            $(window).resize(function (e) {
                common.vhCenter("#js_dialogContainer");
            });

            //娴忚鍣ㄦ粴鍔ㄩ噸瀹氫綅寮瑰嚭妗�
            $(window).scroll(function (e) {
                common.vhCenter("#js_dialogContainer");
            });

        });

    },

    //杞挱
    tabList: function (container_slide, events, focusClass, autoPlay, autoTime) {

        /*var defaults = {
            container_slide : // 杞挱鏈€澶栧眰鐨刣iv瀹瑰櫒
            events : "click", // 鎸囩ず鍣ㄥ垏鎹㈡椂鐨勪簨浠�
            focuclass : "focus", // 鎸囩ず鍣ㄧ殑閫変腑鐘舵€乧lass鍚嶇О
            autoPlay : false, // 鏄惁鑷姩鎾斁
            autoTime : 4000 // 鑷姩鎾斁鏃堕棿
        }*/

        var slideWrap_items = $(container_slide).find(".js_slideWrap"); //杞挱鐒︾偣瀹瑰櫒
        var slideTip = $(container_slide).find(".js_slideTip"); // 杞挱鎸囩ず鍣ㄥ鍣�
        var tabListFn = {
            changeFn: function (index) {//鍒囨崲鏂规硶
                // 鎸囩ず鍣ㄥ垏鎹�
                slideTip.children().eq(index).addClass(focusClass).siblings().removeClass(focusClass);

                //鐒︾偣鍥惧垏鎹�
                slideWrap_items.children().eq(index).stop(true, true).fadeIn().siblings().fadeOut();
                var src = slideWrap_items.children().eq(index).find("a > img").attr("data-imgsrc");
                if (src != "undefined") {
                    slideWrap_items.children().eq(index).find("a > img").attr("src", src);
                }
            }
        }

        //鍒濆鍖�
        //鍒濆鍖�1.閫夐」鍗＄涓€涓爣棰樺鍔犻€変腑鐘舵€�
        //鍒濆鍖�2.閫夐」鍗″搴旂殑绗竴涓唴瀹瑰潡鏄剧ず,鍏朵粬闅愯棌
        var index = 0; // 鐢ㄦ潵瀹氫綅褰撳墠鏄剧ず绗嚑寮犵劍鐐瑰浘
        index = 0; // 鑷姩杞挱鏃�,浼氭妸绗竴寮犱篃璁＄畻杩涘幓,鎵€浠ヨ嚜鍔ㄧ殑鏁伴噺浠�1寮€濮�
        slideWrap_items.children().eq(0).show();
        tabListFn.changeFn(0);


        var itemlen = slideWrap_items.children().length; // 鏍规嵁鐒︾偣鍥鹃暱搴︽潵杩涜绗竴涓拰鏈€鍚庝竴涓劍鐐瑰浘鏃剁殑澶勭悊
        var autoPlay = autoPlay; // 濡傛灉涓簍rue,鍒欒嚜鍔ㄦ挱鏀�,鍚﹀垯涓嶈嚜鍔ㄦ挱鏀�

        //濡傛灉涓簍rue鍒欒嚜鍔ㄦ挱鏀�
        if (autoPlay) {
            var picTimer;

            //榧犳爣婊戜笂鐒︾偣鍥炬椂鍋滄鑷姩鎾斁锛屾粦鍑烘椂寮€濮嬭嚜鍔ㄦ挱鏀�
            $(container_slide).hover(function () {
                clearInterval(picTimer);
            }, function () {
                picTimer = setInterval(function () {
                    tabListFn.changeFn(index);
                    index++;
                    if (index == itemlen) {
                        index = 0;
                    }
                }, autoTime); //autoTime浠ｈ〃鑷姩鎾斁鐨勯棿闅旓紝鍗曚綅锛氭绉�
            }).trigger("mouseleave");
        }

        // 涓婁竴涓�
        $(container_slide).find(".js_last").click(function () {
            index--;
            if (index < 0) {
                index = itemlen - 1;
            }
            tabListFn.changeFn(index);

        });

        // 涓嬩竴涓殑鍒囨崲
        $(container_slide).find(".js_next").click(function () {
            index++;
            if (index >= itemlen) {
                index = 0;
            }
            tabListFn.changeFn(index);

        });

        //榧犳爣浜嬩欢,杩涜鍒囨崲
        //鎸囩ず鍣ㄤ簨浠惰繘琛岀浉搴旂殑鍒囨崲
        slideTip.children().bind(events, function () {
            index = $(this).index();
            tabListFn.changeFn(index);
        });

    },

    //鍏ㄩ€夊叏涓嶉€夛紝para 鏄叏閫夋寜閽紝selectClass 涓哄甫閫変腑鏍囧織鐨勯€夋嫨妗嗭紝onselect 涓洪€変腑鍚庢坊鍔犻€変腑鏍囧織 , selectAll("#selectAll",".jq_Select","jq_onselect" , menuState);
    selectAll: function (para, selectClass, onselect, callbackEvent) {
        $(para).live("change", function () {
            var flag = true; //澶嶉€夋鍏ㄩ儴澶勪簬閫変腑鐘舵€佺殑鏃跺€欙紝涓簍rue

            $(selectClass).each(function () {//閬嶅巻鎵€鏈夌殑澶嶉€夋锛屽垽鏂閫夋鐨勯€変腑鐘舵€�
                if (!$(this).prop("disabled")) {
                    if (!$(this).prop("checked") || !$(this).hasClass(onselect)) {
                        flag = false;
                    }
                }
            });

            if (flag) {
                //濡傛灉鍏ㄩ儴鏄€変腑鐨�
                $(selectClass).each(function (index, element) {
                    if (!$(this).prop("disabled")) {
                        $(selectClass).prop("checked", false).removeClass(onselect); //鍒欏叏閮ㄥ彇娑堥€夋嫨
                    }
                });
                $(para).prop("checked", false);
            } else {
                //濡傛灉鍏ㄩ儴鏄€変腑鐨�
                $(selectClass).each(function (index, element) {
                    if (!$(this).prop("disabled")) {
                        $(this).prop("checked", true).addClass(onselect);
                        ; //鍙涓嶆槸鍏ㄩ儴閫夋嫨鐨勶紝鍒欐妸鎵€鏈夌殑澶嶉€夋閮介€変腑
                    }
                });

                $(para).prop("checked", true);
            }

            if ($.isFunction(callbackEvent)) {
                callbackEvent(); //鍥炶皟鍑芥暟锛岃繖閲岀敤鏉ュ鐞嗙偣鍑诲悗鐨勪簨浠�
            }
        });
    },

    //鎶婃煇涓厓绱犲彉涓篺ixed
    setFixed: function (para, options) {
        /*榛樿鍙傛暟*/
        var defaultOptions = {
            para: $(para),
            addclassname: "fixed",
            parentClass: "isfixed"
        }
        var obj = $.extend(defaultOptions, options);
        _this = obj.para;

        obj.para.each(function () {
            var _this = $(this); // 闇€瑕佸浐瀹氫綅缃殑閫夋嫨鍣�
            var _top = parseInt(_this.offset().top); // 鑾峰彇瀵硅薄鐨勯《閮ㄨ窛绂�
            var _thisHeight = parseInt(_this.outerHeight()); // 鑾峰彇瀵硅薄鐨勯珮搴�
            var _parentPaddingTop = parseInt(_this.parent().css("paddingTop")); // 鑾峰彇鐖跺厓绱犵殑paddingtop

            $(window).scroll(function (e) {

                var topScroll = parseInt($(window).scrollTop()); // 婊氬姩鏃惰幏鍙栨祻瑙堝櫒婊氬姩鏉￠珮搴�
                if (topScroll > _top) { // 濡傛灉婊氬姩鏉￠珮搴﹀ぇ浜庡璞￠《閮ㄨ窛绂�,鍒欒瀵硅薄鍙樻垚鍥哄畾瀹氫綅
                    _this.addClass(obj.addclassname);
                    _this.parent().addClass(obj.parentClass);
                } else { // 鍚﹀垯涓虹浉瀵瑰畾浣�
                    _this.removeClass(obj.addclassname);
                    _this.parent().removeClass(obj.parentClass);
                }
            });
        });

    },

    //杩斿洖椤堕儴 闇€瑕佸崟鐙粰 .gotop 鍐欐牱寮�
    gotoTop: function () {
        var goToKength = $("#js_gotop").length;
        var topScroll = $(window).scrollTop();

        if (goToKength <= 0) {
            var gotop = $("<span class='gotop' id='js_gotop'></span>");
            gotop.appendTo("body");
        }

        startGotop(topScroll);
        $(window).scroll(function () {
            startGotop();
        });

        //鐐瑰嚮璺宠浆鍒伴《閮�
        $("#js_gotop").click(function () {
            $("body,html").animate({scrollTop: 0}, 300);
        });

        //杩斿洖椤堕儴闅愯棌鏄剧ず鏂规硶
        function startGotop(scrollTop) {
            scrollTop = $(window).scrollTop();
            if (scrollTop > 100) {
                $("#js_gotop").fadeIn(500);
            } else {
                $("#js_gotop").fadeOut(500);
            }
        }
    },
    //杈撳叆妗嗚緭鍏ユ彁绀�
    inputTip: function () {
        var textIpt = $("input[type='text'] , textarea");
        textIpt.each(function () {
            if (!$(this).hasClass("js_notip")) {
                $(this).attr("autocomplete", "off");
                var value = $(this).val();
                $(this).blur(function (e) {
                    if ($(this).val() == "" || $(this).val() == " ") {
                        $(this).val(value);
                    }
                }).focus(function () {
                    if ($(this).val() == "" || $(this).val() == " " || $(this).val() == value) {
                        $(this).val("");
                    }
                });
            }
        });
    },
    //閫夐」鍗″垏鎹�
    /*
        tabTitle 閫夐」鍗″鍣�
        tabContainer 閫夐」鍗″搴旂殑鍐呭瀹瑰櫒
        events 鍑哄彂鍒囨崲鐨勪簨浠�
        focusClass 閫変腑鐨刢lass鍚嶇О
    */
    tabChange: function (tabTitle, tabContainer, events, focusClass) {
        $(tabContainer).children().eq(0).show().siblings().hide(); // 閫夐」鍗″唴瀹规樉绀虹涓€涓�,鍏朵粬闅愯棌
        $(tabTitle).children().bind(events, function () { // 鍒囨崲浜嬩欢
            var index = $(this).index(); // 鑾峰彇褰撳墠鐐瑰嚮鐨勯€夐」鍗＄储寮曞€�
            if (focusClass == undefined) {
                focusClass = "focus";
            } else {
                $(tabTitle).children().eq(index).addClass(focusClass).siblings().removeClass(focusClass); //瀵瑰簲鐨勯€夐」鍗℃坊鍔犻€変腑class
            }
            $(tabContainer).children().eq(index).show().siblings().hide(); // 绱㈠紩鍊煎搴旂殑閫夐」鍗″唴瀹规樉绀�,鍏朵粬闅愯棌
        });
    },

    //榧犳爣绉诲姩鏀瑰彉鍏冪礌浣嶇疆
    changePosition: function (para, Range) {
        var mousex;
        var mousey;

        $(para).each(function () {
            var para = $(this);
            var left = parseInt(para.css("left"));
            var top = parseInt(para.css("top"));

            $("body").mousemove(function (e) {
                var e = e || window.event;
                var mousex = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                var mousey = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;

                var newLeft = (mousex - left) / Range + left;
                var newTop = (mousey - top) / Range + top
                para.stop().animate({
                    "left": newLeft,
                    "top": newTop
                }, 20);

            });
        });

    }

}