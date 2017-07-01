import React,{Component,propTypes} from 'react';
import './index.css';

class CommentList extends Component{

	constructor(props){
		super(props);
	}

	render(){
		let nodes = this.props.data.map((dData,index) =>{
		return(
			<div key={dData.id}>
				<h3>{dData.name}:</h3>
				<p>{dData.msg}</p>
			</div>
		)
	})

		return(
			<div>{nodes}</div>
		)
			
	}
	
}

export default CommentList;