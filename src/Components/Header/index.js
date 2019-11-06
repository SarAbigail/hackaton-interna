import React, {Component} from 'react';


class Header extends Component  {
  
  render () {
      return(
        <div className="header">
        <nav className="menu-nav-header">
        <div className="cont-logo">
        </div>
        <div className="menu-cart-user">
        <button className="menu-btn user"></button>
        <button className="menu-btn cart"></button>
        </div>
        </nav>
      </div>
      )
  };
        
      };

export default Header;