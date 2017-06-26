import React,{Component,PropTypes} from 'react';
import './index.css';

let msgData=[
	{"id":"01","name":"李白","msg":"黄河之水天上来"},
	{"id":"02","name":"杜甫","msg":"国破山河在"},
	{"id":"03","name":"王维","msg":"大漠孤烟直"}
];
class MsgList extends Component{
	constructor(props){
		super(props);
	}

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
}
export default MsgList;