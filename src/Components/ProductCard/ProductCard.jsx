import React from 'react';
import propTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { products, addToCart } = this.props;
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
                    <button
                      type="button"
                      onClick={ () => addToCart(produto.id) }
                      data-testid="product-add-to-cart"
                      name="addToCart"
                    >
                      Adicionar ao carrinho
                    </button>
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
  addToCart: propTypes.func.isRequired,
};

export default ProductCard;
