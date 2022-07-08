import React from 'react';
import { getProductDetails } from '../../services/api';

class ProductDetails extends React.Component {
  async componentDidMount() {
    console.log(await getProductDetails('MLB1983286920'));
  }

  render() {
    return (
      <h1>Nome</h1>
    );
  }
}

export default ProductDetails;
