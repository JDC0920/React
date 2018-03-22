import React, { Component } from 'react';


// import './style.css'
import {Link} from 'react-router-dom'
//定义一个类  继承另一个类
class Nav extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {
            index:'推荐'
        }

        this.add = this.add.bind(this);
    }
    add(value) {

    }
    render(){
        return (
            <div className="Nav">
                <nav>
                    <li onClick={this.add('推荐')} className={this.state.index =='推荐'?'current':''}><Link to="/">推荐</Link></li>
                    <li onClick={this.add('排行榜')} className={this.state.index =='排行榜'?'current':''}><Link to="/topList">排行榜</Link></li>
                    <li onClick={this.add('搜索')} className={this.state.index =='搜索'?'current':''}><Link to="/search">搜索</Link></li>
                </nav>
            </div>
        )
    }
    componentWillMount(){
        console.log(this.props.match);
    }
}
export default Nav;