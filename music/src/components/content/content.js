import React, { Component } from 'react';

import axios from 'axios'
import ReactSwipe from 'react-swipe'
import Swiper from 'swiper'
import {Link} from 'react-router-dom'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
//定义一个类  继承另一个类
class Content extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {
            sliders:[],
            radioList:[]
        }
    }
    render(){
        return (
            <div className="Content">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.state.sliders.map(function (ele,index) {
                            return <div key={index} className="swiper-slide">
                                <Link to={ele.linkUrl}>
                                    <img src={ele.picUrl} className="swiper-img"/>
                                </Link>
                            </div>
                        })}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="video">
                    <h2>电台</h2>
                    <ul>
                        {this.state.radioList.map(function (ele,index) {
                            return <li key={index}>
                                <Link to="">
                                    <div className="list-media">
                                        <img src={ele.picUrl} alt=""/>
                                    </div>
                                    <div>
                                        <h3>{ele.Ftitle}</h3>
                                    </div>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay:{
                delay:200,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            uniqueNavElements:false
        });
        var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
        axios.get(url).then((response)=>{
            console.log(response);
            let res = response.data;
            console.log(res.data.slider);
            let slider = res.data.slider;
            this.setState({
                sliders:slider,
                radioList:res.data.radioList
            })
        }).catch((err)=>{
            console.log(err)
        })

    }
}
export default Content;