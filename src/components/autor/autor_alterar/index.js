import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

export default function AutorAlterar() {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/autores/${id}`)
      .then((response) => {
        setNome(response.data.nome);
        setNacionalidade(response.data.nacionalidade);
      })
      .catch((error) => console.error('Erro ao carregar autor:', error));
  }, [id]);

  const atualizar = (e) => {
    e.preventDefault();
    api.put(`/autores/${id}`, { nome, nacionalidade })
      .then(() => navigate('/autor'))
      .catch((error) => console.error('Erro ao atualizar autor:', error));
  };

  return (
    <form onSubmit={atualizar}>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input type="text" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)} required />
      <button type="submit">Atualizar</button>
    </form>
  );
}
