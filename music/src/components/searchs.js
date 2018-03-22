import React, { Component } from 'react';
import {Icon} from 'antd'
import axios from 'axios'
//定义一个类  继承另一个类
class SearchInput extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {
            search:[]
        }
    }
    render(){
        return (
            <div className="SearchInput">
                <div style={{margin:10,backgroundColor:'#000'}}></div>
                <div className="search_box">
                    <div className="search_input">
                        <form action="get">
                            <input type="search" placeholder="搜索歌曲、歌单、专辑" onClick={()=>{

                            }}/>
                            <Icon type="search" className="search_icon" />
                        </form>
                        {/*<span>取消</span>*/}
                    </div>

                </div>
                <div className="search_result">
                    <h3>热门搜索</h3>
                    <div>
                        {this.state.search.map(function (ele,index) {
                            if(ele.n>250000){
                                return <a href="javascript:void(0)" key={index}>{ele.k}</a>
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        axios.get('https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg').then((response)=>{
            console.log(response.data.data.hotkey)
            this.setState({
                search:response.data.data.hotkey
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export default SearchInput;