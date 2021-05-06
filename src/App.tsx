import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from 'src/routes';

function App() {
  return (
    <Router>
      <Route path={'*'}>
        <Routes />
      </Route>
    </Router>
  );
}

export default App;
