import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api';

export default function LivroNovo() {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [autor, setAutor] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // api.get('/Autores').then(res => setAutores(res.data));
    api.get('/Categorias').then(res => setCategorias(res.data));
  }, []);

  const salvar = (e) => {
    e.preventDefault();
    api.post('/Livros', { titulo, genero, autor, categoriaId })
      .then(() => navigate('/livro'))
      .catch(error => console.error('Erro ao salvar livro:', error));
  };

  return (
    <form onSubmit={salvar}>
      <h2>Novo Livro</h2>
      <input type="text" placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} required />
      <input type="text" placeholder="Gênero" value={genero} onChange={e => setGenero(e.target.value)} required />
      <input type="text" placeholder="Autor" value={autor} onChange={e => setAutor(e.target.value)} required />
      
      
      <select value={categoriaId} onChange={e => setCategoriaId(e.target.value)} required>
        <option value="">Selecione a categoria</option>
        {categorias.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
      </select>

      <button type="submit">Salvar</button>
    </form>
  );
}
