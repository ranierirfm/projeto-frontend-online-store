import React from 'react';
import propTypes from 'prop-types';
import Specifications from '../../Components/Specifications/Specifications';
import { getProductDetails } from '../../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const { match } = this.props;
    const { params } = match;
    const fetchProduct = await getProductDetails(params.id);
    this.setState({ product: fetchProduct, isLoading: false });
  }

  render() {
    const { isLoading, product } = this.state;

    if (isLoading) {
      return (
        <h1>Carregando...</h1>
      );
    }

    return (
      <section>
        <h2>
          {product.title}
        </h2>
        <img alt={ product.title } src={ product.thumbnail } />
        <Specifications
          data-testid="product-detail-name"
          items={ product.attributes }
        />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
  })).isRequired,
};

export default ProductDetails;
