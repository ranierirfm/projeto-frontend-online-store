import React from 'react';
import propTypes from 'prop-types';
import Specifications from '../../Components/Specifications/Specifications';
import { getProductDetails } from '../../services/api';
import AvaliationForm from '../../Components/AvaliationForm/AvaliationForm';
import {
  addAvaliation,
  addFirsAvaliation,
  avaliationVerificationExist,
  getAvaliationById,
} from '../../services/avaliations';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
      isLoading: true,
      email: '',
      messageAvaliation: '',
      stars: 0,
      allAvaliationsOfItem: [],
      loadingAvaliations: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true, loadingAvaliations: true });
    const { match } = this.props;
    const { params } = match;
    this.fetchAllAvaliationsOfProduct();
    const fetchProduct = await getProductDetails(params.id);
    this.setState({ product: fetchProduct, isLoading: false });
  }

  fetchAllAvaliationsOfProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    if (!await avaliationVerificationExist()) {
      this.setState({ loadingAvaliations: false });
      return;
    }
    const avaliations = await getAvaliationById(params.id);
    this.setState({ allAvaliationsOfItem: avaliations, loadingAvaliations: false });
  }

  addVerificationInStorage = async () => {
    this.setState({ loadingAvaliations: true });
    const { match } = this.props;
    const { params } = match;
    const { email, stars, messageAvaliation } = this.state;
    const objeOfAvaliation = {
      email,
      stars,
      messageAvaliation,
      idOfProduct: params.id,
    };
    if (!await avaliationVerificationExist()) {
      await addFirsAvaliation(objeOfAvaliation);
      this.fetchAllAvaliationsOfProduct();
      this.clearFormAvaliation();
      return;
    }
    await addAvaliation(objeOfAvaliation);
    this.fetchAllAvaliationsOfProduct();
    this.clearFormAvaliation();
  }

  clearFormAvaliation = () => {
    this.setState({
      email: '',
      stars: 0,
      messageAvaliation: '',
    });
  }

  handleAvaliation = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      isLoading,
      product,
      email,
      messageAvaliation,
      stars,
      allAvaliationsOfItem,
      loadingAvaliations } = this.state;
    const { addToCart } = this.props;

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
        <button
          type="button"
          onClick={ () => addToCart(product.id) }
          data-testid="product-detail-add-to-cart"
          name="addToCart"
        >
          Adicionar ao carrinho
        </button>
        <AvaliationForm
          addVerificationInStorage={ this.addVerificationInStorage }
          messageAvaliation={ messageAvaliation }
          email={ email }
          handleAvaliation={ this.handleAvaliation }
          starsValue={ stars }
        />
        {
          loadingAvaliations ? (
            <h1>Carregando...</h1>
          ) : (
            <section>
              {
                !allAvaliationsOfItem.length ? (
                  <h1>
                    Nenhuma avaliação feita! seja o primeiro!
                  </h1>
                ) : (
                  <>
                    {
                      allAvaliationsOfItem.map((avaliation, index) => (
                        <section
                          key={ index }
                        >
                          <h1>{ avaliation.email }</h1>
                          <span>
                            { avaliation.messageAvaliation }
                          </span>
                        </section>
                      ))
                    }
                  </>
                )
              }
            </section>
          )
        }
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
  })).isRequired,
  addToCart: propTypes.func.isRequired,
};

export default ProductDetails;
