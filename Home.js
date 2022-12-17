import React, { Component } from 'react';
import img2 from './navimages/img3.jpg';
class Home extends Component{
    render(){
        return(
        <div>
            <h1 style={{background:"deeppink"}}> Welcome to Navgurukul Batch 2022</h1>
            <div>
            <button class="btn btn-success"><span class="bi bi-hand-thumbs-up-fill"></span></button>

            </div>

            <img src={img2} height={300} width={800}/>
        
        </div>
        )
    }
}
export default Home;


