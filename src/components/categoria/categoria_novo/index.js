import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api';

export default function CategoriaNovo() {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  const salvar = (e) => {
    e.preventDefault();
    api.post('/Categorias', { nome})
      .then(() => navigate('/'))
      .catch(error => console.error('Erro ao salvar categoria:', error));
  };

  return (
    <form onSubmit={salvar}>
      <h2>Nova Categoria</h2>
      <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
      <button type="submit">Salvar</button>
    </form>
  );
}
