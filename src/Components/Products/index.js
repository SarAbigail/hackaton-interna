import React, {Component} from 'react';
import {db} from '../../Firebase';


class Products extends Component  {
    
    componentWillMount(){
        const catalogue = []
        db.collection("productos").get().then((doc) =>{
            doc.forEach(product => catalogue.push(product.data()))
          }).catch((error) => {
            console.log("ERROR:", error);
          }
          );  
         this.setState({catalogue})
      }

        handleClick = (e) => {
            e.preventDefault();
            console.log(this.state.catalogue[0]);   
        }
    

  render () {       
      return(
        <div className="products">
        <button className="btn-products" onClick={this.handleClick}>Ver Productos</button>
      </div>
      )
  };
        
      };

export default Products;
