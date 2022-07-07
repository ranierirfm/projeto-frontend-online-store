import React from 'react';
import CategoryList from '../../Components/CategoryList/CategoryList';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      productList: [],
    };
  }

  render() {
    const { productList } = this.state;
    return (
      <main>
        {
          productList.length === 0 ? (
            <h1
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h1>
          ) : (
            <h1>Lista de produtos</h1>
          )
        }
        <CategoryList />
      </main>
    );
  }
}

export default Home;
