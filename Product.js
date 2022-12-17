import React,{Component} from 'react';
//import NavProduct from './NavProduct'
//import {Link} from 'react-router-dom';
import './Product.css'
class Product extends Component{
    render(){
        return(
            <div>
                <table>
                <h1>Display Products data from the URL</h1>
                <a href='https://dummyjson.com/'> Product</a>
                {/*<div style={{'backgroundColor':'aqua','color':'blue'}}>
                </div>
                {/*<Link to="/product/fashion"> Fashion </Link> &nbsp;&nbsp;
                <Link to="/product/electronic"> Electronic </Link> &nbsp;&nbsp;*/}
            
                </table>
            </div>
        )
    }
}
export default Product;
