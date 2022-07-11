import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                    {
                      produto.shipping.free_shipping && (
                        <h4
                          data-testid="free-shipping"
                        >
                          Frete gratis
                        </h4>
                      )
                    }
                    <Link
                      data-testid="product-detail-link"
                      to={ `productDetails/${produto.id}` }
                    >
                      <img src={ produto.thumbnail } alt={ produto.title } />
                    </Link>
                    <span>
                      { produto.title }
                    </span>
                    <span>
                      { produto.price }
                    </span>
                    <button
                      type="button"
                      onClick={ () => addToCart(produto) }
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
    free_shipping: propTypes.bool.isRequired,
  })).isRequired,
  addToCart: propTypes.func.isRequired,
};

export default ProductCard;
