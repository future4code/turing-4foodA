import React from 'react';
import './App.css';
import CarPage from './components/CarPage';
import Router from "./components/Router";
import GlobalStyle from './components/CarPage/styles';


function App() {
  return (
    <div className="App">
      <Router />
      <GlobalStyle />
    </div>
  );
}
export default App;
    
