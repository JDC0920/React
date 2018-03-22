import React, { Component } from 'react';

import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import SearchInput from '../components/searchs'
//定义一个类  继承另一个类
class Search extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {

        }
    }
    render(){
        return (
            <div className="Search">
                <Header/>
                <Nav/>
                <SearchInput/>
            </div>
        )
    }
}
export default Search;