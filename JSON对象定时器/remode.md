1.string  '我是歌手' "我是歌手"
  length  
  1.声明一个空字符串
    var name='';
2.number 0 1 1.5
  1.var num = 0

3.+在 字符串 和 数字之间应用
   1.两个字符串+是链接两个字符串
   	 ‘我是歌手’+‘薛之谦’
   2.两个数字
   		10+ 12
   		22
   3.一个字符串和一个数字
      '0'+1
      字符串 “01”
      应用：var num = 110;
      		num = num + '';
      110 --> "110"
4.boolean 布尔 true false 
5.function 函数
6.array  数组
	var  arr = [];//声明空数组
	arr[0] = '杨幂'
	arr[1] = '三生三世'
7.object  对象  ，复杂数据类型
	typeof(document);  ----object
	有属性和方法
	用 .  来调用 属性和方法
	1.JSON对象
		1.var data = {}  //声明空的JSON对象
		2.声明有初始数据的JSON对象
			*key : value
			电视剧Json对象
			*var movie = {
				name:"三生三世"，
				actor:["杨幂","赵又廷","迪丽热巴","张彬彬"]，
				imgUrl : "images/ssss.jpg",
				score:9,
				year:"2017年"，
				country:"中国大陆"，
				type:"剧情/爱情",


				}
				
		3.取属性值 
			*使用 . + 属性名字：console.log(movie.name);
			*使用[属性名] : movie['name'];  // console.log(movie['country']);
		4.添加属性值
			*使用 . 添加属性值
				//给JSON对象添加属性director
				  movie.director = '林玉芬';
				  console.log(movie.director);
		5.数组生成字符串
			
			*for 循环
				var actorArr = movie.actor
				var actorStr = '';
				for(var i = 0;i< actorArr.length;i++){
				actorStr = actorStr + actorArr[i] + ' ';
				}
比较常用		*Array.join('/');数组元素使用某个 字符串拼接返回一个字符串
				var actorEl = document.getElementById('actor');
			    actorEl.innerHTML = actorStr
			    var actorArr = movie.actor
				var actorStr = actorArr.join(',');
			    var actorEl = document.getElementById('actor');
			    actorEl.innerHTML = actorStr;


			6.遍历JSON对象
				* for in 遍历JSON对象
					例如：  for(attr in movie){  //attr为局部变量
			 				console.log("属性名" + attr)
			 				console.log("属性" + movie[attr]);
			 				}
			7.添加方法
				*方法名：function(){

				}

定时器
====
1.延时型定时器
	*setTimeout 
	*执行一次就结束了
	*  语法：setTimeout(Fn,ms);
			例子：window.onload = function(){
			setTimeout(function(){
			alert('天气不错');

		},3000);
	}
	*关闭定时器，clearTimeout(timeid)
		例如：window.onload = function(){
		var timeId = setTimeout(function(){
			alert('天气不错');

		},3000);
		clearTimeout(timeId);
	}
2.间隔型定时器
	*setInterval
	*无限执行，直到被清除
	*关闭定时器,clearInterval(timeId)


Date 日期
====
1.new Date()
	*当前时间
2.转换格式
	*2017年3月12日 星期日 13:45
3.时间戳
	*当前时间距离1970年1月1日0时0分0秒到现在的毫秒数
	*getTime();
	例如：var now = new Date();
		anow.innerHTML = now.getTime();//1489298168642
4.常用方法
	*.getFullYear()获取年 例如2017
	*.getMonth()  获取月份   3月份  从0开始   0 是1月
	*.getDate()  日  12
	*.getDay（）     星期  周日是0
	*getHours()   小时
	*getMinutes()  分钟
	*getSeconds()  秒
	*getMilliSeconds()  毫秒
5.switch case 
	例如：	getStrDay(day);
		function getStrDay(nDay){
			var str='';
			switch(nDay){
				case 0:
					str = '星期日';
				break;
				case 1:
					str = '星期一';
				break;
				case 2:
					str = '星期二';
				break;
				case 3:
					str = '星期三';
				break;
				case 4:
					str = '星期四';
				break;
				case 5:
					str = '星期五';
				break;
				case 6:
					str = '星期六';
				break;

			}

		}
		
	}
    *函数：getStrDay() 实现0-6 转换成星期几  形式
    *if　else 
    * switch case
7.innerHTML
	*取值
	*赋值
		1.obj.innerHTML =  '<h1>标题</h1>'
8.String.split()
	*split(','); 把字符串按规定  分割成数组
	例如 : var str = '杨幂，赵又廷，高光';
			console.log(str.split(','));
9.数字转字符串
	*num + ''
	*num.toString();
	例如：var arr = num.toString().split('');//将数字转换成字符在分割成数组
10.
	Math.ceil()  向上取整
	Math.floor() 向下取整
	Math.abs() 绝对值