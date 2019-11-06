import React, { Component } from 'react';
import { db } from '../../Firebase';
import { connect } from 'react-redux';


class Products extends Component {

  constructor() {
    super()
    this.state = { isProdOn: true };
  }


  product = (a) => { 
    if (a) {
      return a.map((prod)=>{
        return (
            <div key={this.state.catalogue[prod].codigo} className="absoluta wrap row space-e">
              <div className="column just-center margin-05">
                <div className="bg flex just-center" >
                  <img className="size" src={this.state.catalogue[prod].img} alt={this.state.catalogue[prod].producto} />
                </div>
                <p className="min-font just-center flex">{this.state.catalogue[prod].producto}</p>
                <p className="price-font just-center-end row"> $ {this.state.catalogue[prod].precio}</p>
              </div>
            </div>
        );
    
})
    }else{
      return (
        <div key={this.state.page}></div>
      )
    }
  }


  handleProduct = () => {
    return this.props.catalogue[this.props.page].content;
  };

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
        <div className="product-list">{this.state.isProdOn ? '' : this.product(this.handleProduct())}</div>
        <button className="btn-products btn-font" onClick={this.handleClick}>VER PRODUCTOS</button>
      </div>
    )
  };

};

const mapStateToProps = (state) => {
    return {
        catalogue: state.catalogue,
        page: state.page
    }
}

export default connect(mapStateToProps)(Products);
