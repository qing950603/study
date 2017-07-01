import React,{Component,propTypes} from 'react';
import './index.css';
import Icon from '../Icon/';

class Item extends Component{

	constructor(props){
		super(props);
	}
	// <img width="100%" src={require('../../images/1.jpg')} alt="" />
	render(){
		
		return(
			<div className="item">
			
				<div className="item-left">
					{this.props.leftContent}
					
				</div>
				<div className="item-right">
					{this.props.rightContent}
				</div>
				
			</div>
		)

	}
	
}

export default Item;