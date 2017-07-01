import React,{Component,propTypes} from 'react';
import './index.css';
import Icon from '../Icon/';

class TabBar extends Component{

	constructor(props){
		super(props);
	}
	
	render(){
		
		return(
			<div className="tab-bar">
				<div className="flex-wrap1">
					<div className="flex-1">
						<Icon type="film" />
						<span>影院</span>
					</div>
					<div className="flex-1">
						<Icon type="video" />
						<span>影视</span>
					</div>
					<div className="flex-1">
						<Icon type="gift" />
						<span>礼物</span>
					</div>
					<div className="flex-1">
						<Icon type="user" />
						<span>个人</span>
					</div>

				</div>
			</div>
		)

	}
	
}

export default TabBar;