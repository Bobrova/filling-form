import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './style.scss';

const InputForm = (props) => {
  const { inputFieldList, actions } = props;
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
        />
      ))}
    </div>
  );
};

InputForm.propTypes = {
  actions: PropTypes.object.isRequired,
  inputFieldList: PropTypes.object.isRequired,
};

export default InputForm;
