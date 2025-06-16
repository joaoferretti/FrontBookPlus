import { useEffect, useState } from 'react';
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';

export default function EmprestimoNovo() {
  const [livros, setLivros] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [livroId, setLivroId] = useState('');
  const [usuarioId, setUsuarioId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/livros').then(res => setLivros(res.data));
    api.get('/usuarios').then(res => setUsuarios(res.data));
  }, []);

  const salvar = (e) => {
    e.preventDefault();
    api.post('/emprestimos', { livroId, usuarioId })
      .then(() => navigate('/emprestimo/lista'))
      .catch((error) => console.error('Erro ao registrar empréstimo:', error));
  };

  return (
    <form onSubmit={salvar}>
      <select value={livroId} onChange={(e) => setLivroId(e.target.value)} required>
        <option value="">Selecione o livro</option>
        {livros.map((livro) => (
          <option key={livro.id} value={livro.id}>{livro.titulo}</option>
        ))}
      </select>
      <select value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)} required>
        <option value="">Selecione o usuário</option>
        {usuarios.map((usuario) => (
          <option key={usuario.id} value={usuario.id}>{usuario.nome}</option>
        ))}
      </select>
      <button type="submit">Registrar Empréstimo</button>
    </form>
  );
}
