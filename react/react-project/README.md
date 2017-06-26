####前端技术流

	1.前后端分离
		*前端负责  展现和交互逻辑
			1.页面UI和页面的交互，渲染，用户体验
		*后端负责  业务和数据接口
			1.数据存储和业务逻辑，接口，安全
		*优点：灵活，各端更专注，分工明确，职责分明

####单页面应用  single page application

	1.常用框架
		*reactJS ---facebook开发，UI层
		*VueJS   ---华人开发-尤雨溪，UI层
		*angular --- Google
	2.常用框架app端
		*react-navtive
		*阿里的weex
	3.把整个应用拆分成多个组件，方便复用
#### React 技术栈

	1.webpack
	2.babel
	3.ES6
	4.Node
	5.常用Node包
		* axios  ajax库
		*whatwg-fetch  ajax库
		*mockjs  模拟假数据
	6.react 核心库
	7.react-dom 操作dom的react库
	8.react-router  路由库
####reactjs  web
	react natvie  开发app  Facebook开发
	阿里  weex   使用vue开发app
	微信小程序

#### React 
	*react是一个UI库
	*React将界面分成很多组件，react中一切都是组件
	*组件之间可以组合，嵌套，构成页面
	*使用了虚拟DOM，优化性能
	*一个组件的显示状态和行为，有数据决定
	*数据变化会引起组件变化

####  >>src源文件
	  >>>components  所有组件
	  >>>>Button   按钮组件
	  >>>>>index.css  按钮组件样式
	  >>>>>index.js   按钮组件逻辑

####React 组件语法
	1.ES5方式
	2.ES6 class方式

####React中使用样式
	1.导入样式文件
		```JavaScript
			import './index.css'
		``` 
####React 语法
	1.不能使用class，因为class是保留字
		使用className加入类
			```HTML
				<div className="box"></div>
				<button className="btn">确认</button>
			```
	2.style属性方式
		*需要传一个json对象
			```JavaScript
				let styleData = {
					borderRadius : '4px',
					width:'200px'
				};
				 <button style={styleData}>确认</button>
			```

#### React组件的属性 props

	*props （属性）：可以外部传入参数给组件来配置组件的形态
	*在组件上 设置属性，
	*组件内部 通过 this.props.属性名  拿到属性，做相应的逻辑操作，可以改变组件的形态
	*默认属性 
		1.当使用者在组件调用时，没有传相应的属性时，使用组件 内部定义
			
	*属性类型检测
	
#### JSX
	*基本概念
		1.JSX是JS语言的一种扩展，长得像HTML，但不是HTML
		2.React 组件 可以用JSX描述 长什么样 样式+逻辑+JSX
		3.JSX 在编译时候，会变成相应的JS对象描述
		4.react-dom负责把编译的js对象编程DOM元素，并渲染到页面中
	*JSX的语法规范
		1.一个组件必须有一个render方法，必须返回一个JSX元素
		2.必须有一个外层的JSX元素把所有内容包裹起来返回多个并列的JSX元素是不合法的
		3.表达式插入
			*在JSX中可以插入js表达式，返回结果会显示到页面中
			*表达式用{}包裹，可以放任意js代码，包括变量，表达式运算，函数执行
		4.使用className添加类名

####React中的事件

	*元素属性上加属性 onClick\ onKeyDown等
	*on*的事件监听 只能用在普通的HTML标签上，而不能用在组件标签上
	*this 问题 
		*react组件中调用方法的时候，并不是通过对象的方法调用
		this.xxxx
		*需要手动绑定
		```JavaScript
			this.handleClick.bind(this);
			如果传参数
			this.handleClick.bind(this,'李白');

		```
		*外部传进来的属性，组件内部无法控制和修改
		*除非外部传入新的props的值，否则props永远不变

####React组件中的状态
	*state:用于组件保存、控制、修改自己的可变状态
	*外部无法访问，也不能修改
	*组件初始状态  在组件中定义
	```JavaScript
		constructor(props){
		super(props);
		this.state={
			//组件初始状态
			isShow:true
		};
	}
	```
	*使用this.setState方法更新组件状态
	*取值 使用this.state.值的名字
	*state变化 会引起组件 render方式执行，组件重新渲染
####React浏览器开发者工具

	1.react developer tools
####React 渲染列表
	*文章列表/评论列表
	*data.map(function(dData,index){
		
	})
	*在遍历生成的jsx元素上都加上key属性，每个key属性的值，必须唯一
	```JavaScript
		render(){
			let nodes = msgData.map((dData,index) =>{
				return(
					<li key={dData.id}>
						{dData.name}:
						<p>{dData.msg}</p>
					</li>
				)
			});
			
			return(
				<ul className="msg-list">
					{nodes}
				</ul>
			);
		}
	```

####React组件之间的嵌套和组合
	
	