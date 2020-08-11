import React from 'react';
import './App.css';
import CarPage from './components/CarPage';
import GlobalStyle from './components/CarPage/styles';


function App() {
  return (
    <div className="App">
      <CarPage />
      <GlobalStyle />
    </div>
  );
}

export default App;
