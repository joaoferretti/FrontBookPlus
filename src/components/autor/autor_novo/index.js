import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AutorNovo() {
  const [nome, setNome] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const navigate = useNavigate();

  const salvar = (e) => {
    e.preventDefault();
    api.post('/autores', { nome, nacionalidade })
      .then(() => navigate('/autor'))
      .catch((error) => console.error('Erro ao salvar autor:', error));
  };

  return (
    <form onSubmit={salvar}>
      <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input type="text" placeholder="Nacionalidade" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)} required />
      <button type="submit">Salvar</button>
    </form>
  );
}