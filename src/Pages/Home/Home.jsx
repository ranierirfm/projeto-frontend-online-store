import React from 'react';
import CategoryList from '../../Components/CategoryList/CategoryList';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { getProductsFromCategoryAndQuery } from '../../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      itemInput: '',
      loadingFetchProducts: false,
    };
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  searchProducts = async () => {
    const { itemInput } = this.state;
    this.setState({ loadingFetchProducts: true });
    const response = await getProductsFromCategoryAndQuery(null, itemInput);
    this.setState({ productList: response.results, loadingFetchProducts: false });
  }

  render() {
    const { productList, itemInput, loadingFetchProducts } = this.state;
    return (
      <main>
        <section>
          <input
            onChange={ this.handleInput }
            name="itemInput"
            value={ itemInput }
            data-testid="query-input"
          />
          <button
            onClick={ this.searchProducts }
            type="button"
            data-testid="query-button"
          >
            <span>Buscar</span>
          </button>
        </section>
        {
          productList.length === 0 ? (
            <h1
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h1>
          ) : (
            <h1>Lista de produtossssssss</h1>
          )
        }
        <CategoryList />
        {
          loadingFetchProducts ? (
            <h1>Carregando....</h1>
          ) : (
            <ProductCard products={ productList } />
          )
        }
      </main>
    );
  }
}

export default Home;
