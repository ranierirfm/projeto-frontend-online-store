import React, { Component } from 'react';
import propTypes from 'prop-types';
import { getCategories } from '../../services/api';
import Loading from '../Loading/Loading';

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
    const { filterCategory } = this.props;

    if (isLoading) {
      return (
        <Loading />
      );
    }

    return (
      <aside>
        {
          category.map((categoria) => (
            <button
              onClick={ () => filterCategory(categoria) }
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

CategoryList.propTypes = {
  filterCategory: propTypes.func.isRequired,
};

export default CategoryList;
