import React from 'react';
import InputContainer from '../../containers/InputContainer';
import OutputContainer from '../../containers/OutputContainer';
import './style.css';

function App() {
  return (
    <section className="page">
      <InputContainer />
      <OutputContainer />
    </section>
  );
}

export default App;
