BOM

====
	1. BOM浏览器对象模型
		*B browser  浏览器
	 	*O object   对象
	 	*M model    模型
	 	*简明理解：浏览器提供给开发者的js借口
	2. 核心对象是window，双重身份
		*所有的全局变量和全局函数都在window上，window对象相当于js的全局变量
		*通过js访问浏览器的一个接口

####  window对象
	1.window.alert('提示的内容')  警告框
	2.window.cofirm('提示内容') //对话框
		*用户点击确认，返回true
		*用户点击取消，返回false
			例如：var foo = window.conform('是否确定');
				  if(foo){
				  	document.body.removeChild('boxEl');
				  }
	3.window.prompt('默认提示语');输入框
		*用户点击确定,返回输入的文本
		*用户点击取消，返回null
	4.window.open(pageurl,name,param)
		*pageurl  要打开的网页地址
		* name    窗口的名字
		*param    窗口的参数  逗号隔开
			1.width
			2.height
			3.left
			4.top
	5.常用方法
		*window.onload 页面加载
		*window.unload  页面卸载
		*window.onscroll 滚动条滚动的时候
		*window.onresize 浏览器窗口缩放
#### 滚动的距离
	1.document.body.scrollTop  //chrome等标准浏览器
	2.document.documentElement.scrollTop  //ie
	3.兼容
		* || 
		*或前面如果是false执行或后面的语句否则执行前面的语句
	4.var top = document.body.scrollTop || document.documentElement.scrollTop;
	5.scrollLeft 横向滚动距离
	6.返回顶部
		*锚点
			1.  <div id="top"></div>
				按钮:<a href= "#top"></a>
		*动画方式
			1.setInterval
			2.不断改变scrollTop 到 0
	7.运动的原理
		*匀速运动：当前的值 -  固定的值（speed）
		*缓冲运动：当前的值 - 不断变化的值(speed)
		status = true;
		1.点击返回顶部按钮
		  执行  setInterval  ------onscroll

		  滚动条开始向上滚动

		2.用户向下拉动了滚动条
		  应该关闭定时器    ------onscroll
		  if(status == false){
		  	clearInterval(timeId);
		  }
		  status = false
####  定时器
	*setInterval
	*setTimeout
####  location对象
	*获取网页当前访问网页的信息
	*location.href 当前页面的完整地址
	*location.hash 用于页面内跳转，获取的是字符串，为‘#xxxx’

	for(var i = 0;i<btns.length;i++){
			btns[i].index = i;
			btns[i].onclick = function(){
				location.hash = arr[this.index];
			}
		}

	1.页面导航
	有以下代码
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		要求点击每个li 弹出他自身的索引
		atns[i].index = i
		arr[this.index]
	*location.host 服务器名称和端口号
	*location.hostname 不带端口号的服务器名称
	*location.search 返回查询字符串,包括问号
	*location.port 端口号
	*location.reload() 当前页面重新加载
#### history 对象
		1.历史记录对象，js操作浏览器历史记录的接口
		2.history.back() 回到历史记录的上一步
		3.history.forward() 前进
		4.history.go(n)回到第n步
			history.go(-1) 等同于history.back()
			history.go(1)等同于history.forward()
#### navigator  对象
	1.userAgent 获取一些客户端浏览器信息  名称  引擎 操作系统
		例如:navigator.userAgent
	2.appCodeName 浏览器的字符串表示
	3.appName 浏览器的名称
	4.appVerion  内核和浏览器的版本
	5.platform 操作系统
	6.应用：返回用户浏览器等信息
		*indexOf(‘str');字符串方法,返回 str 首次出现的索引  
		//得到浏览器
		function getBrowser(){
			var str = navigator.userAgent;
			var browser = '';
			if(str.indexOf('MSIE') > -1){
				browser = 'IE';
			}else if(str.indexOf('Chrome') > -1){
				browser = 'Chrome';
			}else if(str.indexOf('Firefox'>-1){
				browser = 'Firefox';
			}
			return browser;
		}
#### 遮罩弹层
	1.定位
		*fixed
	2.opacity
	3.相对于可视区水平垂直居中
		*弹层打开的时候，水平垂直居中
		*浏览器窗口缩放的时候，水平垂直居中onresize
	4.遮罩层 覆盖整个页面高度
		1.可视区尺寸
			*document.documentElement.clientWidth
			*document.documentElement.clientHeight
		2.文档尺寸
			*document.documentElement.scrollWidth;
			*document.documentElement.scrollHeight;
	5.点击按钮打开和关闭
	6.div 相对于可视区 水平垂直居中
		1.js做法
			*距离左侧Left=（可视区宽度-元素宽度）/2
			*距离顶部top =（可视区宽度-元素高度）/2