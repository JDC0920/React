import React, { Component } from 'react';


import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import List from '../components/list'
//定义一个类  继承另一个类
class TopList extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {

        }
    }
    render(){
        return (
            <div className="TopList">
              <Header/>
              <Nav/>
              <List/>
            </div>
        )
    }
}
export default TopList;