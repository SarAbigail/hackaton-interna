import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Products from '../Products';

class MainComp extends Component  {
  
  render () {
      return(
        <div className="main-component">
        <Header></Header>
        <Products></Products>
        <Footer></Footer>
      </div>
      )
  };
        
      };

export default MainComp;