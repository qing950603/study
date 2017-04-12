1.变量和数组类型
2.定时器
	setInterval
	setTimeout
	timeId
	动画
3.DOM 操作html
	document
	操作html
	创建 删除  修改 节点
4.BOM 操作浏览器
	alert
	prompt
	滚动条滚动高度
	window.location
5.事件
	onclick onfocus onkeydown
	IE下有兼容问题
	事件冒泡
	事件委托
	event
6.日期函数
7.效果
	返回顶部
	下拉菜单
	遮罩弹层
	简单轮播图
数组
====
#### 数组
1.声明数组
	*var arr = ['a','b'];
	*var arr = [];//空数组
	*var arr = new Array('a','b');
2.其他类型
	*function	
		1.var test = function(){}
		2.var test = new Function(){}
	*string
		1.new
3.for循环遍历
4.length 长度
####  数组基本操作
5.数组push  尾部添加
	*var arr = ['a','b','c',]
	*插入d元素
	*arr.push('d');
6.数组的pop	 尾部删除
	1.arr.pop();
7.shift  头部删除
	1.arr.shift();
8.unshift 头部添加
	1.arr.unshift(元素);
9.split(',')字符串转数组
	*var str = arr.split(',');
10.join('/')数组转字符串，按某个字符串链接
		*var str = arr.join('-');
11.splice(开始位置,长度,元素)
	*从开始位置删除几个元素
		例子：var arr = ['h','e','l','l','o']
				arr.splice(1,2); 输出：h,l,o
		索引1开始，包括自身的两个元素
	*插入	eg:arr.splice(2,0,'x');
		长度为0的时候，可以插入元素
	*替换  arr.splice(2,2,'x')
12.slice(起始位置，结束位置)
		var arr = ['h','e','l','l','0']
	*var arr2 = arr.slice(1,2)结果是：e
	*取数组的一片，不包括结束位置
####  
	1.排序
		*sort()
			var arr = [12,23,3,1]
		*arr.sort(function(num1,num2){
			if(num1<num2){
				return 1;//靠右
			}else if (num1>num2){
				return -1;//靠左
			}else{
				return 0;
			}
			});
		*使用自定义函数，函数返回值
			1.-1第一个数比第二个数靠右
			2.1 第一个数比第二个数靠左
			3.0 第一个数和第二个数相等
		*localeCompare //但当地的习惯来排
	2.reverse() 反转数组
		*1 2 3 4 5 翻转 5 4 3 2 1 
		eg:arr.reverse();
####
数组链接 concat();
		var arr = ['导演','演员']；
		var arr2 = ['胡歌','杨幂'];
	1.var arr3.arr.concat(arr2)


数学对象
====
####常用
	1.Math.abs(num);绝对值
	2.Math.floor(x);向下取整
	3.Math.ceil(x);向上取整
	4.Math.round(x);四舍五入到最接近的整数
	5.Math.max(x,y);取最大值
	6.Math.min(x,y);取最小值
	7.Math.sqrt(x);平方根
	8.Math.sin(角度); tan acos asin 
	9.Math.pow(x,y);x的y次幂
	10.Math.random();0到1之间随机小数

#### 数学常量
	1.Math.E 对数的底数
	2.Math.PI 圆周率

####获取一定范围的随机整数
	1.3-7之间的随机整数
		3 4 5 6 7
	2.(n,m)
		例如：n= 3 , m= 7

	公式：Math.floor(Math.random()*(m-n+1)+n)
	函数：getRandom(3,7)
	3.应用随机颜色
		1.getRandom 函数
		2，颜色存在数组中
		3.获取随机正整数在 0 到数组长度-1 之间
		4.取值 arr[随机正整数]
	4.应用随机取位置
		1.横向随机范围（0到可视区宽度-元素自身宽度）
		2.纵向随机范围（0到可视区高度-元素自身高度）
#### 中午吃什么
	1.事件	onclick
	2.setInterval定时器
	3.随机数
	4.DOM 操作
####消除小游戏
*需求分析
	1.事件 onclick 
	2.js动画 move函数(从上到下)
	3.点击小方块 ，分数加1，消除小方块，重新随机创建一个小方块
	4.不点击 触底以后 ，分数减1，消除小方块，重新随机创建一个小方块
		*分数减1以后，不为0
		*分数减1以后，为0,提示game over;
*代码结构
	1.动态创建游戏元素div
		*大小 class 定义大小
		*背景颜色 随机
		*left 随机
	2.回调函数
		*某个函数执行完成以后，函数里调用另一个函数
		*改造move 函数，加入回调函数,可以在动画执行完成以后，在回调函数callback
		执行某些逻辑操作
			1.move(obj,nNum,callback)
		*匿名函数自执行 （function(){var a = 1}）()
####数组链接
	1.concat
#### 数组去重
	1.[1,2,3,2,3,4,5,4] 去重得到
		[1,2,3,4,5]
			1.新建数组[]，遍历旧数组，取元素
			判断新数组是否有某个数据，没有push，有跳过
			2.判断某个数据 是否在数组中存在
			[1,2,3,4] 3 true  0 false
			//判断某个值是否在数组中
			function arrHasEl(arr,el){
				for(var i=0;i<arr.length;i++){
					if(arr[i]==el){
						return true;
					}
				}
				return false;

			}

javascript
浏览器  微软  google  firefox apple  safari
HTML HTML5
w3c  制定标准  什么样的形式  播放音乐
audio p
ECMAScript
ES6  es2015版本
json = {
	name : '李白'，
	title:'诗人'

} 
{name,title}=>json
字符串
====
#### 基本应用
	1.var str = '';
		*连接字符串 +
		* var name = '李白';
		<p class="title">xxx</p>
		var str2 = '<p class = "title">' + name +'</p>';
		*new String('abc');//包装类/实例化的方式

#### 常用的方法
	2.*split 分割成数组
	  *indexOf 字符或者字符串第一次出现的位置,没找到返回 -1
	  *lastIndexOf() 字符最后出现的位置
	  *search于indexOf相似，配合正则表达式使用
	  *match 与正则表达式配合使用
	  *replace('a','b');查找并替换，b 替换a
	  	1.可以和正则表达式一起使用
	3.截取方法
		* splice(开始位置，结束位置)
			抽取一个子串
			str = 'xxxxxhellokittyIamJerry'
			var index = str.indexOf('I')
			var str1 = slice(index)
			1.没有指定结束位置，截取到最后
		*substring(开始位置，结束位置)
面试题		*slice 和 substring 的区别
			1.slice(-1)负数，变成倒数第几个
			2.substring(-1) 负数，相当于substring(0);
		*substr
		*toLowerCase()转小写
		*toUpperCase()转大写
####json 对象 和json 字符串   重点
豆瓣接口
	1.json对象：{}
		*js可以之间操作，使用.和[]
		*for in 
	2.json字符串
		*json格式的字符串
	3.json字符串和json对象的互转
			格式：var foo = '{"name":"李白","title":"诗人"}';
		*json字符串转json对象，方便之间使用js调用
		*json字符串转json对象，
			1.JSON.parse(str);
			2.eval(str);//执行某个操作
		*json对象转json字符串
			1.JSON.stringify(obj);
			2.obj.toJSONString();


正则表达式
====
####正则表达式图形
	*https://regexper.com
#### 正则表达式
	*Regular Expression
	使用字符串描述或者匹配一系列某写规则的字符串
	*字符串
	*去匹配另一个字符串
	*例如：能够精准的表达（字符串表达式）\bis\b  匹配单词is
#### 语法
	*\b 词边界  单词的开始和结束
	*\d 表示数字
	*{num} 表示量词  \d{4}四个数字
		例如：查找日期  ^\d{4}/\d{2}/\d{2}$
	*   ^表示开头
	*   $表示结尾
	*   [] 表示或  
	*  	.  表示任意字符
	*   \ 代表转义
	*   + 代表至少有一个   ^http:\/\/.+\.jpg$
	*   \s 表示空白符
	*   g  global 全局搜索	
	*   ()表示分组
	*   |  或
	*  5-10数字  \d{5,10}
	*   * 出现0次或者多次（任意次）；
	*	去除空格：var reg = /(^\s*)|(\s*$)/g;
			//分成两组1.空格开头任意次2.空格结尾任意次

	*   日期：2017/03/31 2017-03-31 例如时间：^\d{4}[/-]\d{2}[/-]\d{2}$
	*单词
		1.\b单词\b
	*http://开头  .jpg 结尾的url
		1.^http:\/\/.+\.jpg$


	*去除空格函数
			function  trim(str){
				var reg = /(^\s*)(\s*$)/g
				return str.replace(reg,'');
			}
#### js 中使用正则表达式
	1.创建方式
		Reg对象
		*var reg = /正则表达式/;
		*var reg = new RegExp('正则表达式');
	2.使用方式
		*配合字符串相关方法
		*str.replace(reg,'最终字符串');
			function  trim(str){
				var reg = /(^\s*)(\s*$)/g;
				return str.replace(reg,'');
			}
		*str.search()忽略全局
		*str.match()
		*Reg对象上的方法
			1.Reg.exec()
				*没有匹配，返回null
				*匹配成功，返回数组
			2.Reg.test()  避免使用全局g  表示
				*返回true 和 false 

				var reg = /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
				reg.test(str);

cookie
====
####  cookie
	1.用途
		*信息存在客户端电脑上，用于客户端和服务器进行数据交互
		*比如：自动登录，记住用户名
		*除了js，其他语言也有cookie
	2.特性
		*同一个网站中所有的页面共享一套cookie
		*数量和大小有限制
			1.Firefox大概50个左右
				chrome没什么限制
			2.每个cookie所存放的数据不能超过4k,超过4K的话，返回空字符串
		*过期时间
			1.如果不设置，关闭浏览器自动清除
			2.设置以后，超过时长自动清除
		*清除cookie
			1.浏览器工具
			2.代码设置，设置过期时间
	3.cookie一般只有火狐可以直接打开页面进行访问，其他浏览器需要在服务器环境使用

#### js中如何使用cookie
	1.设置cookie
		*document.cookie = 'key=value';
		例如：document.cookie = 'user=kitty';
			  document.cookie = 'age=18';
	  function setCookie(name,value,time){
		//设置cookie
		var date = new Date();
		//设置到某一天
		date.setDate(date.getDate()+time);
		date.toGMTString();//转成标准的时间字符串
		console.log(date);
		document.cookie=name+'='+value+';expires='+date;
	}
	2.设置过期时间
		*document.cookie ='user=kitty;expires=data';
		*var date = new Date();//等到当前时间
			date.setDate(date.getDate()+10);
			date.toGMTString();//转成标准的时间字符串
			console.log(date);
			document.cookie='user=tom;expires='+date;
	3.获取cookie
		user=tom; age=18; userid=001
		如何取出user的值，age的值，userid的值
		['user=tom']
		//取cookie
			
	4.封装setCookie函数
		function setCookie(name,value,time){
				//设置cookie
				var date = new Date();
				//设置到某一天
				date.setDate(date.getDate()+time);
				date.toGMTString();//转成标准的时间字符串
				console.log(date);
				document.cookie=name+'='+value+';expires='+date;
			}
	5.封装getCookie函数	
		function  getCookie(key){
				var arr  = document.cookie.split('; ');
				for(var i=0;i<arr.length;i++){
					var arr1 = arr[i].split('=');
					if(arr1[0] == key){
						return arr1[1];
					}
				}
				return '';
			}
	6.封装removeCookie函数
		function removeCookie(name){
				//设置过期时间为-1
				//设置某条cookie过期时间为昨天
				setCookie(name,'1',-1);

		}



	

