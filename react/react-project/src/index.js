// 入口文件
import React from 'react';//react操作库
import ReactDOM from 'react-dom';//操作Dom
// import  Button from './components/Button/';//自定义的Button组件
// import Test from './components/Test/';
// import MsgList from './components/MsgList/';
import Page from './components/Page/';
const rootEl = document.getElementById('app');

// 接收两个参数，1.是组件还可以写成<button></button> 2.是挂载到哪个节点上  
//ReactDOM.render(<Button size="xs" />,rootEl);
//ReactDOM.render(<Test />,rootEl);
ReactDOM.render(<Page />,rootEl);

//size="sm"表示组件的属性
