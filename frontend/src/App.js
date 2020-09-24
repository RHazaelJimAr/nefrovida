import React from 'react';
import './App.css';

import SimpleContainer from './containers/Container'
import BeneficiarioList from './containers/BeneficiarioListView'

function App() {
  return (
    <div className="App">
      <SimpleContainer>
        <BeneficiarioList/>
      </SimpleContainer>
    </div>
  );
}

export default App;
