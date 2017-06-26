import React,{Component,PropTypes} from 'react';
import './index.css';
import Button from '../Button/index';

// style方式加样式
let styleData = {
	borderRadius : '4px',
	width:'100px',
	height:'80px',
	fontSize:'20px'
}; 
class Test extends Component{
	constructor(props){
		super(props);
		this.state={
			//组件初始状态
			isShow:true
		};
	}
	handleClick(){
		this.setState({
			isShow:!this.state.isShow
		});
	}
	render(){//内置方法
		
		return (
			<div>
				<button  style={styleData} onClick={this.handleClick.bind(this)}
				>点我啊</button>

				<div className={this.state.isShow ?'box-show':'box-hide'}>
					内容内容内容内容内容内容内容内容
				</div>
			</div>
			
		)

	}
}
// 导出
export default Test  