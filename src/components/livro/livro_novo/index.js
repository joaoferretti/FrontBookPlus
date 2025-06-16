import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function LivroNovo() {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const [autorId, setAutorId] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [autores, setAutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/autores').then(res => setAutores(res.data));
    api.get('/categorias').then(res => setCategorias(res.data));
  }, []);

  const salvar = (e) => {
    e.preventDefault();
    api.post('/livros', { titulo, genero, ano, autorId, categoriaId })
      .then(() => navigate('/livro'))
      .catch(error => console.error('Erro ao salvar livro:', error));
  };

  return (
    <form onSubmit={salvar}>
      <h2>Novo Livro</h2>
      <input type="text" placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} required />
      <input type="text" placeholder="Gênero" value={genero} onChange={e => setGenero(e.target.value)} required />
      <input type="number" placeholder="Ano" value={ano} onChange={e => setAno(e.target.value)} required />
      
      <select value={autorId} onChange={e => setAutorId(e.target.value)} required>
        <option value="">Selecione o autor</option>
        {autores.map(a => <option key={a.id} value={a.id}>{a.nome}</option>)}
      </select>
      
      <select value={categoriaId} onChange={e => setCategoriaId(e.target.value)} required>
        <option value="">Selecione a categoria</option>
        {categorias.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
      </select>

      <button type="submit">Salvar</button>
    </form>
  );
}
