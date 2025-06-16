import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

export default function AutorLista() {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    api.get('/autores')
      .then((response) => setAutores(response.data))
      .catch((error) => console.error('Erro ao carregar autores:', error));
  }, []);

  const excluirAutor = (id) => {
    if (window.confirm('Deseja excluir este autor?')) {
      api.delete(`/autores/${id}`)
        .then(() => setAutores(autores.filter((a) => a.id !== id)))
        .catch((error) => console.error('Erro ao excluir autor:', error));
    }
  };

  return (
    <div>
      <h2>Autores</h2>
      <Link to="/autor/novo">Novo Autor</Link>
      <ul>
        {autores.map((autor) => (
          <li key={autor.id}>
            {autor.nome} - {autor.nacionalidade}
            <Link to={`/autor/alterar/${autor.id}`}>Editar</Link>
            <button onClick={() => excluirAutor(autor.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}