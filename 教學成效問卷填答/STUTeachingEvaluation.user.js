// ==UserScript==
// @name         STU Teaching Evaluation
// @namespace    https://github.com/Kutinging/STU
// @version      1.0.0
// @description  自動將"教學成效問卷"填寫完成，此腳本將會自動將所有課程填寫完畢
// @author       ThanatosDi
// @icon         data:image/png;base64,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
// @include      https://info.stu.edu.tw/aca/student/CoStuAns/StuOpinion.asp
// @match        https://info.stu.edu.tw/aca/student/CoStuAns/listQuestionView.asp*
// @match        https://info.stu.edu.tw/aca/student/CoStuAns/Questionup.asp
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

function GoToForm(){
	var OnclickValue = document.getElementsByTagName("tr")[1]['attributes']['onclick'].value;
	if(OnclickValue=="Go2()"){
		exit();
	}else{
		console.log(OnclickValue);
		location.assign("javascript:" + OnclickValue + ";void(0)" );
	}
}

function EnterGrade(min,max,trap){
	/* 4~5分隨機亂數(第一到第二選項隨機亂選) */
	var maxNum = max;
	var minNum = min;
	var grade = new Array();
    var i,x;
	for(i=0;i<26;i++){
	/* 隨機生成26個隨機分數 */
		var n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
		grade[i] = n;
	}
	
	grade.splice(10,0,trap);

	x=document.getElementsByTagName('input');
	var id = new Array();
	/* 將 html碼的input標籤的id放入id陣列 */
	for(i=0;i<x.length;i++){
		id[i] = x[i].id;
	}
	/* 將 id 陣列中重複的去掉放入 newid 陣列中 */
	var newid =id.filter(function(element, index, arr){
		return arr.indexOf(element)=== index;
	});
	/* 判斷選項勾選 */
	var z = 0;
	for(i=0;i<x.length;i++){
		if(x[i].id==newid[z] & x[i].value==grade[z]){
			x[i].checked = true;
			z++;
		}
	}
	/* 自動送出表單*/
	upsetonclick();
}

if(location.pathname=="/aca/student/CoStuAns/StuOpinion.asp"){
	GoToForm();
}else if(location.pathname=="/aca/student/CoStuAns/listQuestionView.asp"){
	/*
	EnterGrade(選項最低分數,選項最高分數,第十一題分數)
	完全符合 	5分
	非常符合 	4分
	有點符合 	3分
	有點不符合 	2分
	完全不符合	1分
	*/
	EnterGrade(4,5,5);
}else if(location.pathname=="/aca/student/CoStuAns/Questionup.asp"){
	window.location.assign("https://info.stu.edu.tw/aca/student/CoStuAns/StuOpinion.asp");
}
})();
