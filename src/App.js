import React from 'react';
import { Header, Card, Footer } from 'component-libraryx'
import 'component-libraryx/dist/index.css'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Card name="Fruits" price="99" />
      <Footer />
    </div>
  );
}

export default App;
