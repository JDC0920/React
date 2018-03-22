import React, { Component } from 'react';
//定义一个类  继承另一个类
class Video extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {
        }
    }
    render(){
        return (
            <div className="Video">
                {/*<audio src=""></audio>*/}
            </div>
        )
    }
}
export default Video;