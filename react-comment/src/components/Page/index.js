import React,{Component,PropTypes} from 'react';
import './index.css';
import CommentApp from '../CommentApp/';
import CommentList from '../CommentList/';
import Icon from '../Icon/';
import TabBar from '../TabBar/';
import Item from '../Item/';

let msgData=[
	{"id":"01","name":"李白","msg":"黄河之水天上来"},
	{"id":"02","name":"杜甫","msg":"国破山河在"},
	{"id":"03","name":"王维","msg":"大漠孤烟直"}
];
class Page extends Component{
	constructor(props){
		super(props);
		this.state={
			comments:msgData
		}
	}
	
	//data为{}
	pubFn(data){
		msgData.unshift(data);
		this.setState({comments:msgData})
	}
	// <Icon type="video" color="#29cc6d" />
	// <Icon type="film" color="#fff023" />
	// <Icon type="gift" />
	// <Icon type="user" />
	render(){
		let leftData = <img width="100%" src={require('../../images/1.jpg')} alt="" />;
		return(
			<div className="kuang">

				<div className="conent">
					<CommentApp pubClick={this.pubFn.bind(this)} />
					<CommentList className="list" data={this.state.comments} />
					
				</div>
				
				<TabBar />
					<Item leftContent={leftData} centerContent={leftData} rightContent={leftData} />
				
			</div>
		)
	}
}
export default Page;