import React, { Component } from "react";
import './404.css'
import { Link } from "react-router-dom";


class NotFound extends Component{

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>oops! page not found</h1>
                        <h5>Perhaps you can try to go back to the <Link to='/'> main </Link> page</h5>
                        <div className='NF'>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}



export default NotFound