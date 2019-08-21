import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as fieldNames from '../../constants/fieldNames';
import maskDate from '../../utils/maskDate.js';
import './style.css';

class Input extends Component {
  handleInputChange = (e) => {
    const { setValue, fullDate } = this.props;
    const { value, name } = e.target;
    let date = value;
    let isfullDate = (date.length >= 10 ) ? true : false;
    if (name === 'dateOfBirth') {
      if ((fullDate && !isfullDate) && (!isfullDate && fullDate)) {
        date = maskDate('');
      }
      else {
        date = maskDate(value);
      } 
    }
    setValue({ title: name, text: date, isfullDate: isfullDate});
  }

  render() {
    const { name, error, value } = this.props;
    let placeholder = '';
    if (name === 'phone') placeholder = "+7(___)___-__-__";
    if (name === 'dateOfBirth') placeholder = "дд.мм.гггг"; 
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

Input.propTypes = {
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
