jQuery
====
#### jQuery(jQuery.com)主要操作DOM
	1.javascript库  ----John
	Resig创建于2006年开源项目
	2.理念：write less,do more
	3.非常优雅的api和代码风格

#### 文件
	1.jQuery-1.8.3.js 开发版
	2.jQuery-1.8.3.min.js  压缩版

#### 功能
	1.选择器机制，可以使用css选择器
	2.封装了DOM操作，简化了节点等操作
	3.封装了常用事件
	*4.浏览器兼容，设置是ie6
	5.完善的ajax
	6.链式操作
	7.隐式迭代，比如使用jQuery获取所有元素，设置方法，不用遍历
	8.插件机制
	9.丰富的文档

####基本使用
	1.先引用 jQuery 的js 文件
	2.然后在script 中写逻辑代码
	3.核心函数是jQuery(),$是jQuery的缩写模式
####选择器
	1.$(#id)  通过id的方式
	2.$('.test')通过class的方式
	3.$('p') 通过html标签
	4.$('.list li') 层次选择器
	5.$('.list li,.list2 li')  分组选择器
	6.:first :odd :even :last
	7.:eq(num)特定索引的元素
	8.$()获取的元素无法使用原生js方法	
#### window.onload 和 $(document).ready()有什么区别
	1.window.onload 只有一个起作用，写多个后面会覆盖前面的。
		$(document).ready()可以写多个，按顺序执行
	2.window.onload 必须等待页面中所有元素（所有图片）加载完成，才能执行
		$(document).ready()网页中所有DOM结构加载完成即可执行
	3.$(document).ready()缩写为$(function(){})
####jQuery 对象
	1.通过核心方法$()得到的返回值
	2.不能直接使用原生js的方法
	3.访问jQuery对象的一些方法
		*length
		*each(callback) 遍历jQuery对象
#### DOM对象
	1.可以之间使用js原生方法
		例如：document.getElementById('id');
####jQuery 对象转化成DOM对象
	1.用jQuery开发的时候，有时候需要使用原生jsDOM对象的方法，所以需要转化
	2.*jQuery 对象类似于数组的对象可以使用索引获取DOM对象。例如：
		var foo = $('#list li');foo[0].style.backgroundColor;
	3.get(index);例如：$('#list li').get(2).style.
#### jQuery 里绑定事件
	1.$(el).click(callback)等

#### jQuery 中的效果方法
	1.show(speed)  显示
	2.hide(speed)  隐藏
	3.slideUp(speed)  收起
	4.slideDown(speed)  展开
	5.fadeIn(speed) 淡入
	6.fadeOut(speed)淡出
	7.toggle  显示变为隐藏  隐藏变为显示
	8.slideToggle   $('#nav').slideToggle('slow');
#### jQuery 的this
	1.$(this).fadeIn();

#### DOM 操作
	1.$(a).next() 获取a后面的兄弟节点
	2.$(a).parent()获取a的父元素
	3.$(a).siblings()获取a的兄弟元素
	4.$(a).find(b) 找到a元素中的b元素
	
#### 索引相关
	1.var i $('.list li').index($(this))  //li为.test的元素，在所有li中索引
	2.$('li').eq(1)//获取第二个元素
#### 样式相关
	1.$(a).css(name,value)设置值
	2.$(a).css(name)取值
	3.$(a).addClass(name) 添加class
	4.$(a).removeClass(name)删除class