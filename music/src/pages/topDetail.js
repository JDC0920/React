import React, { Component } from 'react';


import axios from 'axios'
//定义一个类  继承另一个类
class TopListSearch extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {
            lists:[],
            title:'',
            time:'',
            img:''
        }
    }
    render(){
        return (
            <div className="topDetail">
                <div className="detail_header" style={{padding:15}}>
                    <img src={this.state.img} style={{display:'inline-block',width:100,height:100}}/>
                    <div className="" style={{display:'inline-block',marginLeft:15}}>
                        <h1 style={{textAlign:'center',display:'block'}}>{this.state.title}</h1>
                        <span>{this.state.time} 更新</span>
                    </div>
                </div>
                <ul>
                    {this.state.lists.map(function (ele,index) {
                        // console.log(ele.data.singer)
                        return <li key={index}>
                            <div className="detail-span">
                                <span className="number">{index+1}</span>
                            </div>
                            <div className="detail">
                                <h3>{ele.data.songname}</h3>
                                {ele.data.singer.map(function (eles,ind) {
                                    // console.log(eles.name)
                                    return <span key={ind}>{eles.name}</span>
                                })}
                            </div>
                        </li>
                    })}
                </ul>

            </div>
        )
    }
    componentWillMount(){
        var id = this.props.match.params.id;
        console.log(id);
        var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid='+id+'&_=1521684271622'
        axios.get(url).then((response)=>{
            // console.log(response.data.topinfo.MacDetailPicUrl)
            this.setState({
                img:response.data.topinfo.MacDetailPicUrl,
                lists:response.data.songlist,
                title:response.data.topinfo.ListName,
                time:response.data.update_time
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export default TopListSearch;