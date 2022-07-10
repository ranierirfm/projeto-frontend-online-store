import React from 'react';
import propTypes from 'prop-types';

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
    const {
      handleAvaliation,
      email,
      messageAvaliation,
      addVerificationInStorage,
    } = this.props;
    const { stars } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            value={ email }
            onChange={ handleAvaliation }
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
                onChange={ handleAvaliation }
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
            onChange={ handleAvaliation }
            value={ messageAvaliation }
            name="messageAvaliation"
            data-testid="product-detail-evaluation"
          />
        </label>
        <section />
        <button
          onClick={ addVerificationInStorage }
          data-testid="submit-review-btn"
          type="button"
        >
          Enviar
        </button>
      </form>
    );
  }
}

AvaliationForm.propTypes = {
  handleAvaliation: propTypes.func.isRequired,
  messageAvaliation: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  addVerificationInStorage: propTypes.func.isRequired,
};

export default AvaliationForm;
