import React, { Component } from 'react';
import FinishedForm from '../../Components/FinishedForm/FinishedForm';

class FinishPayMount extends Component {
  constructor() {
    super();

    this.state = {
      formData: {
        name: '',
        email: '',
        cpf: '',
        phone: '',
        cep: '',
        address: '',
      },
    };
  }

  handleFormChange = ({ target }) => {
    const { name, value } = target;
    const { formData } = this.state;
    const cloneOfData = formData;
    cloneOfData[name] = value;
    this.setState({ formData: cloneOfData });
  }

  render() {
    const { formData } = this.state;
    return (
      <h1>
        <FinishedForm
          formData={ formData }
          handleFormChange={ this.handleFormChange }
        />
      </h1>
    );
  }
}

export default FinishPayMount;
