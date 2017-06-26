//react的嵌套和组合
import React,{Component,PropTypes} from 'react';
import Button from '../Button';
import MsgList from '../MsgList/';
class Page extends Component{
	constructor(porps){
		super(porps);
	}

	render(){
		return(
			<div>
				这是Page组件
				<Button size="xs" text="中大奖" />
				<MsgList />
			</div>
		)
	}
}


export default Page