import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <div>
                <body style={{background:"pink",border: "1px solid"}}>
                <nav>
                    <Link to="/home"> HOME </Link> &nbsp;&nbsp;
                    <Link to="/login">LOGIN</Link> &nbsp;&nbsp;
                    <Link to="/product"> PRODUCT </Link> &nbsp;&nbsp;  
                </nav>
                </body>
            </div>
    )}
}

export default Nav;