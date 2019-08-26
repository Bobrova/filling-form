import React from 'react';
import InputContainer from '../../containers/InputContainer';
import OutputContainer from '../../containers/OutputContainer';
import styles from './App.module.scss';

function App() {
  return (
    <section className={styles.page}>
      <InputContainer />
      <OutputContainer />
    </section>
  );
}

export default App;
