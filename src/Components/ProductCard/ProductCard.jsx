import React from 'react';
import propTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <section>
        {
          products.length === 0 ? (
            <h1>Nenhum produto foi encontrado</h1>
          ) : (
            <>
              {
                products.map((produto) => (
                  <nav
                    data-testid="product"
                    key={ produto.id }
                  >
                    <img src={ produto.thumbnail } alt={ produto.title } />
                    <span>
                      { produto.title }
                    </span>
                    <span>
                      { produto.price }
                    </span>
                  </nav>
                ))
              }
            </>
          )
        }
      </section>
    );
  }
}

ProductCard.propTypes = {
  products: propTypes.arrayOf(propTypes.shape({
  })).isRequired,
};

export default ProductCard;
