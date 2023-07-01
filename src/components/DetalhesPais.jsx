import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetalhesPaises.css';

const DetalhesPais = () => {
  const {codigo} = useParams();
  const [pais, setPais] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${codigo}`);
        setPais(response.data[0]);
      } catch (error) {
        console.error('Erro ao obter detalhes do país:', error);
      }
    };

    fetchData();
  }, [codigo]);

  if (!pais) {
    return <div className="detalhes-container">Carregando...</div>;
  }

  return (
    <div className="detalhes-container">
      <h1>{pais.name.common}</h1>
      <img src={pais.flags.png} alt={pais.name.common} className="detalhes-flag" />
      <div className="detalhes-info">
        <p><strong>Capital:</strong> {pais.capital[0]}</p>
        <p><strong>População:</strong> {pais.population}</p>
        <p><strong>Área:</strong> {pais.area} km²</p>
        <p><strong>Região:</strong> {pais.region}</p>
        <p><strong>Sub-Região:</strong> {pais.subregion}</p>
      </div>
    </div>
  );
};

export default DetalhesPais;
