(function (e) {
    e.fn.jflatTimeline = function (t) {
        var n = new Array;
        var r = function (e, t) {
            if (e > t)return -1;
            if (e < t)return 1;
            return 0
        };
        var selectYear = 0;
        var selectMonth = 0;
        var o = 2;
        var u = 0;
        var a = 500;
        var arrayMonthAbbr = new Array;
        arrayMonthAbbr[0] = "JAN"; // "January";
        arrayMonthAbbr[1] = "FRB";// "February";
        arrayMonthAbbr[2] = "MAR";// "March";
        arrayMonthAbbr[3] = "APR";// "April";
        arrayMonthAbbr[4] = "MAY";// "May";
        arrayMonthAbbr[5] = "JUN";// "June";
        arrayMonthAbbr[6] = "JUL";// "July";
        arrayMonthAbbr[7] = "AUG";// "August";
        arrayMonthAbbr[8] = "SEP";// "September";
        arrayMonthAbbr[9] = "OCT";// "October";
        arrayMonthAbbr[10] = "NOV";//  "November";
        arrayMonthAbbr[11] = "DEC";//  "December";

        var l = {};
        if (t) {
            e.extend(l, t)
        }
        return this.each(function () {
            selector = e(this);
            if (t.scroll) o = parseInt(t.scroll);
            if (t.width) selector.css("width", t.width);
            if (t.scrollingTime) a = t.scrollingTime;
            if (!selector.children(".timeline-wrap").children(".event.selected").length) selector.children(".timeline-wrap").children(".event:first-child").addClass("selected");
            selectYear = (new Date(selector.children(".timeline-wrap").children(".event.selected").attr("data-date"))).getFullYear();
            selectMonth = (new Date(selector.children(".timeline-wrap").children(".event.selected").attr("data-date"))).getMonth();
            if (!selector.children(".month-year-bar").length) {
                selector.prepend('<div class = "month-year-bar"></div>');
                selector.children(".month-year-bar").prepend('<div class = "year"><a class = "prev"><i class = " icon-angle-left"></i></a><span>' + String(selectYear) + '</span><a class = "next"><i class = " icon-angle-right"></i></a></div>');
                selector.children(".month-year-bar").prepend('<div class = "month"><a class = "prev"><i class = " icon-angle-left"></i></a><span>' + String(arrayMonthAbbr[selectMonth]) + '</span><a class = "next"><i class = " icon-angle-right"></i></a></div>')
            }
            var l = 0;
            selector.children(".timeline-wrap").children(".event").each(function () {
                n[l] = new Date(e(this).attr("data-date"));
                l++;

                var date = new Date(Date.parse(e(this).attr("data-date")));
                appendDateAndWeek(date, e(this).children(".date"));  // AZ: 添加星期
                appendLifeDayCount(date, e(this).children(".date")); // AZ: 添加天数
                calculateYearCount(date); // AZ: 统计每年的日记数目

                // AZ: 将日记内容移动到js文件 START
                var dataDate = date.Format("yyyyMMdd");
                for (var i = 0; i < arrayDiary.length; i += 1) {
                    if (dataDate == arrayDiary[i].date) {
                        var content = arrayDiary[i].content;
                        e(this).children(".note").append(content);
                    }
                }
                // AZ: 将日记内容移动到js文件 END
            });
            // showDiaryYearCountLog();

            n.sort(r);
            if (!selector.children(".dates-bar").length) selector.children(".month-year-bar").after('<div class = "dates-bar"><a class = "prev"><i class = " icon-angle-left"></i></a><a class = "noevent">对应日期无日记</a><a class = "next"><i class = " icon-angle-right"></i></a></div>');
            for (l = 0; l < n.length; l++) {
                dateString = String(n[l].getMonth() + 1 + "/" + n[l].getDate() + "/" + n[l].getFullYear());
                if (selector.children(".dates-bar").children('a[data-date = "' + dateString + '"]').length)continue;
                selector.children(".dates-bar").children("a.prev").after("<a data-date = " + dateString + '><span class = "date">' + String(n[l].getDate()) + '</span><span class = "month">' + String(arrayMonthAbbr[n[l].getMonth()]) + "</span></a>")
            }
            for (l = 0; l < selector.children(".timeline-wrap").children(".event").length; l++) {
                var c = new Date(selector.children(".timeline-wrap").children(".event:nth-child(" + String(l + 1) + ")").attr("data-date"));
                dateString = String(c.getMonth() + 1 + "/" + c.getDate() + "/" + c.getFullYear());
                selector.children(".timeline-wrap").children(".event:nth-child(" + String(l + 1) + ")").attr("data-date", dateString)
            }
            selector.children(".dates-bar").children("a:not(.prev, .next, .noevent)").each(function () {
                if ((new Date(e(this).attr("data-date"))).getFullYear() != selectYear)
                    e(this).hide();
            });

            if (selector.hasClass("calledOnce"))return 0;
            selector.addClass("calledOnce");
            selector.children(".dates-bar").children('a[data-date ="' + String(selector.children(".timeline-wrap").children(".event.selected").attr("data-date")) + '"]').addClass("selected");
            if (selector.width() < 500) selector.addClass("s_screen");
            e(window).resize(function () {
                if (selector.width() < 500) selector.addClass("s_screen"); else selector.removeClass("s_screen")
            });
            selector.children(".dates-bar").children("a:not(.prev, .next, .noevent)").click(function () {
                c = String(e(this).attr("data-date"));
                selector.children(".timeline-wrap").children(".event.selected").removeClass("selected");
                selector.children(".timeline-wrap").children('.event[data-date="' + c + '"]').addClass("selected");
                selector.children(".dates-bar").children("a:not(.prev, .next, .noevent)").removeClass("selected");
                e(this).addClass("selected")
            });
            selector.children(".dates-bar").children("a.next").click(function () {
                var e = o;
                var t = selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible()").length;
                if (u + o >= t) e = t - u - 1;
                if (parseInt(selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").css("width")) * e > selector.children(".dates-bar").width())while (parseInt(selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").css("width")) * e > selector.children(".dates-bar").width() && e > 1)e -= 1;
                var n = -1 * e * parseInt(selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").css("width"));
                selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").animate({marginLeft: "+=" + String(n) + "px"}, a);
                u += e;
                selectMonth = (new Date(selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(" + String(u) + ")").attr("data-date"))).getMonth();
                selector.children(".month-year-bar").children(".month").children("span").text(arrayMonthAbbr[selectMonth])
            });
            selector.children(".dates-bar").children("a.prev").click(function () {
                var e = o;
                var t = selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible()").length;
                if (u <= o) e = u;
                if (parseInt(selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").css("width")) * e > selector.children(".dates-bar").width())while (parseInt(selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").css("width")) * e > selector.children(".dates-bar").width() && e > 1)e -= 1;
                var n = e * parseInt(selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").css("width"));
                selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").animate({marginLeft: "+=" + String(n) + "px"}, a);
                u -= e;
                selectMonth = (new Date(selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(" + String(u) + ")").attr("data-date"))).getMonth();
                selector.children(".month-year-bar").children(".month").children("span").text(arrayMonthAbbr[selectMonth])
            });
            selector.children(".month-year-bar").children(".month").children(".next").click(function () {
                if (!(selectMonth == 11))
                    selectMonth += 1;
                else
                    selectMonth = 0;
                var t = 0;
                selector.children(".month-year-bar").children(".month").children("span").text(arrayMonthAbbr[selectMonth]);
                selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible()").each(function () {
                    t += 1;
                    if ((new Date(e(this).attr("data-date"))).getMonth() >= selectMonth) {
                        return false
                    }
                });
                var n = (t - u - 1) * parseInt(selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").css("width"));
                selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").animate({marginLeft: "-=" + String(n) + "px"}, a);
                u = t - 1
            });
            selector.children(".month-year-bar").children(".month").children(".prev").click(function () {
                if (!(selectMonth == 0)) selectMonth -= 1; else selectMonth = 11;
                var t = 0;
                selector.children(".month-year-bar").children(".month").children("span").text(arrayMonthAbbr[selectMonth]);
                selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible()").each(function () {
                    t += 1;
                    if ((new Date(e(this).attr("data-date"))).getMonth() >= selectMonth) {
                        return false
                    }
                });
                var n = (t - u - 1) * parseInt(selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").css("width"));
                selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible():eq(0)").animate({marginLeft: "-=" + String(n) + "px"}, a);
                u = t - 1
            });
            selector.children(".month-year-bar").children(".year").children(".next").click(function () {
                if (selectYear < new Date().getFullYear()) { // AZ:如果已是今年，则年不再加1
                    selectYear += 1;
                    selector.children(".month-year-bar").children(".year").children("span").text(String(selectYear));
                    selector.children(".dates-bar").children("a:not(.prev, .next, .noevent)").each(function () {
                        if ((new Date(e(this).attr("data-date"))).getFullYear() != selectYear) {
                            e(this).hide();
                        } else {
                            e(this).show();
                        }
                    });
                    if (!selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible").length) {
                        selector.children(".dates-bar").children("a.noevent").css("display", "block")
                    } else {
                        selector.children(".dates-bar").children("a.noevent").css("display", "none");
                        selector.children(".dates-bar").children("a:not(.prev, .next, .noevent)").css("margin-left", "0");
                        u = 0;
                        selector.children(".timeline-wrap").children(".event").removeClass("selected");
                        selector.children(".timeline-wrap").children(".event").each(function () {
                            c = new Date(e(this).attr("data-date"));
                            if (c.getFullYear() == selectYear) {
                                e(this).addClass("selected");
                                selectMonth = c.getMonth();
                                selector.children(".month-year-bar").children(".month").children("span").text(arrayMonthAbbr[selectMonth]);
                                return false
                            }
                        })
                    }
                    selector.children(".dates-bar").children("a:not(.prev, .next, .noevent)").removeClass("selected");
                    selector.children(".dates-bar").children('a[data-date ="' + String(selector.children(".timeline-wrap").children(".event.selected").attr("data-date")) + '"]').addClass("selected")
                }else{
                    document.getElementById("toast_no_later_diary").click();
                }
            });
            selector.children(".month-year-bar").children(".year").children(".prev").click(function () {
                if (selectYear > 2002) { // AZ:第一篇日记写于2002年
                    selectYear -= 1;
                    selector.children(".month-year-bar").children(".year").children("span").text(String(selectYear));
                    selector.children(".dates-bar").children("a:not(.prev, .next, .noevent)").each(function () {
                        if ((new Date(e(this).attr("data-date"))).getFullYear() != selectYear) {
                            e(this).hide();
                        } else {
                            e(this).show();
                        }
                    });
                    if (!selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible").length) {
                        selector.children(".dates-bar").children("a.noevent").css("display", "block")
                    } else {
                        selector.children(".dates-bar").children("a.noevent").css("display", "none");
                        selector.children(".dates-bar").children("a:not(.prev, .next, .noevent)").css("margin-left", "0");
                        u = 0;
                        selector.children(".timeline-wrap").children(".event").removeClass("selected");
                        selector.children(".timeline-wrap").children(".event").each(function () {
                            console.log("AAA>selectYear=" + selectYear + ",fullYear=" + c.getFullYear());
                            c = new Date(e(this).attr("data-date"));
                            if (c.getFullYear() == selectYear) {
                                e(this).addClass("selected");
                                selectMonth = c.getMonth();
                                selector.children(".month-year-bar").children(".month").children("span").text(arrayMonthAbbr[selectMonth]);
                                return false
                            }
                        })
                    }
                    selector.children(".dates-bar").children("a:not(.prev, .next, .noevent)").removeClass("selected");
                    selector.children(".dates-bar").children('a[data-date ="' + String(selector.children(".timeline-wrap").children(".event.selected").attr("data-date")) + '"]').addClass("selected")
                } else {
                    document.getElementById("toast_no_early_diary").click();
                }
            })

            // AZ:Show diary select month only START
            // selector.children(".dates-bar").children("a:not(.prev, .next, .noevent)").each(function () {
            //     var date = new Date(Date.parse(e(this).attr("data-date")));
            //     if (date.getMonth() != selectMonth) {
            //         e(this).hide();
            //     } else{
            //         e(this).show();
            //     }
            //
            // });
            // selector.children(".dates-bar").children("a:not(.prev, .next, .noevent):visible()").each(function () {
            //     var date = new Date(Date.parse(e(this).attr("data-date")));
            //     if (date.getMonth() != selectMonth) {
            //         return false;
            //     }
            // });
            selector.children(".month-year-bar").children(".month").children(".next").click();
            selector.children(".month-year-bar").children(".month").children(".prev").click();
            // AZ:Show diary select month only END
        })
    }
})(jQuery);
$(document).ready(function () {
    $("div.jflatTimeline").jflatTimeline({scroll: "2", scrollingTime: "300"});
    console.log("[AZ]arrayDiary.length=" + arrayDiary.length);
})

/**
 * 添加日期和星期
 * @param diaryDate
 * @param target
 */
function appendDateAndWeek(date, target) {
    var weekCount = date.getDay();
    var weekStr = "";
    switch (weekCount) {
        case 0:
            weekStr = "周日";
            break;
        case 1:
            weekStr = "周一";
            break;
        case 2:
            weekStr = "周二";
            break;
        case 3:
            weekStr = "周三";
            break;
        case 4:
            weekStr = "周四";
            break;
        case 5:
            weekStr = "周五";
            break;
        case 6:
            weekStr = "周六";
            break;
        default:
            weekStr = "周？";
    }
    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月
            "d+": this.getDate(), //日
            "h+": this.getHours(), //时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    target.append("<i class=\"zmdi zmdi-calendar\"></i>" + date.Format("yyyy-MM-dd") + " " + weekStr);

}

/**
 * AZ:计算日记当天是生命第几天
 * @param diaryDate 日记日期
 * @param target 结果要附加的目标
 */
function appendLifeDayCount(diaryDate, target) {
    var birthDate = new Date();
    birthDate.setFullYear(1991, 9 - 1, 23); // 1991-09-23
    birthDate.setHours(0);
    birthDate.setMinutes(0);
    birthDate.setSeconds(0);
    birthDate.setMilliseconds(0);

    var seconds = (Date.parse(diaryDate) - Date.parse(birthDate)) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = seconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    target.append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"zmdi zmdi-cake\"></i>"
        + days + "天，" + (days / 365).toFixed(1) + "岁");
}

var diaryCount2018 = 0;
var diaryCount2017 = 0;
var diaryCount2016 = 0;
var diaryCount2015 = 0;
var diaryCount2014 = 0;
var diaryCount2013 = 0;
var diaryCount2012 = 0;
var diaryCount2011 = 0;
var diaryCount2010 = 0;
var diaryCount2009 = 0;
var diaryCount2008 = 0;
var diaryCount2007 = 0;
var diaryCount2006 = 0;
var diaryCount2005 = 0;
var diaryCount2004 = 0;
var diaryCount2003 = 0;
var diaryCount2002 = 0;

/**
 * 统计每年的日记数目
 * @param date
 */
function calculateYearCount(date) {
    switch (date.getFullYear()) {
        case 2018:
            diaryCount2018++;
            break;
        case 2017:
            diaryCount2017++;
            break;
        case 2016:
            diaryCount2016++;
            break;
        case 2015:
            diaryCount2015++;
            break;
        case 2014:
            diaryCount2014++;
            break;
        case 2013:
            diaryCount2013++;
            break;
        case 2012:
            diaryCount2012++;
            break;
        case 2011:
            diaryCount2011++;
            break;
        case 2010:
            diaryCount2010++;
            break;
        case 2009:
            diaryCount2009++;
            break;
        case 2008:
            diaryCount2008++;
            break;
        case 2007:
            diaryCount2007++;
            break;
        case 2006:
            diaryCount2006++;
            break;
        case 2005:
            diaryCount2005++;
            break;
        case 2004:
            diaryCount2004++;
            break;
        case 2003:
            diaryCount2003++;
            break;
        case 2002:
            diaryCount2002++;
            break;
        default:
            break;
    }
}
/**
 * 打印日记年度数目Log
 */
function showDiaryYearCountLog() {
    console.log("DiaryYearCount>" +
        "\n2018=" + diaryCount2018 +
        "\n2017=" + diaryCount2017 +
        "\n2016=" + diaryCount2016 +
        "\n2015=" + diaryCount2015 +
        "\n2014=" + diaryCount2014 +
        "\n2013=" + diaryCount2013 +
        "\n2012=" + diaryCount2012 +
        "\n2011=" + diaryCount2011 +
        "\n2010=" + diaryCount2010 +
        "\n2009=" + diaryCount2009 +
        "\n2008=" + diaryCount2008 +
        "\n2007=" + diaryCount2007 +
        "\n2006=" + diaryCount2006 +
        "\n2005=" + diaryCount2005 +
        "\n2004=" + diaryCount2004 +
        "\n2003=" + diaryCount2003 +
        "\n2002=" + diaryCount2002
    );
}