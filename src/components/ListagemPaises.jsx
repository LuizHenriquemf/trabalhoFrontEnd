import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListagemPaises.css';

const ListagemPaises = () => {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const sortedPaises = response.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setPaises(sortedPaises);
      } catch (error) {
        console.error('Erro ao obter os países:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="listagem-container">
      <h1>Lista de Países</h1>
      <div className="grid-container">
        {paises.map((pais) => (
          <Link to={`/pais/${pais.cca2}`} key={pais.name.common} className="pais-card">
            <img src={pais.flags.png} alt={`Bandeira de ${pais.name.common}`} />
            <strong>{pais.name.common}</strong>
            <span>Capital: {pais.capital}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListagemPaises;