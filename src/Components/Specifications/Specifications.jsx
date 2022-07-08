import React from 'react';
import propTypes from 'prop-types';

class Specifications extends React.Component {
  constructor() {
    super();

    this.state = {
      attributes: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    const { items } = this.props;
    this.setState({ isLoading: true });
    this.setState({ attributes: items }, () => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { attributes, isLoading } = this.state;
    if (isLoading) {
      return (
        <h1>Carregand...</h1>
      );
    }
    return (
      <section
        data-testid="product-detail-name"
      >
        {
          attributes.map((item) => (
            <section
              key={ item.id }
            >
              <span>
                { item.name }
              </span>
              <span>
                { item.value_name }
              </span>
            </section>
          ))
        }
      </section>
    );
  }
}

Specifications.propTypes = {
  items: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default Specifications;
