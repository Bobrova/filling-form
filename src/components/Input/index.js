import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as fieldNames from '../../constants/fieldNames';
import './InputForm.css';

class InputForm extends Component {

  handleInputChange = (e) => {
    const { setValue } = this.props;
    const nameLabel = e.target.name;
    const { value } = e.target;
    setValue({ title: nameLabel, text: value });
  }

  render() {
    const { name, error } = this.props;
    let placeholder = '';
    if (name === 'phone') placeholder = "+7(___)___-__-__";
    if (name === 'dateOfBirth') placeholder = "ДД.ММ.ГГГГ"; 
    return (
      <React.Fragment>
        {name === 'AdditionalInformation'
          ? <div className="item">
            <label htmlFor={name} className="item-name">{fieldNames[name]}</label>
            <textarea className="textarea-text" name={name} id={name} onChange={this.handleInputChange} />
          </div>
          : <div className="item">
            <label htmlFor={name} className="item-name">{fieldNames[name]}</label>
            <input type="text" className="input-text" id={name} name={name} onChange={this.handleInputChange} placeholder={placeholder} />
            <p className="error">{error}</p>
          </div>
        }
      </React.Fragment>
    );
  }
}

InputForm.propTypes = {
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputForm;
