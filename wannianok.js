﻿		  
var debug = 2; // -1: disable; 0: all; N: show level N debug msg.

//农历数据信息
var lunarInfo = new Array(
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)

//太阳历每月天数
var solarMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
//天干
var Gan = new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
//地支
var Zhi = new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
//属相
var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
//节气
var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
//?????
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
//
var nStr1 = new Array("日","一","二","三","四","五","六","七","八","九","十");
//
var nStr2 = new Array("初","十","廿","卅","　");
//英语月份简写
var monthName = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");

//国历节日 *表示节假日
var sFtv = new Array(
		"0101*元旦",
		"0214 情人节",
		"0308 妇女节",
		"0312 植树节",
		"0315 消费者权益日",
		"0321 世界森林日、世界儿歌日",
		"0322 世界水日",
		"0323 世界气象日",
		"0324 世界防治结核病日",
		
		"0401 愚人节",
		"0407 世界卫生日",
		"0422 世界地球日",
		
		"0501*劳动节",
		"0504 青年节",
		"0505 碘缺乏病防治日",
		"0508 世界红十字日",
		"0512 国际护士节",
		"0515 国际家庭日",
		"0517 世界电信日",
		"0518 国际博物馆日",
		"0520 全国学生营养日",
		"0523 国际牛奶日",
		"0531 世界无烟日",
		
		"0601 儿童节",
		"0605 世界环境日",
		"0606 全国爱眼日",
		"0616 防治荒漠化和干旱日",
		"0623 国际奥林匹克日",
		"0625 全国土地日",
		"0626 国际反毒品日",
		
		"0701 香港回归纪念",//国际建筑日
		"0707 中国人民抗日战争纪念日",
		"0711 世界人口日",	
		
		"0808 父亲节",
		
		"0908 国际扫盲日",
		"0910 教师节",
		"0912 嘻嘻日",
		"0916 国际臭氧层保护日",
		"0920 国际爱牙日",
		"0927 世界旅游日",
		"0928 孔子诞辰",
		
		"1001*国庆节",//国际音乐日
	        "1002*国庆节",
                "1003*国庆节",
		"1004 世界动物日",
		"1006 老人节",
		"1008 全国高血压日 世界视觉日",
		"1009 世界邮政日",
		"1015 国际盲人节",
		"1016 世界粮食日",
		"1017 世界消除贫困日",
		"1024 联合国日",
		
		"1108 中国记者日",
		"1109 消防宣传日",
		"1112 孙中山诞辰纪念",
		"1114 世界糖尿病日",
		"1117 国际大学生节",

		"1201 世界艾滋病日",
		"1203 世界残疾人日",
		"1209 世界足球日",
		"1220 澳门回归纪念",
		"1225 圣诞节",		
		"1229 国际生物多样性日"
		);

//农历节日 *表示节假日
var lFtv = new Array(
		"0101*春节",
	        "0102*春节",
                "0103*春节",
		"0115 元宵节",
		"0505*端午节",
		"0707 七夕情人节",
		"0715 中元节",
		"0815*中秋节",
		"0909 重阳节",
		"1208 腊八节",
		"1223 小年",
		"0100*除夕"
		);

//按周计算 月周日
var wFtv = new Array(
		"0520 国际母亲节",
		"0530 全国助残日",
		"0630 国际父亲节",
		"0932 国际和平日",
		"0940 国际聋人节",
		"1013 国际减轻自然灾害日",
		"1011 国际住房日"
		);

function log(level,  msg) {
        if (debug == 0 || debug == level)
        if(window.console) {
                window.console.log("[DEBUG]" + msg);
        }
}

function lYearDays(y) {
   var i, sum = 348;
   for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0;
   return(sum+leapDays(y));
}

function leapDays(y) {
   if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29);
   else return(0);
}

function leapMonth(y) {
   return(lunarInfo[y-1900] & 0xf);
}

function monthDays(y,m) {
   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
}

function Lunar(objDate) {
   var m = ""; 
   var i, leap=0, temp=0;
   var baseDate = new Date(1900,0,31);
   var offset   = Math.floor((objDate.getTime() + 2206425600000)/86400000);
   m += "objDate="+objDate.getTime()+", new Date(1900,0,31)="+baseDate.getTime();
   m += "offset="+offset;
   
   this.dayCyl = offset + 40;
   this.monCyl = 14;

   for(i=1900; i<2050 && offset>0; i++) {
      temp = lYearDays(i);
      offset -= temp;
      this.monCyl += 12;
   }
   
   if(offset<0) {
      offset += temp;
      i--;
      this.monCyl -= 12;
   }

   this.year = i;
   this.yearCyl = i-1864;

   leap = leapMonth(i);
   this.isLeap = false;

   for(i=1; i<13 && offset>0; i++) {
      if(leap>0 && i==(leap+1) && this.isLeap==false)
         { --i; this.isLeap = true; temp = leapDays(this.year); }
      else
         { temp = monthDays(this.year, i); }

      if(this.isLeap==true && i==(leap+1)) this.isLeap = false;

      offset -= temp;
      if(this.isLeap == false) this.monCyl ++;
   }

   if(offset==0 && leap>0 && i==leap+1)
      if(this.isLeap)
         { this.isLeap = false; }
      else
         { this.isLeap = true; --i; --this.monCyl;}

   if(offset<0){ offset += temp; --i; --this.monCyl; }

   this.month = i;
   this.day = offset + 1;
   
   m += "\noffset="+offset+", year="+this.year+", yearCyl="+this.yearCyl+", month="+this.month+",\n monthCyl="+this.monthCyl+", day="+this.day+", dayCyl="+this.dayCyl;
   log(2, m);
}

function solarDays(y,m) {
   if(m==1)
      return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28);
   else
      return(solarMonth[m]);
}

function cyclical(num) {
   return(Gan[num%10]+Zhi[num%12]);
}

function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {

      this.isToday    = false;
      this.sYear      = sYear;
      this.sMonth     = sMonth;
      this.sDay       = sDay;
      this.week       = week;
      this.lYear      = lYear;
      this.lMonth     = lMonth;
      this.lDay       = lDay;
      this.isLeap     = isLeap;
      this.cYear      = cYear;
      this.cMonth     = cMonth;
      this.cDay       = cDay;

      this.color      = "";

      this.lunarFestival = "";
      this.solarFestival = "";
      this.solarTerms    = "";

}

function sTerm(y,n) {
   log(1,  "y="+y+" n="+n+" sTermInfo[n]="+sTermInfo[n]+" Date.UTC(1900,0,6,2,5)="+Date.UTC(1900,0,6,2,5)+" Date.UTC(1970,0,1,0,0)="+Date.UTC(1970,0,1,0,0) );
   var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) -2208549300000 );
   return(offDate.getUTCDate());
}

function calendar(y,m) {
        log(1,  "i am in calendar() now");
	var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2;
	var lDPOS = new Array(3);
	var n = 0;
	var firstLM = 0;
     
	sDObj = new Date(y,m,1);
	     
	this.length    = solarDays(y,m);
     	this.firstWeek = sDObj.getDay();

        log(1,  "this.length: "+this.length);
        log(1,  "begin loop for(var i=0;i<this.length;i++)");
	for(var i=0;i<this.length;i++) {
	  
		if(lD>lX) {
			sDObj = new Date(y,m,i+1);
			lDObj = new Lunar(sDObj);
			lY    = lDObj.year;
			lM    = lDObj.month;
			lD    = lDObj.day;
			lL    = lDObj.isLeap;
			lX    = lL? leapDays(lY): monthDays(lY,lM);
	       
			if(n==0) firstLM = lM;
			lDPOS[n++] = i-lD+1;
	  	}
	  
	       //log(1,  "lDObj.dayCyl: "+lDObj.dayCyl);
		this[i] = new calElement(y, m+1, i+1, nStr1[(i+this.firstWeek)%7],
                               lY, lM, lD++, lL,
                               cyclical(lDObj.yearCyl) ,cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++) );

	  
		if((i+this.firstWeek)%7==0)   this[i].color = "#ff5f07";
		if((i+this.firstWeek)%14==13) this[i].color = "#ff5f07";
     	}
        log(1,  "end loop for(var i=0;i<this.length;i++)");

	tmp1=sTerm(y,m*2  )-1;
	tmp2=sTerm(y,m*2+1)-1;
	log(1,  "m: "+m+" tmp1: "+tmp1+" "+solarTerm[m*2]+" tmp2: "+tmp2+" "+solarTerm[m*2+1]);
	this[tmp1].solarTerms = solarTerm[m*2];
     	this[tmp2].solarTerms = solarTerm[m*2+1];
	if(m==3) this[tmp1].color = "#ff5f07";
        
        log(1,  "begin loop for(i in sFtv)");
	for(i in sFtv)
		if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
			if(Number(RegExp.$1)==(m+1)) {
				this[Number(RegExp.$2)-1].solarFestival += RegExp.$4 + " ";
				if(RegExp.$3=="*") this[Number(RegExp.$2)-1].color = "#ff5f07";
	       		}
     
        log(1,  "begin loop for(i in wFtv)");
	for(i in wFtv)
		if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
			if(Number(RegExp.$1)==(m+1)) {
				tmp1=Number(RegExp.$2);
				tmp2=Number(RegExp.$3);
				this[((this.firstWeek>tmp2)?7:0) + 7*(tmp1-1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + " ";
	       		}
     
        log(1,  "begin loop for(i in lFtv)");
	for(i in lFtv)  
		if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
                        log(1,  lFtv[i]);
			tmp1=Number(RegExp.$1)-firstLM;
			if(tmp1==-11) tmp1=1;
			if(tmp1 >=0 && tmp1<n) {
				tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1;
				if( tmp2 >= 0 && tmp2<this.length) {
                                        log(1,  "tmp2 >= 0 && tmp2("+tmp2+")<this.length("+this.length+")");
                                        log(1,  RegExp.$4);
                                        log(1,  this[tmp2].lunarFestival);
					this[tmp2].lunarFestival += RegExp.$4 + " ";
                                        log(1,  RegExp.$3);
					if(RegExp.$3=="*") this[tmp2].color = "#ff5f07";
				}
			}
	  	}
     
        log(1,  "begin 黑色星期五");
	if((this.firstWeek+12)%7==5)
		this[12].solarFestival += "黑色星期五 ";
     
	if(y==tY && m==tM) {
		this[tD-1].isToday = true;
	}
}

function cDay(d){
	var s;
	switch (d) {
		case 10:
			s = "初十"; 
			break;
		case 20:
			s = "二十"; 
			break;
		case 30:
			s = "三十";
			break;
		default :
			s = nStr2[Math.floor(d/10)];
			s += nStr1[d%10];
	}
	return(s);
}

var cld;
/*cld[?]这个输入日期,drawcld(年,月)对应年月,cld可输出想要的东西,例子参考677行*/

function drawCld(SY,SM) {
        log(1,  "i am in drawCld() now");
        
	var i,sD,s,size;
	log(1,  "begin to create calendar cld");
	cld = new calendar(SY,SM);
        log(1,  "calendar cld creation finished");
	/*
	   if(SY>1874 && SY<1909) yDisplay = "光绪" + (((SY-1874)==1)?"元":SY-1874)
	   if(SY>1908 && SY<1912) yDisplay = "宣统" + (((SY-1908)==1)?"元":SY-1908)
	   if(SY>1911 && SY<1950) yDisplay = "民国" + (((SY-1911)==1)?"元":SY-1911)
	   if(SY>1949) yDisplay = "共和国" + (((SY-1949)==1)?"元":SY-1949)
	 */
     
	document.getElementById("gz").innerHTML = "  农历" 
		+ cyclical(SY-1900+36) + "年   【"+Animals[(SY-4)%12]+"】";
        log(1,  "innerHTML of gz is "+document.getElementById("gz").innerHTML);
   //YMBG.innerHTML = " " + SY + "<BR> " + monthName[SM];
        
	for(i=0;i<42;i++) {
	  
		sObj = document.getElementById("sd"+ i);
		lObj = document.getElementById("ld"+ i);
	  
		sObj.style.background = "";
	  	lObj.style.background = "";
	  
		sD = i - cld.firstWeek;
	  
		if(sD>-1 && sD<cld.length) {	       
			sObj.innerHTML = sD+1;
			if(cld[sD].isToday){
				//设置今天的背景色
				sObj.style.background = "red";
				//lObj.style.background = "red";
			}
	       
			sObj.style.color = cld[sD].color;
	       
			if(cld[sD].lDay==1)
				lObj.innerHTML = "<b>"+(cld[sD].isLeap?"闰":"") 
					+ cld[sD].lMonth + "月" 
					+ (monthDays(cld[sD].lYear,cld[sD].lMonth)==29?"小":"大")+"</b>";
			else
		    		lObj.innerHTML = cDay(cld[sD].lDay);
	       
			s=cld[sD].lunarFestival;
			if(s.length>0) {
				//农历节日名称大于5个字截去
				//if(s.length>5) s = s.substr(0, 3)+"…";
				if(s.length>7) s = s.substr(0, 5)+"…";
				s = s.fontcolor("#ff5f07");
			}
			else {
				s=cld[sD].solarFestival;
				if(s.length>0) {
					//阳历节日名称截去   
					//size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?8:4;			
					size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?9:5;
			 		if(s.length>size+1) s = s.substr(0, size-1)+"…";
					s = s.fontcolor("#0168ea");
				}
				else {
					s=cld[sD].solarTerms;
					if(s.length>0) s = s.fontcolor("#44d7cf");
				}
			}
			if(s.length>0) lObj.innerHTML = s;
	  
		}
		else {
			sObj.innerHTML = " ";
			lObj.innerHTML = " ";
		}
     	}
}


function changeCld() {
	var y,m;
	y = document.getElementById("sy").selectedIndex + 1900;
	m = document.getElementById("sm").selectedIndex;
     	drawCld(y,m);
}

function pushBtm(K) {
	switch (K){
		case "YU" :
			if(document.getElementById("sy").selectedIndex > 0)
			       	document.getElementById("sy").selectedIndex--;
			break;
		case "YD" :
			if(document.getElementById("sy").selectedIndex < 149) 
				document.getElementById("sy").selectedIndex++;
	       		break;
		case "MU" :
			if(document.getElementById("sm").selectedIndex > 0) {      
				document.getElementById("sm").selectedIndex--;
			}
			else {
				document.getElementById("sm").selectedIndex = 11;
				if(document.getElementById("sy").selectedIndex > 0) 
					document.getElementById("sy").selectedIndex--;
			}
			break;
		case "MD" :
			if(document.getElementById("sm").selectedIndex < 11) {
				document.getElementById("sm").selectedIndex++;
			}
			else {
				document.getElementById("sm").selectedIndex = 0;
				if(document.getElementById("sy").selectedIndex < 149) 
					document.getElementById("sy").selectedIndex++;
			}
			break;
		default :
			document.getElementById("sy").selectedIndex = tY - 1900;
			document.getElementById("sm").selectedIndex = tM;
	}
	changeCld();
}

var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();

var width = "130"; //detail层宽度
var offsetx = 2;
var offsety = 16;

var x = 0;
var y = 0;
var show = 0;
var sw = 0;
var cnt = 0;

var dStyle;
document.onmousemove = mEvn;

//用detail层显示详细信息

function changesy(nsy)
{
	var selectObj=document.getElementById("sy");

for (i=0; i< selectObj.options.length; i++)
   {

   var curOptObj=selectObj.options[i];
 
    var curText=curOptObj.text;

    if(nsy==curText)
	{

        curOptObj.selected=true;

    }
/**/
   }
}

function changesm(nsm)
{
	var selectObj=document.getElementById("sm");

for (i=0; i< selectObj.options.length; i++)
   {

    var curOptObj=selectObj.options[i];

    var curText=curOptObj.text;

    if(nsm==curText)
	{

        curOptObj.selected=true;

    }

   }
}

function getAstro(m,d){    
    return m-(d<"102223444433".charAt(m-1)- -19);   //输出0～12的数字，0表示摩羯，1表示水瓶，依此类推，...，11是射手，12是摩羯。
	/*
	return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m*2-(d<"102223444433".charAt(m-1)- -19)*2,2);
	*/
}
function getAstrov(m,d){    
    return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m*2-(d<"102223444433".charAt(m-1)- -19)*2,2);
	/*return m-(d<"102223444433".charAt(m-1)- -19);   //输出0～12的数字，0表示摩羯，1表示水瓶，依此类推，...，11是射手，12是摩羯。	
	*/
}
function getAstroi(m,d){    
    var v1;
	v1=getAstrov(m,d);
	var f1;
	f1="牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯水瓶双鱼";
	var i;
	i=f1.indexOf(v1);
	var ii;
	if(i==0){ii=i;}
    else{ii=i/2;}	
	return ii;
}

function xunhuangetstr(str,bstr,addc)
{
var l;
l=str.length;
var i;
i=str.indexOf(bstr);
var raddc;
if(addc>l)
{raddc=addc%l;}else{raddc=addc};
var findex;
if((raddc+i)>l){findex=(raddc+i)%l;}else{findex=raddc+i;}
return str.substr(findex,1);
}

function zishiget(rigan,tttt)
{
var g11;
g11="甲乙丙丁戊己庚辛壬癸";
var b;
	if(tttt>=23)
	{
		b=xunhuangetstr(g11,rigan,1);	
	}
	else
	{
	    b=rigan;
	}
var zishi;
zishi="";
switch (b)
{
case "甲":
  zishi="甲";
  break;
case "己":
  zishi="甲";
  break;
case "乙":
  zishi="丙";
  break;
case "庚":
  zishi="丙";
  break;
case "丙":
  zishi="戊";
  break;
case "辛":
  zishi="戊";
  break;
case "丁":
  zishi="庚";
  break;
case "壬":
  zishi="庚";
  break; 
case "戊":
  zishi="壬";
  break;
case "癸":
  zishi="壬";
  break; 
}
/*这行可以用 甲己还是甲，乙庚丙作初，丙辛从戊起，丁壬从庚起，戊癸壬为头”return*/
return zishi;
}

function shizhiget(tttt)
{
var zhi1;
	switch (Math.floor(tttt))
	{
	case 0:
	  zhi1="子";
	  break;
	case 23:
	  zhi1="子";
	  break;
	case 1:
	  zhi1="丑";
	  break;
	case 2:
	  zhi1="丑";
	  break;
	case 3:
	  zhi1="寅";
	  break;
	case 4:
	  zhi1="寅";
	  break;
	case 5:
	  zhi1="卯";
	  break;
	case 6:
	  zhi1="卯";
	  break; 
	case 7:
	  zhi1="辰";
	  break;
	case 8:
	  zhi1="辰";
	  break; 
    case 9:
	  zhi1="巳";
	  break;
	case 10:
	  zhi1="巳";
	  break;
    case 11:
	  zhi1="午";
	  break;
	case 12:
	  zhi1="午";
	  break;
	case 13:
	  zhi1="未";
	  break;
	case 14:
	  zhi1="未";
	  break;
	case 15:
	  zhi1="申";
	  break;
	case 16:
	  zhi1="申";
	  break; 
	case 17:
	  zhi1="酉";
	  break;
	case 18:
	  zhi1="酉";
	  break; 
    case 19:
	  zhi1="戌";
	  break;
	case 20:
	  zhi1="戌";
	  break;
    case 21:
	  zhi1="亥";
	  break;
	case 22:
	  zhi1="亥";	  
	}
return zhi1;
}


function moonxzget(oldday,oldhour,oldmin,sunxz)
{
/*牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯水瓶双鱼*/
var sxz;
sxz="牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯水瓶双鱼";
var add;
if(oldday>29||oldday<2||(oldday==29&&oldhour==18&&oldmin>=30)||(oldday==29&&oldhour>18)||(oldday==2&&oldhour==17&&oldmin<30)||(oldday==2&&oldhour<17)) { add=0;}
else if((oldday>2&&oldday<5)||(oldday==2&&oldhour==17&&oldmin>=30)||(oldday==2&&oldhour>17)||(oldday==5&&oldhour==4&&oldmin<30)||(oldday==5&&oldhour<4)) { add=1;}
else if((oldday>5&&oldday<7)||(oldday==5&&oldhour==4&&oldmin>=30)||(oldday==5&&oldhour>4)||(oldday==7&&oldhour==15&&oldmin<30)||(oldday==7&&oldhour<15)) { add=2;}
else if((oldday>7&&oldday<10)||(oldday==7&&oldhour==15&&oldmin>=30)||(oldday==7&&oldhour>15)||(oldday==10&&oldhour==2&&oldmin<30)||(oldday==10&&oldhour<2)) { add=3;}
else if((oldday>10&&oldday<12)||(oldday==10&&oldhour==2&&oldmin>=30)||(oldday==10&&oldhour>2)||(oldday==12&&oldhour==13&&oldmin<30)||(oldday==12&&oldhour<13)) { add=4;}
else if((oldday>12&&oldday<15)||(oldday==12&&oldhour==13&&oldmin>=30)||(oldday==12&&oldhour>13)||(oldday==15&&oldhour==0&&oldmin<30)||(oldday==15&&oldhour<0)) { add=5;}
else if((oldday>15&&oldday<17)||(oldday==15&&oldhour==0&&oldmin>=30)||(oldday==15&&oldhour>0)||(oldday==17&&oldhour==11&&oldmin<30)||(oldday==17&&oldhour<11)) { add=6;}
else if((oldday>17&&oldday<19)||(oldday==17&&oldhour==11&&oldmin>=30)||(oldday==17&&oldhour>11)||(oldday==19&&oldhour==22&&oldmin<30)||(oldday==19&&oldhour<22)) { add=7;}
else if((oldday>19&&oldday<22)||(oldday==19&&oldhour==22&&oldmin>=30)||(oldday==19&&oldhour>22)||(oldday==22&&oldhour==9&&oldmin<30)||(oldday==22&&oldhour<9)) { add=8;}
else if((oldday>22&&oldday<24)||(oldday==22&&oldhour==9&&oldmin>=30)||(oldday==22&&oldhour>9)||(oldday==24&&oldhour==20&&oldmin<30)||(oldday==24&&oldhour<20)) { add=9;}
else if((oldday>24&&oldday<27)||(oldday==24&&oldhour==20&&oldmin>=30)||(oldday==24&&oldhour>20)||(oldday==27&&oldhour==7&&oldmin<30)||(oldday==27&&oldhour<7)) { add=10;}
else if((oldday>27&&oldday<29)||(oldday==27&&oldhour==7&&oldmin>=30)||(oldday==27&&oldhour>7)||(oldday==29&&oldhour==18&&oldmin<30)||(oldday==29&&oldhour<18)) { add=11;}

var l;
l=sxz.length;
var i;
i=sxz.indexOf(sunxz);
var addc;
addc=add*2;
var raddc;
if(addc>l)
{raddc=addc%l;}else{raddc=addc};
var findex;
if((raddc+i)>l){findex=(raddc+i)%l;}else{findex=raddc+i;}
return sxz.substr(findex,2);
}

function moonxzgeti(oldday,oldhour,oldmin,sunxz)
{    
    var v1;
	v1=moonxzget(oldday,oldhour,oldmin,sunxz);
	var f1;
	f1="牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯水瓶双鱼";
	var i;
	i=f1.indexOf(v1);
	var ii;
	if(i==0){ii=i;}
    else{ii=i/2;}	
	return ii;
}


function getoutw(yyyy,mmmm,dddd,tttt,min)
{
var xxxx;
changesy(yyyy.toString());changesm(mmmm.toString());changeCld();
var d=dddd-1;
xxxx= Animals[(yyyy-4)%12]+"  "+getAstrov(mmmm,dddd)+"  "+cld[d].sYear +" 年 "+ cld[d].sMonth
			+ " 月 "+cld[d].sDay +" 日<br />星期" + cld[d].week + "<br />"
			+ "<span>农历" + (cld[d].isLeap?"闰 ":" ")+cld[d].lYear + " 年 "
			+ cld[d].lMonth + " 月 " + cld[d].lDay + " 日<br />"
			+ cld[d].cYear + "年 " + cld[d].cMonth
			+ "月 " + cld[d].cDay + "日</span>-----节气->"+ cld[d].solarTerms+"-----世界节日->"+ cld[d].solarFestival+"-----农历节日->"+ cld[d].lunarFestival;
			
	/*alert(xxxx);*/
	
var zi1;
zi1=zishiget(cld[d].cDay.substr(0,1),Math.floor(tttt));	

var rtgan1;
var g1;
g1="甲乙丙丁戊己庚辛壬癸";	
if(Math.floor(tttt)==23||Math.floor(tttt)==0){rtgan1=zi1;}
else
{
 var add1;
 if(Math.floor(tttt)%2==0){add1=(Math.floor(tttt))/2;}
 else{add1=(Math.floor(tttt)+1)/2;}
 rtgan1=xunhuangetstr(g1,zi1,add1); 
}
var a1;
a1="鼠牛虎兔龙蛇马羊猴鸡狗猪";
var z1;
z1="子丑寅卯辰巳午未申酉戌亥";
var z11;
z11=shizhiget(tttt);	

/*alert(rtgan1+z11);*/

var allstr = new Array();
allstr[0] = Animals[(yyyy-4)%12];
allstr[1] = a1.indexOf(allstr[0].substr(0,1));
allstr[2] = getAstrov(mmmm,dddd);
allstr[3]= getAstroi(mmmm,dddd);
allstr[4]=moonxzget(cld[d].lDay,tttt,min,allstr[2]);
allstr[5]=moonxzgeti(cld[d].lDay,tttt,min,allstr[2]);
allstr[6] = cld[d].sYear;
allstr[7] = cld[d].sMonth;
allstr[8] = cld[d].sDay;
allstr[9] = cld[d].lYear;
allstr[10] = cld[d].lMonth;
allstr[11] = cld[d].lDay
allstr[12] = cld[d].cYear;
allstr[13]=g1.indexOf(allstr[12].substr(0,1));
allstr[14]=z1.indexOf(allstr[12].substr(1,1));
allstr[15] = cld[d].cMonth;
allstr[16]=g1.indexOf(allstr[15].substr(0,1));
allstr[17]=z1.indexOf(allstr[15].substr(1,1));
allstr[18] = cld[d].cDay;
allstr[19]=g1.indexOf(allstr[18].substr(0,1));
allstr[20]=z1.indexOf(allstr[18].substr(1,1));
allstr[21] =rtgan1+z11;
allstr[22]=g1.indexOf(allstr[21].substr(0,1));
allstr[23]=z1.indexOf(allstr[21].substr(1,1));
allstr[24] = cld[d].solarTerms;//节气str
allstr[25] = cld[d].solarFestival;//新历节日str
allstr[26] = cld[d].lunarFestival;//农历节日str
return allstr;
}

function getoutwex(str1)
{
var alls1;
if(str1.length>15)
{
var yyyy11=str1.substr(0,4);
var mmmm11=str1.substr(5,2);
var dddd11=str1.substr(8,2);
var tttt11=str1.substr(11,2);
var min11=str1.substr(14,2);
alls1=getoutw(yyyy11,mmmm11,dddd11,tttt11,min11);
}
return alls1;
}



function mOvr(v) {

	var festival = document.getElementById("festival");
	var datedetail = document.getElementById("datedetail");

	var sObj = document.getElementById("sd"+ v);
	//alert(v);
	var d = sObj.innerHTML - 1;
     //alert(d);
	if( sObj.innerHTML != "" ) {
		sObj.style.cursor = "move";
		if(cld[d].solarTerms == "" 
				&& cld[d].solarFestival == "" 
				&& cld[d].lunarFestival == "")
		{
			festival.innerHTML = "";
			festival.style.display = "none";
		}
		else
		{
			
			festival.innerHTML = cld[d].solarTerms + " " + cld[d].solarFestival + " " + cld[d].lunarFestival;
			festival.style.display = "block";
		}
			datedetail.innerHTML = cld[d].sYear +" 年 "+ cld[d].sMonth
			+ " 月 "+cld[d].sDay +" 日<br />星期" + cld[d].week + "<br />"
			+ "<span>农历" + (cld[d].isLeap?"闰 ":" ")
			+ cld[d].lMonth + " 月 " + cld[d].lDay + " 日<br />"
			+ cld[d].cYear + "年 " + cld[d].cMonth
			+ "月 " + cld[d].cDay + "日</span>";

		if (show == 0) {
			dStyle.left = (x + offsetx - (width/2)) + "px";
			dStyle.top = (y + offsety) + "px";
   			dStyle.visibility = "visible";
   			show = 1;
		}
	}
}

function mOut() {
	if ( cnt >= 1 ) { sw = 0 }
	if ( sw == 0 ) { show = 0; dStyle.visibility = "hidden";}
	else cnt++;
}

//获取鼠标坐标
function mEvn(e) {
	if (!show) return;
	if(window.event){
		x = event.x ;
		y = event.y ;
		if (document.body.scrollLeft){
			x += document.body.scrollLeft; 
			y += document.body.scrollTop;
		} 
		// changed by hmisty 2005/07/23
      		dStyle.left = (x + offsetx-(width/2)) + "px";
      		dStyle.top = (y + offsety) + "px";
	}
	else {
     		dStyle.left = (e.pageX + offsetx-(width/2)) + "px";
      		dStyle.top = (e.pageY + offsety) + "px";
	 }
}

function changeTZ() {
   document.getElementById("city").innerHTML = document.getElementById("tz").value.substr(6);
   setCookie("TZ",document.getElementById("tz").selectedIndex);
}

function tick() {
	var today;
	today = new Date();
	document.getElementById("clock").innerHTML = today.getFullYear() + "年"
		+ today.getMonth() + "月" + today.getDay() + "日" + today.getTime();
     	window.setTimeout("tick()", 1000);
}

function setCookie(name, value) {
	var today = new Date()
	var expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365)
	document.cookie = name + "=" + escape(value)	+ "; expires=" + expires.toGMTString()
}

function getCookie(Name) {
   var search = Name + "=";
   if(document.cookie.length > 0) {
      offset = document.cookie.indexOf(search);
      if(offset != -1) {
         offset += search.length;
         end = document.cookie.indexOf(";", offset);
         if(end == -1) end = document.cookie.length;
         return unescape(document.cookie.substring(offset, end));
      }
      else return "";
   }
}

function fillSelect() {
	syd = document.getElementById("sy");
	syd.innerHTML = "";
	for(i=1900;i<2050;i++)
	{
		ins = document.createElement("OPTION");
		ins.innerHTML = i;
		syd.appendChild(ins);
	}
	smd = document.getElementById("sm");
	smd.innerHTML = "";
	for(i=1;i<13;i++)
	{
		ins = document.createElement("OPTION");
		ins.innerHTML = i;
		smd.appendChild(ins);
	}
}

function fillCalendar() {
	var gNum;
	var tablex = document.createElement("table");
	tablex.setAttribute("id","week");
	for(i=0;i<6;i++) {
		var trx1 = document.createElement("tr");
		var trx2 = document.createElement("tr");
		trx1.setAttribute("class","tr1");
		trx2.setAttribute("class","tr2");
		for(j=0;j<7;j++) {
			gNum = i*7+j;
			var tdx = document.createElement("td");
			tdx.setAttribute("id","sd"+gNum);
			tdx.setAttribute("onMouseOver","mOvr("+gNum+")");
			tdx.setAttribute("onMouseOut","mOut()");
			if(j == 0){
				tdx.setAttribute("class","aorange");
			}
			else if(j == 6){
				if(i%2==1) tdx.setAttribute("class","aorange");
				else tdx.setAttribute("class","agreen");
			}
			else{
				tdx.setAttribute("class","one");
			}
			trx1.appendChild(tdx);
		
			tdx = document.createElement("td");
			tdx.setAttribute("id","ld"+gNum);
			tdx.setAttribute("onMouseOver","mOvr("+gNum+")");
			tdx.setAttribute("onMouseOut","mOut()");
			trx2.appendChild(tdx);
		}
		tablex.appendChild(trx1);
		tablex.appendChild(trx2);
	}
	document.getElementById("calendar").appendChild(tablex);
}
//界面初始化
function initial() {
	//select
	
	dStyle = document.getElementById("detail").style;
	//fillSelect();
	//fillCalendar();

	document.getElementById("sy").selectedIndex=tY-1900;
	document.getElementById("sm").selectedIndex=tM;
	log(1,  "initial call drawCld() now");
	drawCld(tY,tM);
     
	//document.getElementById("tz").selectedIndex=getCookie("TZ");
	//if(document.getElementById("tz").selectedIndex<1)
	//	document.getElementById("tz").selectedIndex=39;
	//changeTZ();
	//tick();


}

function TimeAdd(UTC,T)
{
	var PlusMinus, DST, y;
	//alert(T);
	alert(UTC);
	if (T.substr(0,1) == "-"){
		PlusMinus = -1;
	}
	else{
		PlusMinus = 1;
	}
	//UTC = UTC.substr(1
}  
