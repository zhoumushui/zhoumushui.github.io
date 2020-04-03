function loadLastInput() {

    var temp = getCookie("riqib");

    if (temp != "") {
        var ss = temp.split('-');

        $("endYear").value = ss[0];
        $("endMonth").value = ss[1];
        $("endDate").value = ss[2];
    }

    var temp = getCookie("riqia");
    if (temp != "") {
        $("decday").value = temp;
    }

}

var day0;

function cala() {
    day0 = new Date($("startYear").value, $("startMonth").value - 1, $("startDate").value);
    if (day0 == "Invalid Date") {
        alert("请输入正确日期");
        return;
    }
    setCookie("riqia", $("decday").value);

    theform.submit();

}


function output_a(dateStr, ly, lm, ld) {
    theday = new Date(dateStr);
    $("result1").innerHTML = getdatestring(theday) + "&nbsp;" + getlinfo(ly, lm, ld);

}

function countDay() {
    y2 = $("startYear").value;
    m2 = $("startMonth").value;
    d2 = $("startDate").value;

    y3 = $("endYear").value;
    m3 = $("endMonth").value;
    d3 = $("endDate").value;

    var dateStart = new Date(y2, m2 - 1, d2);
    var dateEnd = new Date(y3, m3 - 1, d3);

    console.log(dateEnd)
    if (dateStart == "Invalid Date" || dateEnd == "Invalid Date") {
        alert("请输入正确日期");
        return;
    }

    setCookie("riqib", y3 + "-" + m3 + "-" + d3);

    $("result2").innerHTML = (dateEnd - dateStart) / 86400000 + "天";
}

function setStartDay(year, month, date) {
    $("startYear").value = year;
    $("startMonth").value = month;
    $("startDate").value = date;
}

function setEndDay(year, month, date) {
    $("endYear").value = year;
    $("endMonth").value = month;
    $("endDate").value = date;
}