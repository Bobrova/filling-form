import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fields } from '../../constants/fields';
import maskDate from '../../utils/maskDate';
import styles from './Input.module.scss';

class Input extends Component {
  handleInputChange = (e) => {
    const { setValue } = this.props;
    const { value, name } = e.target;
    let date = value;
    if (name === 'dateOfBirth') {
      date = maskDate(value);
      if (date === 'withoutChanges') return;
    }
    setValue({ title: name, text: date });
  }

  render() {
    const { name, error, value } = this.props;
    let placeholder = '';
    if (name === 'phone') placeholder = '+7(___)___-__-__';
    if (name === 'dateOfBirth') placeholder = 'дд.мм.гггг';
    return (
      <div className={styles.field}>
        <label htmlFor={name} className={styles.fieldName}>
          {fields[name].title}
        </label>
        {name === 'AdditionalInformation' ? (
          <textarea
            className={styles.textareaText}
            name={name}
            id={name}
            onChange={this.handleInputChange}
            value={value}
          />
        ) : (
          <React.Fragment>
            <input
              type={fields[name].type}
              className={styles.inputText}
              id={name}
              name={name}
              onChange={this.handleInputChange}
              value={value}
              placeholder={placeholder}
            />
            <p className={styles.error}>{error}</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Input.propTypes = {
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Input;
