import React, {Component} from 'react';
import {products} from '../../Firebase'

class Products extends Component  {

    
    

  render () {
    console.log(products);
      return(
        <div className="products">
        <button className="btn-products">Ver Productos</button>
      </div>
      )
  };
        
      };

export default Products;