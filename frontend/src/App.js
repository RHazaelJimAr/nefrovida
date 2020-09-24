import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import './App.css';

import SimpleContainer from './containers/Container'


function App() {
  return (
    <div className="App">
      <Router>
        <SimpleContainer>
          <BaseRouter/>
        </SimpleContainer>
      </Router>
    </div>
  );
}

export default App;
