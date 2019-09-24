var _czc = _czc || [];
$(function() {
	initAUrl();
})
function initAUrl(){
	//默认点击a标签方式:_blank新窗口打开
	var aType = "";
	//初始li对象数据
	var dataAUrl = [{
					'name':'百度搜索',
					'url':'www.baidu.com',
				},{
					'name':'百度翻译',
					'url':'fanyi.baidu.com',
				},{
					'name':'学习记录',
					'url':'www.91wenwen.net',
				},{
					'name':'资料记录',
					'url':'www.1diaocha.com',
				},{
					'name':'学习资料',
					'url':'www.iclick.cn',
				},{
					'name':'淘宝网',
					'url':'www.taobao.com',
				},{
					'name':'京东商城',
					'url':'www.jd.com',
				},{
					'name':'小米商城',
					'url':'www.mi.com',
				},{
					'name':'随手记',
					'url':'www.sui.com',
				},{
					'name':'腾讯云',
					'url':'cloud.tencent.com',
				},{
					'name':'阿里云',
					'url':'www.aliyun.com',
				},{
					'name':'行云管家',
					'url':'yun.cloudbility.com',
				},{
					'name':'在线工具',
					'url':'tool.oschina.net',
				},{
					'name':'PDF文档转换',
					'url':'www.pdfdo.com',
				},{
					'name':'图片压缩',
					'url':'tinypng.com',
				},{
					'name':'前端图表API',
					'url':'echarts.baidu.com',
				},{
					'name':'友盟-网站数据统计',
					'url':'www.umeng.com',
				},{
					'name':'深圳图书馆',
					'url':'www.szlib.org.cn',
				},{
					'name':'社会保险',
					'url':'szsi.sz.gov.cn',
				},{
					'name':'住房公积金',
					'url':'www.szzfgjj.com',
				},{
					'name':'深圳汽车牌照摇号',
					'url':'xqctk.jtys.sz.gov.cn',
				},{
					'name':'长沙住建局',
					'url':'szjw.changsha.gov.cn',
				},{
					'name':'花生壳',
					'url':'b.oray.com',
				},{
					'name':'招聘-人才热线',
					'url':'www.cjol.com',
				},{
					'name':'易码-短信验证码',
					'url':'www.51ym.me',
				},{
					'name':'斗鱼',
					'url':'www.douyu.com',
				},{
					'name':'小葫芦-直播统计网',
					'url':'www.xiaohulu.com',
				},{
					'name':'票联网-汽车购票',
					'url':'www.piaolianwang.com',
				},{
					'name':'虚拟货币-非小号',
					'url':'www.feixiaohao.com',
				},{
					'name':'设计师网址',
					'url':'hao.uisdc.com',
				},{
					'name':'GitHub',
					'url':'github.com',
				},{
					'name':'腾讯在线文档',
					'url':'docs.qq.com',
				}];
	//循环显示AUrl对象数据
	var defaultColumn = 6;
	var aUrlLth = dataAUrl.length;
	var divRowLth = Math.ceil(aUrlLth/defaultColumn);
	var div = $(".container");
	var ishttps = 'https:' == document.location.protocol ? true: false;
	var url = "";
	if(ishttps){
		url = "https://";
	}else{
		url = "http://";
	}
	for(i = 0; i < divRowLth; i++){
		var divRow = $("<div></div>");
		divRow.attr("class","row");
		var jColumn = (i + 1) * defaultColumn;
		if( jColumn > aUrlLth){
			jColumn = aUrlLth;
		}
		for(j = i * defaultColumn; j < jColumn; j++){
			var divCol = $("<div></div>");
			divCol.attr("class","col-md-2");
			var ahref=$("<a></a>");
			ahref.attr("class","btn btn-outline-info");
			ahref.attr("target",aType);
			ahref.attr("onclick","_czc.push(['_trackEvent', 'collection', '点击','"+ dataAUrl[j].name +"']);");
			ahref.attr("href",url + dataAUrl[j].url);
			var ahrefTitle = dataAUrl[j].name;
			ahref.attr("title",ahrefTitle);
			if(ahrefTitle.length > 6){
				ahrefTitle = ahrefTitle.substring(0,6) + "...";
			}
			ahref.text(ahrefTitle);
			divCol.append(ahref);
			divRow.append(divCol);
		}
		div.append(divRow);
	}
}
