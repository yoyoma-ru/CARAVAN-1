// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


// var str1 = 'Hello';
// var str2 = 'World';
// alert(str1+str2);

// var max = 100;
// var num = 1;
// var count = 0;

// while(num<max){
// 	num = num * 2;
// 	count = count + 1;
// }

// alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です。');


// var i;
// var num = 0;

// for(i=1; i<11; i++){
// 	num = num + i;
// }

// alert('1から10まで足した結果は' + num + 'です');


// var alertString;
// alertString = addStoring("WebCamp");

// alert(alertString);

// function addStoring(strA){
// 	var addStr = "Hello " + strA;
// 	return addStr;
// }


// var promptStr = prompt('何か好きな文字を入力してください');
// alert(promptStr);


var user_hand = prompt('ジャンケンのグー、チョキ、パーのいずれから選んでください');
var js_hand = getJShand();
var judge = winLose(user_hand, js_hand);
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand +'です。\n結果は' + judge + 'です。' );

function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3 );
	var hand_name;

	if(js_hand_num == 0){
		hand_name = "グー";
	}
	else if(js_hand_num == 1){
		hand_name = "チョキ";
	}
	else if(js_hand_num == 2){
		hand_name = "パー";
	}

	return hand_name;
}

function winLose(user, js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}else if(js == "チョキ"){
			winLoseStr = "勝ち";
		}else if(js == "パー"){
			winLoseStr = "負け";
		}
	}else if(user == "チョキ"){
		if(js == "グー"){
			winLoseStr = "負け";
		}else if(js == "チョキ"){
			winLoseStr = "あいこ";
		}else if(js == "パー"){
			winLoseStr = "勝ち";
		}
	}else if(user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち";
		}else if(js == "チョキ"){
			winLoseStr = "負け";
		}else if(js == "パー"){
			winLoseStr = "あいこ";
		}
	}

	return winLoseStr;
}








