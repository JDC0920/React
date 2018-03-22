import React, { Component } from 'react';




import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Content from '../components/content/content'
import Footer from '../components/Footer/Footer'
//定义一个类  继承另一个类
class Home extends Component{
    //构造函数
    constructor(props){
        super(props);
        //数据
        this.state = {

        }
    }
    render(){
        return (
            <div className="Home">
                <Header/>
                <Nav/>
                <Content/>
                <Footer/>
            </div>
        )
    }
    componentWillMount(){
        console.log(this.props.match.url)
    }
}
export default Home;