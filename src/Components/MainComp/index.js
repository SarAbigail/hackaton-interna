import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Products from '../Products';
import Slider from '../Slider';

class MainComp extends Component  {
  
  render () {
      return(
        <div className="main-component">
        <Header></Header>
        <Slider></Slider>
        <Products></Products>
        <Footer></Footer>
      </div>
      )
  };
        
      };

export default MainComp;