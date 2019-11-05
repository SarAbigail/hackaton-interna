import React, {Component} from 'react';
import Logo from '../../Images/LOGO.jpg'
import './styles.css'


class Header extends Component  {
  
  render () {
      return(
        <div className="header">
        <nav className="menu-nav-header">
        <img alt="logo-lbel" src={Logo} className="logo-nav"></img>
        </nav>
      </div>
      )
  };
        
      };

export default Header;