import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './style.css';

const InputForm = (props) => {
  const { inputFieldList, actions, fullDate } = props;
  const { setValue } = actions;
  return (
    <div className="inputContainer">
      {Object.values(inputFieldList).map(field => (
        <Input
          key={field.title}
          name={field.title}
          setValue={setValue}
          error={field.error}
          value={field.text}
          fullDate={fullDate}
        />
      ))}
    </div>
  );
};

InputForm.propTypes = {
  actions: PropTypes.object.isRequired,
  inputFieldList: PropTypes.object.isRequired,
  fullDate: PropTypes.bool.isRequired,
};

export default InputForm;
