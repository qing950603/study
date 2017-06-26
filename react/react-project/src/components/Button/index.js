import React,{Component,PropTypes} from 'react';
import './index.css';

//style方式加样式
// let styleData = {
// 	borderRadius : '4px',
// 	width:'200px'
// }; 
class Button extends Component{
	constructor(props){
		super(props);
	}
	static defaultProps = {
		text:'确认'
	};//注意此处有分号，默认静态属性
	//属性类型检查
	static propTypes = {
		size:React.PropTypes.string.isRequired
	};//注意此处有分号
	render(){//内置方法
		let{size,text}=this.props;//ES6解构赋值
		// let size = this.props.size;
		let clsName = 'btn';
		//let str =<p>李白</p>;
		//let isLike = true;
		if(size=='xs'){
			clsName += ' btn-xs'
		}
		// <button style={styleData}>确认</button>
		//{str}
		//{1+1}
		//{isLike == true ?'喜欢':'不喜欢'}
		return (
			<div>
				<button className={clsName}>{text}</button> 
				
			</div>
			
		)

	}
}
// 导出
export default Button  