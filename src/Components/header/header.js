import React, { Component } from "react";
import './header.css'
import {Link} from 'react-router-dom'


class Header extends Component{



    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
            <nav>
            <ul>
              <li><Link to='/'>Main page</Link></li>
              <li><Link to='/contact'>Add new contact</Link></li>
              <li> <Link to='/edit'> Edit contact </Link></li>
              <li> <Link to='#'> Recent contacts</Link></li>
              <li> <Link to='#'> Favourite contacts</Link></li>
              <li><Link to='#'> Family contacts</Link></li>              
            </ul>
            </nav>
            </div>
            </div>
            </div>
        )
        }
}

export default Header