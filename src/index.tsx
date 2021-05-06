import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'src/App';
import { MuiThemeProvider } from '@material-ui/core';
import AuthProvider from 'src/context/authContext';
import SnackProvider from 'src/context/snackContext';
import theme from 'src/plugins/materialUI';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <SnackProvider>
          <App />
        </SnackProvider>
      </AuthProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
