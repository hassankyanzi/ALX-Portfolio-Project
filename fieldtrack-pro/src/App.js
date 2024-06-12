// src/App.js
import React from 'react';
import AppRouter from './Router';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <AppRouter />
      </div>
    </AuthProvider>
  );
};

export default App;
