import React, {Component} from 'react';
import {db} from '../../Firebase';


class Products extends Component  {

    constructor() {
        super()
        this.state = {isProdOn: true};
      }
     
       product=(a)=>{     
        return(
            <div className="absoluta wrap row">
            <div className="column just-center">
                <div className="bg flex just-center" >
                    <img className="size" src={this.state.catalogue[a].img} alt={this.state.catalogue[a].producto} />
                </div>
                <p className="min-font just-center flex">{this.state.catalogue[a].producto}</p>
                <p className="price-font just-center-end row"> $ {this.state.catalogue[a].precio}</p>
            </div>
        </div>
        );
        }
        

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
            this.setState(state => ({
                isProdOn: !state.isProdOn
              }));
        }
    
  render () {       
      return(
        <div className="products">
        <div className="product-list">{this.state.isProdOn ? '' : this.product(0)}</div>
        <button className="btn-products" onClick={this.handleClick}>Ver Productos</button>
      </div>
      )
  };
        
      };

export default Products;
