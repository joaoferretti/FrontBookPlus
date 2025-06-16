import { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

export default function LivroLista() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    api.get('/livros')
      .then(response => setLivros(response.data))
      .catch(error => console.error('Erro ao buscar livros:', error));
  }, []);

  const excluir = (id) => {
    if (window.confirm('Deseja realmente excluir este livro?')) {
      api.delete(`/livros/${id}`)
        .then(() => setLivros(livros.filter(l => l.id !== id)))
        .catch(error => console.error('Erro ao excluir:', error));
    }
  };

  return (
    <div>
      <h2>Livros</h2>
      <Link to="/livro/novo" className="button-link">Novo Livro</Link>
      <ul>
        {livros.map(livro => (
          <li key={livro.id}>
            {livro.titulo} - {livro.genero} - {livro.autor} - {livro.autor?.nome} - {livro.categoria?.nome}
            <Link to={`/livro/alterar/${livro.id}`} className="button-link">Editar</Link>
            <button onClick={() => excluir(livro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
