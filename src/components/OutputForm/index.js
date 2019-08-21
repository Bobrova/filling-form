import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const OutputForm = props => {
  const { inputFieldList } = props;
  return (
    <div className="outputConteiner">
      <h2 className="headline">Заявка на что-то</h2>
      <div className="output">
        <div className="output-personal">
          <div className="output-personal__item output-person">
            <p className="output-text">{inputFieldList.name.text}</p>
            <p className="output-text">{inputFieldList.surname.text}</p>
            <p className="output-text">{inputFieldList.dateOfBirth.text}</p>
          </div>
          <div className="output-personal__item output-contacts">
            <p className="output-text">{inputFieldList.phone.text}</p>
            <p className="output-text">{inputFieldList.email.text}</p>
            <p className="output-text">{inputFieldList.address.text}</p>
          </div>
        </div>
        <div className="output-additional-information">
          <p className="addInformation">Дополнительная информация:</p>
          <p className="output-text">
            {inputFieldList.AdditionalInformation.text}
          </p>
        </div>
      </div>
    </div>
  );
};

OutputForm.propTypes = {
  inputFieldList: PropTypes.object.isRequired,
};

export default OutputForm;
