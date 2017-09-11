// ==UserScript==
// @name         STU AutoElective
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  自動選課腳本，如有人退選立即自動選上此課程，請自行修改 @match 的網址(你要選的該課程的表格網址) 此為 AS生活通識選修 的網址
// @author       ThanatosDi
// @include      https://info.stu.edu.tw/aca/student/selectcourse/stusecondcourse/StuSecondAddCourseList.asp
// @match        https://info.stu.edu.tw/aca/student/selectcourse/stusecondcourse/StuSecondAddCourseList.asp?ID1=61&ID2=AS&ID3=%A5%CD%AC%A1%B3q%C3%D1%BF%EF%AD%D7
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}

function STU(ClassNumber) {
	var value = document.getElementsByClassName("handleCourses tablesorter")['0']['children']['3']['children'][ClassNumber-1]['firstChild']['lastElementChild'];
	if(value==null){
		console.log("沒人退選正在努力中");
		window.location.reload(true);
	}else{
		window.location.assign(value['href']);
	}
}

//你要選的課 表格由上而下是第幾個就填上去，假如是表格中第二個就填入2
STU(3);
//自動重新整理延遲秒數預設0.5秒 ※注意：請勿修改過短，可能會造成學校網路堵塞等問題本人一概不負責！
sleep(500);
})();

