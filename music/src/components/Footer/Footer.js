import React, { Component } from 'react';

import {Link} from 'react-router-dom'
//定义一个类  继承另一个类
class Footer extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {

        }
    }
    render(){
        return (
            <div className="Footer">
                <h2 style={{fontSize:16,color:'#000',marginBottom:11,fontWeight:'normal',marginTop:0}}>热门歌单</h2>
                <p className="list-more">
                    <a href="javascript:void(0)">去客户端发现更多好音乐</a>
                </p>
                <footer>
                    <div>
                        <a href="javascript:void(0)">查看电脑版网页</a>
                    </div>
                    <h2 style={{textAlign:'center',display:'block',fontSize:14,color:'#000'}}>音乐</h2>
                </footer>
            </div>
        )
    }
}
export default Footer;