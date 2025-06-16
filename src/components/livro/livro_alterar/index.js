import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../services/api';

export default function LivroAlterar() {
  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [disponivel, setDisponivel] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [autor, setAutor] = useState('');
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/Livros/${id}`).then(res => {
      const livro = res.data;
      setTitulo(livro.titulo);
      setGenero(livro.genero);
      setAutor(livro.autor);
      setDisponivel(livro.disponivel);
      setCategoriaId(livro.categoriaId);
    });
    api.get('/categorias').then(res => setCategorias(res.data));
  }, [id]);

    function atualizar(e) {
        e.preventDefault();

        const obj = {id, titulo, autor, genero, disponivel, categoriaId };

        api.put(`/Livros/${id}`, obj)
            .then(() => navigate('/livro'))
            .catch(error => alert(error));
    }

  return (
    <form onSubmit={atualizar}>
      <h2>Alterar Livro</h2>
      <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required />
      <input type="text" value={genero} onChange={e => setGenero(e.target.value)} required />
      <input type="text" value={autor} onChange={e => setAutor(e.target.value)} required />
      
      <label>
          <input type="radio" name="disponivel" value="false" checked={disponivel === 'false'} onChange={(e) => setDisponivel(e.target.value)}/>
          Disponivel
      </label>
      
      
      <select value={categoriaId} onChange={e => setCategoriaId(e.target.value)} required>
        <option value="">Selecione a categoria</option>
        {categorias.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
      </select>

      <button type="submit">Atualizar</button>
    </form>
  );
}
