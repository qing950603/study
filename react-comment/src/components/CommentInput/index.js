import React,{Component,PropTypes} from 'react';
import './index.css'; 
class CommentInput extends Component{
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
		let clsName = 'btn';
		if(size=='xs'){
			clsName += ' btn-xs'
		}
		return (
			<div>
				<button onClick={this.props.clickFn} className={clsName}>{text}</button> 
				
			</div>
			
		)

	}
}
// 导出
export default CommentInput  