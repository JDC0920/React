import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home'
import TopList from './pages/topList'
import Search from './pages/search'
import Video from './pages/video'
import TopDetail from './pages/topDetail'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
              <Route path="/home" exact component={Home}/>
              <Route path="/topList" component={TopList}/>
              <Route path="/search" component={Search}/>
              {/*<Route path="/video" component={Video}/>*/}
              <Route path="/topDetail/:id" component={TopDetail}/>
              <Redirect to={{pathname:'home',state:{from:'/'}}}></Redirect>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
