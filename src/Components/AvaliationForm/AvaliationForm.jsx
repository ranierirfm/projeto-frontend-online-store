import React from 'react';

const one = 1;
const two = 2;
const tree = 3;
const four = 4;
const five = 5;

class AvaliationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      stars: [one, two, tree, four, five],
    };
  }

  render() {
    const { stars } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="product-detail-email"
            type="email"
            name="email"
          />
        </label>
        {
          stars.map((index) => (
            <label
              htmlFor="starts"
              key={ index }
            >
              <input
                data-testid={ `${index}-rating` }
                onChange={ () => console.log(index) }
                name="stars"
                value={ index }
                type="radio"
              />
            </label>
          ))
        }
        <label
          htmlFor="evalation"
        >
          <textarea
            name="evalation"
            data-testid="product-detail-evaluation"
          />
        </label>
        <section />
        <button
          data-testid="submit-review-btn"
          type="submit"
        >
          Enviar
        </button>
      </form>
    );
  }
}

export default AvaliationForm;
