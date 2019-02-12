var _czc = _czc || [];
$(function() {
	initLi();
	changebj();
})
function initLi(){
	//默认对象数据
	var defaultUrl = {
						'name':'collection',
						'url':'./collection.html',
					};
	//初始li对象数据
	var dataLi = [defaultUrl,{
					'name':'shares',
					'url':'./shares.html',
				}];
	//循环显示li对象数据
	var liLth = dataLi.length;
	var ul = $("#labelUl");
	for(i = 0; i < liLth; i++){
		var li = $("<li></li>");

		var defaultClass = "nav-item";
		if(i == 0){
			defaultClass = "nav-item active liBs";
		}

		var ahref = $("<a></a>");
		ahref.attr("class","nav-link");
		ahref.attr("href","#");
		ahref.attr("onclick","changeLabel(this,\'" + dataLi[i].url + "\')");
		ahref.text(dataLi[i].name);

		li.attr("class",defaultClass);
		li.append(ahref);
		ul.append(li);
	}
	//窗口默认地址
	$("#indexIframe").attr('src',defaultUrl.url);
}

function changebj(){
	//默认图片地址
	var defaultUrl = './img/bj.jpg';
	$('body').css({
		backgroundImage : 'url(' + defaultUrl + ')'
	})
	// var imgArr = [ defaultUrl ,'./img/bj2.jpg'];
	// var i = 0;
	// setInterval(function() {
	// 	if (i == imgArr.length - 1) {
	// 		i = 0;
	// 	} else {
	// 		i++;
	// 	}
	// 	$('body').css({
	// 		backgroundImage : 'url(' + imgArr[i] + ')'
	// 	})
	// }, 5000)
}

function changeLabel(obj,url){
	_czc.push(["_trackEvent", "index", "切换",obj.innerText]);
	$(obj).parent().addClass('liBs').siblings().removeClass('liBs');
	$("#indexIframe").attr('src',url);
}