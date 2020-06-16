import React, { Component } from 'react'
import Home from "./component/Home/Home";
import Skills from "./component/skills/skill";
import About from "./component/About/About";
import Work from "./component/work/Work";
import ContactMe from "./component/contactMe/contactme";
import {BrowserRouter, Route,Switch} from"react-router-dom";
import Loader from "./component/loader/loader";

class App extends Component {
    state={
        loading: true
    };
    componentDidMount(){
        setTimeout(()=>{
            this.setState({loading:false})
        },1000)
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        {this.state.loading?<Loader/>:<Route path="/" exact component={Home}/>}
                        {this.state.loading?<Loader/>:<Route path="/about" component={About}/>}
                        {this.state.loading?<Loader/>:<Route path="/skills" component={Skills}/>}
                        {this.state.loading?<Loader/>:<Route path="/work" component={Work}/>}
                        {this.state.loading?<Loader/>:<Route path="/contact" component={ContactMe}/>}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;