import React, { Component } from 'react';
import img1 from '../src/navimages/nav.jpg';
class Header extends Component{
    render(){
        return(

        <div>
            <header className="App-header" margin-left={10}  float={"left"}  border-radius={100}height={100} width={200} margin-top={20}> 
            <img src={img1}/> 
            <h1 style={{background:"white"}}>WELCOME TO REACT SPA DEVELOPMENT</h1>
            </header>
        </div>
        )
    }
}
export default Header;
