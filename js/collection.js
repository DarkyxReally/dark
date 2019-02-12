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
					'url':'http://www.baidu.com',
				},{
					'name':'百度翻译',
					'url':'http://fanyi.baidu.com',
				},{
					'name':'积粒网',
					'url':'http://www.91wenwen.net',
				},{
					'name':'调查网',
					'url':'http://www.1diaocha.com',
				},{
					'name':'艾瑞调研',
					'url':'http://www.iclick.cn',
				},{
					'name':'公司OA正式环境',
					'url':'http://oa.ibumobile.com',
				},{
					'name':'淘宝网',
					'url':'http://www.taobao.com',
				},{
					'name':'京东商城',
					'url':'https://www.jd.com',
				},{
					'name':'小米商城',
					'url':'http://www.mi.com',
				},{
					'name':'随手记',
					'url':'http://www.sui.com',
				},{
					'name':'腾讯云',
					'url':'http://cloud.tencent.com',
				},{
					'name':'阿里云',
					'url':'http://www.aliyun.com',
				},{
					'name':'行云管家',
					'url':'http://yun.cloudbility.com',
				},{
					'name':'在线工具',
					'url':'http://tool.oschina.net',
				},{
					'name':'PDF文档转换',
					'url':'http://www.pdfdo.com',
				},{
					'name':'图片压缩',
					'url':'https://tinypng.com',
				},{
					'name':'前端图表API',
					'url':'http://echarts.baidu.com',
				},{
					'name':'友盟-网站数据统计',
					'url':'https://www.umeng.com',
				},{
					'name':'深圳图书馆',
					'url':'http://www.szlib.org.cn',
				},{
					'name':'社会保险',
					'url':'http://szsi.sz.gov.cn',
				},{
					'name':'住房公积金',
					'url':'http://www.szzfgjj.com',
				},{
					'name':'深圳汽车牌照摇号',
					'url':'http://xqctk.sztb.gov.cn',
				},{
					'name':'长沙住建局',
					'url':'http://szjw.changsha.gov.cn',
				},{
					'name':'花生壳',
					'url':'http://b.oray.com',
				},{
					'name':'招聘-人才热线',
					'url':'http://www.cjol.com',
				},{
					'name':'易码-短信验证码',
					'url':'http://www.51ym.me',
				},{
					'name':'斗鱼',
					'url':'https://www.douyu.com',
				},{
					'name':'小葫芦-直播统计网',
					'url':'https://www.xiaohulu.com',
				},{
					'name':'票联网-汽车购票',
					'url':'http://www.piaolianwang.com',
				},{
					'name':'虚拟货币-非小号',
					'url':'http://www.feixiaohao.com',
				},{
					'name':'设计师网址',
					'url':'https://hao.uisdc.com',
				}];
	//循环显示AUrl对象数据
	var defaultColumn = 6;
	var aUrlLth = dataAUrl.length;
	var divRowLth = Math.ceil(aUrlLth/defaultColumn);
	var div = $(".container");
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
			ahref.attr("href",dataAUrl[j].url);
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
