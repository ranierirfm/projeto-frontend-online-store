import React from 'react';
import propTypes from 'prop-types';
import Specifications from '../../Components/Specifications/Specifications';
import { getProductDetails } from '../../services/api';
import AvaliationForm from '../../Components/AvaliationForm/AvaliationForm';
import {
  addAvaliationInStore,
  addFirsAvaliationInStore,
  avaliationExist,
  getAvaliationById,
} from '../../services/avaliations';
import Loading from '../../Components/Loading/Loading';

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
    this.fetchAllAvaliationsOfProduct();
    this.fetchProductDetail();
  }

  fetchProductDetail = async () => {
    const { match } = this.props;
    const { params } = match;
    const fetchProduct = await getProductDetails(params.id);
    this.setState({ product: fetchProduct, isLoading: false });
  }

  fetchAllAvaliationsOfProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    if (!await avaliationExist()) return this.setState({ loadingAvaliations: false });
    const avaliations = await getAvaliationById(params.id);
    this.setState({ allAvaliationsOfItem: avaliations, loadingAvaliations: false });
  }

  addAvaliationInStorage = async () => {
    this.setState({ loadingAvaliations: true });
    if (!await avaliationExist()) return this.addFistAvaliation();
    this.addAvaliation();
  }

  addAvaliation = () => {
    addAvaliationInStore(this.objOfAvaliation());
    this.fetchAllAvaliationsOfProduct();
    this.clearFormAvaliation();
  }

  addFistAvaliation = () => {
    const { email, stars, messageAvaliation } = this.state;
    addFirsAvaliationInStore(this.objOfAvaliation({ email, stars, messageAvaliation }));
    this.fetchAllAvaliationsOfProduct();
    this.clearFormAvaliation();
  }

  objOfAvaliation = (dataOfAvaliation) => {
    const { match } = this.props;
    const { params } = match;
    return {
      ...dataOfAvaliation,
      idOfProduct: params.id,
    };
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
        <Loading />
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
          onClick={ () => addToCart(product) }
          data-testid="product-detail-add-to-cart"
          name="addToCart"
        >
          Adicionar ao carrinho
        </button>
        <AvaliationForm
          addVerificationInStorage={ this.addAvaliationInStorage }
          messageAvaliation={ messageAvaliation }
          email={ email }
          handleAvaliation={ this.handleAvaliation }
          starsValue={ stars }
        />
        {
          loadingAvaliations ? (
            <Loading />
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
