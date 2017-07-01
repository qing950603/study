import React,{Component,propTypes} from 'react';
import './iconfont.css';

class Icon extends Component{

	constructor(props){
		super(props);
	}
	//设置组件默认值
	static defaultProps={
		color:'red'
	}
	render(){
		let styleData = {
			color:this.props.color
		}; 
		let type=this.props.type;
		let fType = `iconfont icon-${type}`;
		let clsName =  this.props.clsName;
		return(
			<i className={`${fType} ${clsName}`} style={styleData}></i>
		)

	}
	
}

export default Icon;