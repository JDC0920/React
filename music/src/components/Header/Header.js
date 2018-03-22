import React, { Component } from 'react';

import './style.css'
import {Link} from 'react-router-dom'
//定义一个类  继承另一个类
class Header extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {

        }
    }
    render(){
        return (
            <div className="Header">
                <header>
                    <span className="music">音乐</span>
                    <Link to="/" className="btn-download">下载APP</Link>
                </header>
            </div>
        )
    }
}
export default Header;