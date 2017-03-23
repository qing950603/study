动画
====
1.css3 动画*(ie兼容问题)
	*transition 过度动画
	*animation  帧动画
	*js 可以控制css3动画
		1.obj.style. 和css3 的transition 配合使用
		2.className 添加类和删除类  和css3
		  的transition 配合

2.js 动画
	*offset 系列
		1.offsetLeft  得到距离左侧的位置
			*如果父类元素中有定位的元素，那么就返回距离
			 当前元素最近的定位元素边缘的距离
			*如果父辈元素中没有定位元素，那么就返回相对于body左边缘的距离
		2.offsetTop  
		3.offsetWidth
		4.offsetHeight
	*offsetLeft 和 style.left 的区别
		1.style.left 定位元素才能取值 若没有取值则为空
		2.style.left 可以赋值 得到的值为  XXpx 而offset 得到的是数字
		*3.style.left他只能得到行内样式
			例如:<div style = "margin-left:200px;"></div>
		4.offsetLeft 只读， style.left可以读写
		5.重点：取值用offsetLeft ,设置值用style.left
	* 匀速运动
		1.获取元素当前的  offsetLeft
		2.设置元素的style.left = offsetLeft + 某个值
		3.设置定时器，不断执行1.2.
		4.到一定位置清除定时器
	* 匀速运动 move函数
	 	1.move(obj,nNum);
	* move 函数应用
		1.动画导航
			*onmouseover 鼠标悬停
			*onmouseout  鼠标移开
			*offsetLeft
	*透明度 fade 函数
	*无缝滚动

		1.复制一份相同的内容放到滚动元素中
		2.当滚动到一半的是，立即设置滚动元素left为0
	*获取元素的当前样式

		1.getComputedStyle(obj, false)[attr] //ie8及以下ie不支持
		2.obj.currentStyle[attr] // ie8及以下使用
		3.自己封装的getStyle函数
		4.function getStyle(obj, attr){ if(obj.currentStyle){ //ie8 return obj.currentStyle[attr]; }else{ //chrome等标准 return getComputedStyle(obj, false)[attr] } }
	*属性检测

		判断某个属性，在某个浏览器环境中是否支持
		if(obj.currentStyl)
	*透明度fade函数

		需要使用getStyle函数
DOM 
====
1.DOM
	*D-----document  文档
	*O-----object    对象
	*M-----model     模型
2.节点
	*层级划分
		1.父节点
		2.子节点
		3.兄弟节点
	*类型划分
		1.元素节点  element  node(节点)  <p></p>
		2.文本节点 text node  ‘哈哈哈哈哈哈哈哈’

3. innerHTML  属于DOM操作
	*会覆盖原来节点中的内容.
4. DOM 常用操作
	* 获取节点
	* 创建节点
	* 插入节点
	* 删除节点
5. 获取节点'.box'
 //获取	* document.getElementById
	* document.getElementsByTagName
	* document.getElementsByClassName
	* document.querySelectorAll('.box')	新增
	    //通过css选择器  有兼容问题  	获取全部有.box的元素
	* document.querySelector('.box') 新增
	   //通过css选择器  有兼容问题  获取第一个有.box的元素
6.创建节点
	*createElement('li');//创建元素节点
	*createTextNode('三生石');// 创建文本节点
	var liEl = document.createElement('li'); //创建li节点·
7.插入节点：把js生成的节点，插入到页面中显示出来
	*父节点.appendChild(节点) //插入节点   append 追加
	例如：list.appendChild(liEl);  向ul中插入li

		1.1.创建li 节点 <li></li>
		2.创建文本节点  李白
		3.将文本插入到Li中<li>李白</li>
		4.向ul 中插入li
	*父节点.insertBefore(在哪个节点之前插入，要插入节点)  //有两个参数
	*insertBefore  兼容问题
		1.insertBefore 的第二个参数，如果初始为空，ie会报错，chrome等浏览器没有问题


8.属性操作
	*setAttribute 设置节点属性
		1.setAttribute('src','images/xx.png');
			*可以设置自定义属性
		2.getAttribute(属性名)
		3.removeAttribute(属性名)
9.删除节点
	1.父节点.removeChild(要删除的节点);
10.父节点
	*子节点.parentNode
	*父节点的父节点      子节点.parentNode.parentNode
11.节点信息
	* nodeType
		1.文本节点 为3
		2.元素节点为1
	*nodeName
		1.元素节点为 大写的标签，例如:ul
		2.文本节点为 #text
12.子节点
	*firstChild  第一个子节点  ie下获取的是元素，chrome下会把第一个空节点获取，例如回车
	*lastChild   最后一个子节点  也有兼容问题   同上
	*firstElementChild 第一个元素子节点  
	*lastElementChild	最后一个元素子节点
	*childNodes 所有的节点，包括回车等
	*children 空节点不会计算在内
14. 克隆节点
	*var node1 = 要克隆的节点.cloneNode(true)
	*true 会把该节点的子节点一起克隆
13.兄弟节点
	*nextSibling 下一个节点
	*previousSibling 上一个节点
	*nextElementSibling 下一个元素节点
	*previousElementSibling 上一个元素节点
	*案例：排序
		1.insertBefore(要插入的节点，在哪个节点之前插入);
		2.nextElementSibling
		3.previousElementSibling
		4.向上 ：把当前的li 插入到他的上一个兄弟节点前面
		5.向下：把当前的li 插入到他的下一个兄弟节点前面

		<ul>
			<li data-staus = 'finish'>
				<span class="complted">游戏</span>
				<button>删除</button>

			</li>

		</ul>