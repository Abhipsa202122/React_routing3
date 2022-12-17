import React, { Component } from 'react';
//class section 
class Login extends Component{
    //render method - to display the output 
    render(){
        return(
            <div>
                <h3> Login Pages</h3>
                Name:<input type="text" name="name" />
                Password:<input type="text" pw="name" />
                <button>Login</button>
            </div>
            

        )
    }
}
//export section  -- component is ready to be reused in another files 
export default Login


