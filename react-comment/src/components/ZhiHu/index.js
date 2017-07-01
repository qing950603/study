import React,{Component,PropTypes} from 'react';
import './index.css';
import './xy.js';
import Icon from '../Icon/';
import Item from '../Item/';
let msgData=[
	{"id":"01","title":"人们期待的创新，小厂商和大企业谁更有可能实现？",src:require("../../images/1.png")},
	{"id":"02","title":"违反垄断法被欧盟罚了27亿美元，Google这次冤不冤？",src:require("../../images/2.png")},
	{"id":"03","title":"想看超市生意最近好不好，连接卫星查一下就知道",src:require("../../images/3.png")},
	{"id":"04","title":"那个你们听说过的「斯坦福监狱实验」，是我做的",src:require("../../images/4.png")},
	{"id":"05","title":"手一滑30万元天价镯子被摔碎，游客到底改赔多少钱？",src:require("../../images/5.png")},
	{"id":"06","title":"你爱的网红都在发广告，没办法，原来的营销渠道不太灵了",src:require("../../images/6.png")}
];


class ZhiHu extends Component{
	constructor(props){
		super(props);

	}
	render(){
		let styleData = {
			width:'5rem',
			height:'4.33rem'
		}; 
		let nodes = msgData.map((dData,index) =>{
		return(
			<div key={dData.id}>
				<Item leftContent={<p>{dData.title}</p>} 
				rightContent={<img src={dData.src} style={styleData} alt="" />} /> 
		
			</div>
		)
		});
		
		return(
			<div className="container">
				<div className="header">
					<Icon type="open" color="#fffffe" clsName="icon" />
					<span className="zhi">知乎日报</span>
					<Icon type="tit" color="#fff" clsName="icon1" />
					<Icon type="ling" color="#fffefb" clsName="icon2" />
				</div>
				<div className="content">
					{nodes}
				</div>
			</div>
		);
	}
}
export default ZhiHu;