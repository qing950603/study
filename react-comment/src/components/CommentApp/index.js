import React,{Component,propTypes} from 'react';
import './index.css';
import CommentInput from '../CommentInput/';

class CommentApp extends Component{

	constructor(props){
		super(props);
		this.state={
			username:'输入姓名',
			msg:"输入内容",
			
		}
	}
	handleClick(){
		let name = this.refs.username.value;
		let msg = this.refs.msg.value;
		let msgCon={
			"id":Math.random(),
			"name":name,
			"msg":msg
		}
		this.props.pubClick(msgCon);
		
		console.log(name);
		console.log(msg);

	}
	changeName(e){
		this.setState({
			username:e.target.value

		})
	}
	changeMsg(e){
		this.setState({
			msg:e.target.value
		})
	}

	// <CommentInput size="xs" type="" clickFn={this.handleClick.bind(this)} />

	render(){
		return(
			<div>
				<div className="flex-wrap">
					<div className="flex-1">
						<span>用户:</span>
					</div>
					<div className="flex-5">
						<input type="text" ref="username" value={this.state.username} 

						onChange={this.changeName.bind(this)} />
					</div>
				</div>

				<div className="flex-wrap">
					<div className="flex-1">
						<span >内容:</span>
					</div>
					<div className="flex-5">
						<textarea ref="msg"　name="" id="" cols="30" rows="10" onChange={this.changeMsg.bind(this)} value={this.state.msg}></textarea>
					</div>
				</div>
				<button onClick={this.handleClick.bind(this)}>确认</button>
				
			</div>
		);
	}

}

export default CommentApp;