import React from 'react';
import PropTypes from 'prop-types';
import styles from './OutputForm.module.scss';

const OutputForm = props => {
  const { inputFieldList } = props;
  return (
    <div className={styles.outputConteiner}>
      <h2 className={styles.headline}>Заявка на что-то</h2>
      <div className={styles.output}>
        <div className={styles.outputPersonal}>
          <div className={styles.outputPersonal__item}>
            <p className={styles.outputText}>{inputFieldList.name.text}</p>
            <p className={styles.outputText}>{inputFieldList.surname.text}</p>
            <p className={styles.outputText}>{inputFieldList.dateOfBirth.text}</p>
          </div>
          <div className={`${styles.outputPersonal__item} ${styles.outputContacts}`}>
            <p className={styles.outputText}>{inputFieldList.phone.text}</p>
            <p className={styles.outputText}>{inputFieldList.email.text}</p>
            <p className={styles.outputText}>{inputFieldList.address.text}</p>
          </div>
        </div>
        <div className={styles.outputAdditionalInformation}>
          <p className={styles.addInformation}>Дополнительная информация:</p>
          <p className={styles.outputText}>
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
