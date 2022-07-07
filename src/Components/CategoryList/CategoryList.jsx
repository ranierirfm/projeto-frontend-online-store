import React, { Component } from 'react';
import { getCategories } from '../../services/api';

class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      category: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    this.setState({ category: await getCategories() }, () => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { category, isLoading } = this.state;

    if (isLoading) {
      return (
        <h1>Carregando...</h1>
      );
    }

    return (
      <aside>
        {
          category.map((categoria) => (
            <button
              data-testid="category"
              key={ categoria.id }
              type="button"
            >
              {categoria.name}
            </button>
          ))
        }
      </aside>
    );
  }
}

export default CategoryList;
