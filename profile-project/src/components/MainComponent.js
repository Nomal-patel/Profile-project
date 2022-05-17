import React, { Component } from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
class Main extends Component{
    render(){
        
    return(
        <React.Fragment>
                <Header/>
                <div>Hello world</div>
                <Footer/>

        </React.Fragment>
    )
    }

}

export default Main;