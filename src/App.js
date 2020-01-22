import React from 'react';
import '../src/dest/index.css';
import Header from './components/header';
import MainSection from './components/body';


function App() {
  return (
    <div className="App">
      <Header/>
      <MainSection/>
    </div>
  );
}

export default App;
