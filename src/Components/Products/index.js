import React, { Component } from 'react';
import { db } from '../../Firebase';
import NumericInput from 'react-numeric-input';



class Products extends Component {

  constructor() {
    super()
    this.state = { isProdOn: true };
  }
  product = (a) => {
    return (
      <React.Fragment>
        <div className="absoluta wrap row space-e">
          <a href="#miModal"><div className="column just-center margin-05">
            <div className="bg flex just-center" >
              <img className="size" src={this.state.catalogue[a].img} alt={this.state.catalogue[a].producto} />
            </div>
            <p className="min-font just-center flex">{this.state.catalogue[a].producto}</p>
            <p className="price-font just-center-end row"> $ {this.state.catalogue[a].precio}</p>
          </div></a>
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

        <div id="miModal" className="modal">
          <div className="modal-contenido">
            <div className="modal-div">
              <div className="flex just-end">
                <a className="fz-2" href="#">X</a>
              </div>
              <div className="div-modal-producto">
                <img className="size-modal" src={this.state.catalogue[a].img} alt={this.state.catalogue[a].producto} />
                <div className="texto-modal">
                  <p className="just-center flex margin-05 fz-1-5">{this.state.catalogue[a].producto}</p>
                  <p className="just-center-end row fz-1-5" > S/. {this.state.catalogue[a].precio}</p>
                </div>
              </div>
            </div>
            <div className="row space-e div-number-input">
              <p className="p-number">CANTIDAD</p>
              <NumericInput className="number-input" min={0} max={100} value={0} mobile={false} />
            </div>
            <button className="agregar btn-products btn-font" onClick={this.handleClick}>AGREGAR</button>
          </div>
        </div>
      </React.Fragment>
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
      <React.Fragment>
        <div className="products">
          <div className="product-list">{this.state.isProdOn ? '' : this.product(0)}</div>
          <button className="btn-products btn-font" onClick={this.handleClick}>VER PRODUCTOS</button>
        </div>
      </React.Fragment>
    )
  };

};

export default Products;
