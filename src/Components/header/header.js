import React, { Component } from "react";
import './header.css'


class Header extends Component{



    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
            <nav>
            <ul>
              <li><a href='/'>Main page</a></li>
              <li><a href='/contact'>Add new contact</a></li>
              <li> <a href='#'> Favourite contacts </a></li>
              <li> <a href='#'> Recent contacts</a></li>
              <li> <a href='#'> Recently deleted contacts</a></li>
              <li><a href='#'> Family contacts</a></li>              
            </ul>
            </nav>
            </div>
            </div>
            </div>
        )
        }
}

export default Header