import React, { Component } from 'react';
import { db } from '../../Firebase';


class Products extends Component {

  constructor() {
    super()
    this.state = { isProdOn: true };
  }
  product = (a) => {
    return (
        <div className="absoluta wrap row space-e">
          <div className="column just-center margin-05">
            <div className="bg flex just-center" >
              <img className="size" src={this.state.catalogue[a].img} alt={this.state.catalogue[a].producto} />
            </div>
            <p className="min-font just-center flex">{this.state.catalogue[a].producto}</p>
            <p className="price-font just-center-end row"> $ {this.state.catalogue[a].precio}</p>
          </div>
          <div className="column just-center margin-05">
            <div className="bg flex just-center" >
              <img className="size" src={this.state.catalogue[1].img} alt={this.state.catalogue[1].producto} />
            </div>
            <p className="min-font just-center flex">{this.state.catalogue[1].producto}</p>
            <p className="price-font just-center-end row"> $ {this.state.catalogue[1].precio}</p>
          </div>
          <div className="column just-center margin-05">
            <div className="bg flex just-center" >
              <img className="size" src={this.state.catalogue[2].img} alt={this.state.catalogue[2].producto} />
            </div>
            <p className="min-font just-center flex">{this.state.catalogue[2].producto}</p>
            <p className="price-font just-center-end row"> $ {this.state.catalogue[2].precio}</p>
          </div>
        </div>
    );
  }


  componentWillMount() {
    const catalogue = []
    db.collection("productos").get().then((doc) => {
      doc.forEach(product => catalogue.push(product.data()))
    }).catch((error) => {
      console.log("ERROR:", error);
    }
    );
    this.setState({ catalogue })
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(state => ({
      isProdOn: !state.isProdOn
    }));
  }

  render() {
    return (
      <div className="products">
        <div className="product-list">{this.state.isProdOn ? '' : this.product(0)}</div>
        <button className="btn-products btn-font" onClick={this.handleClick}>VER PRODUCTOS</button>
      </div>
    )
  };

};

export default Products;
