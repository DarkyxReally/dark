var _czc = _czc || [];
$(function() {
	intiConfShares();
	setInterval(function() {
		getSharesBysina();
	}, 5000)
})
function intiConfShares(){
	//默认对象数据
	var defaultObj = {
							name:'海天精工',
							code:'601882'
					};
	var confSharesObj = {
			confSharesList:
					[defaultObj,{
							name:'中国铝业',
							code:'601600'
					}]
			};
	var confShareshtml = template("confSharesDate", confSharesObj);
	$("#confSharesDiv").html("");
	$("#confSharesDiv").append(confShareshtml);
	$("#sharesCodeHid").val(defaultObj.code);
	getSharesBysina();
}
function textChanged(o) {
	if (event.keyCode == 13) {
		searchCode();
	}
}
function searchCode(){
	var code = $("#sharesCode").val();
	$("#sharesCodeHid").val(code);
	_czc.push(["_trackEvent", "shares", "搜索",code]);
	getSharesBysina();
}
function pullSharesCode(code){
	$("#sharesCodeHid").val(code);
	_czc.push(["_trackEvent", "shares", "默认",code]);
	getSharesBysina();
}
function getSharesBysina(){
	var code = $("#sharesCodeHid").val();
	$ .ajax({
		type:'GET',
		dataType:'script',
		async:true,
		url:"hq.sinajs.cn/list=sh"+code,
		cache:true,
		dataTypeString:'script',
		success:function(){
				var sharesIofo = eval("hq_str_sh"+code);
				if (sharesIofo != '') {
					$("#sharesOldCodeHid").val(code);
					loadSharesData(sharesIofo.split(","));
				}else {
					var oldCode = $("#sharesOldCodeHid").val();
					$("#sharesCodeHid").val(oldCode);
					$("#sharesCode").val('');
					alert("股票代码输入有误，请重新输入！");
				}
			}
		})
}
function loadSharesData(elements){
	var code = $("#sharesCodeHid").val();
	var obj = {
		shares:{
			name : 					elements[0],//股票名字
			code : 					code,			//股票代码
			openingPrice : 	elements[1],//今日开盘价
			yesClosPrice : 	elements[2],//昨日收盘价
			nowPrice : 			elements[3],//当前价格
			nowDHigPrice : 	elements[4],//今日最高价
			nowDLowPrice : 	elements[5],//今日最低价
			date : 					elements[30],//日期
			time : 					elements[31],//时间
			sellPrice : 		elements[6],//竞买价，即买一报价
			buyPrice : 			elements[7],//竞卖价，即卖一报价
			dealNum : 			elements[8]/100,//成交的股票数，由于股票交易以一百股为基本单位，所以在使用时，通常把该值除以一百
			dealPrice : 		elements[9]/10000,//成交金额，单位为“元”，为了一目了然，通常以“万元”为成交金额的单位，所以通常把该值除以一万
			sellNum1 : 			elements[10]/100,//买一申请股数
			sell1 : 				elements[11],//买一申请报价
			sellNum2 : 			elements[12]/100,//
			sell2 : 				elements[13],//
			sellNum3 : 			elements[14]/100,//
			sell3 : 				elements[15],//
			sellNum4 : 			elements[16]/100,//
			sell4 : 				elements[17],//
			sellNum5 : 			elements[18]/100,//
			sell5 : 				elements[19],//
			buyNum1 : 			elements[20]/100,//卖一申请股数
			buy1 : 					elements[21],//卖一申请报价
			buyNum2 : 			elements[22]/100,//
			buy2 : 					elements[23],//
			buyNum3 : 			elements[24]/100,//
			buy3 : 					elements[25],//
			buyNum4 : 			elements[26]/100,//
			buy4 : 					elements[27],//
			buyNum5 :				elements[28]/100,//
			buy5 : 					elements[29]//
		}
	}
	var html = template("sharesDate", obj);
	$("#sharesDiv").html("");
	$("#sharesDiv").append(html);
	loadSharesImg();
}
function loadSharesImg(){
	var timestamp=new Date().getTime();
	var code = $("#sharesCodeHid").val();
	var type = $("input[name='imgTypeRadios']:checked").val();
	var imgURL = "http://image.sinajs.cn/newchart/" + type + "/sh" + code + ".gif?s="+timestamp;
	$("#minNImg").attr("src",imgURL);
}