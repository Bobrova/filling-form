import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './InputForm.css';

class InputForm extends Component {
  render() {
    const { setValue } = this.props.actions;
    const { inputFieldList } = this.props;
    return (
      <div className="inputContainer">
        {Object.values(inputFieldList).map(field => (
          <Input key={field.title} name={field.title} setValue={setValue} error={field.error}/>
        ))}
      </div>
    );
  }
}

InputForm.propTypes = {
  actions: PropTypes.object.isRequired,
  inputFieldList: PropTypes.object.isRequired,
};

export default InputForm;
