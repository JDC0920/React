import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import axios from 'axios'
//定义一个类  继承另一个类
class List extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {
            topLists:[],
            // songList:[]
        }
    }
    render(){
        return (
            <div className="List">
                <ul>
                    {this.state.topLists.map(function(ele,index){
                        console.log(ele.id);
                        return <li key={index}>
                            <div>
                                <Link to={"/topDetail/"+ele.id} className="topic_media">
                                    <img src={ele.picUrl} alt=""/>
                                </Link>
                                <div className="topic_info">
                                    <div className="topic_cont">
                                        <h3>{ele.topTitle}</h3>
                                        {ele.songList.map(function (eles,ind) {
                                            console.log(eles);
                                            return <p key={ind}>
                                                    {ind+1}
                                                    <span className="text_name">{eles.songname}</span>
                                                    -{eles.singername}
                                            </p>
                                        })}
                                    </div>
                                    <i className="topic_arrow"></i>
                                </div>
                            </div>
                        </li>
                    })}

                </ul>
            </div>
        )
    }
    componentDidMount(){
        var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1521629906998'
        axios.get(url).then((response)=>{
            var res = response.data.data.topList;
            console.log(res);
            this.setState({
                topLists:res
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export default List;