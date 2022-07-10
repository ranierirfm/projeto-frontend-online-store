import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class FinishedForm extends Component {
  render() {
    const { handleFormChange, formData } = this.props;
    console.log(formData);
    return (
      <section>
        <form>
          <label htmlFor="text">
            <input
              value={ formData.name }
              onChange={ handleFormChange }
              placeholder="Nome completo"
              type="text"
              data-testid="checkout-fullname"
              name="name"
            />
          </label>

          <label htmlFor="email">
            <input
              value={ formData.email }
              onChange={ handleFormChange }
              placeholder="Email"
              type="email"
              data-testid="checkout-email"
              name="email"
            />
          </label>

          <label htmlFor="cpf">
            <input
              value={ formData.cpf }
              onChange={ handleFormChange }
              placeholder="CPF"
              type="text"
              data-testid="checkout-cpf"
              name="cpf"
            />
          </label>

          <label htmlFor="phone">
            <input
              value={ formData.phone }
              onChange={ handleFormChange }
              placeholder="Telefone"
              type="text"
              data-testid="checkout-phone"
              name="phone"
            />
          </label>

          <label htmlFor="cep">
            <input
              value={ formData.cep }
              onChange={ handleFormChange }
              placeholder="CEP"
              type="text"
              data-testid="checkout-cep"
              name="cep"
            />
          </label>

          <label htmlFor="address">
            <input
              value={ formData.address }
              onChange={ handleFormChange }
              placeholder="Endereço"
              type="text"
              data-testid="checkout-address"
              name="address"
            />
          </label>
        </form>
      </section>
    );
  }
}

FinishedForm.propTypes = {
  formData: propTypes.arrayOf(propTypes.shape({})).isRequired,
  handleFormChange: propTypes.func.isRequired,
};
