import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListagemPaises from './components/ListagemPaises';
import DetalhesPais from './components/DetalhesPais';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" 
          element={<ListagemPaises />} 
          />
          <Route path="/pais/:codigo" 
          element={<DetalhesPais />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
