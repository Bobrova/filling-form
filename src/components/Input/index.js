import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as fieldNames from '../../constants/fieldNames';
import maskDate from '../../utils/maskDate.js';
import './style.css';

class InputForm extends Component {
  handleInputChange = (e) => {
    const { setValue } = this.props;
    const { value, name } = e.target;
    let v = value;
    if (name === 'dateOfBirth') v = maskDate(value);
    setValue({ title: name, text: v });
  }

  render() {
    const { name, error, value } = this.props;
    let placeholder = '';
    if (name === 'phone') placeholder = "+7(___)___-__-__";
    if (name === 'dateOfBirth') placeholder = "ДД.ММ.ГГГГ"; 
    return (
      <React.Fragment>
        {name === "AdditionalInformation" ? (
          <div className="item">
            <label htmlFor={name} className="item-name">
              {fieldNames[name]}
            </label>
            <textarea
              className="textarea-text"
              name={name}
              id={name}
              onChange={this.handleInputChange}
              value={value}
            />
          </div>
        ) : (
          <div className="item">
            <label htmlFor={name} className="item-name">
              {fieldNames[name]}
            </label>
            <input
              type="text"
              className="input-text"
              id={name}
              name={name}
              onChange={this.handleInputChange}
              value={value}
              placeholder={placeholder}
            />
            <p className="error">{error}</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

InputForm.propTypes = {
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputForm;
