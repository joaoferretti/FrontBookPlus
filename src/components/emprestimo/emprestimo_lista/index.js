// EmprestimoLista.js
import { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

export default function EmprestimoLista() {
  const [emprestimos, setEmprestimos] = useState([]);

  useEffect(() => {
    api.get('/emprestimos')
      .then((response) => setEmprestimos(response.data))
      .catch((error) => console.error('Erro ao carregar empréstimos:', error));
  }, []);

  const devolver = (id) => {
    if (window.confirm('Deseja registrar a devolução deste empréstimo?')) {
      api.put(`/emprestimos/${id}/devolver`)
        .then(() => {
          setEmprestimos(emprestimos.map(emp => emp.id === id ? { ...emp, dataDevolucao: new Date().toISOString() } : emp));
        })
        .catch((error) => console.error('Erro ao registrar devolução:', error));
    }
  };

  return (
    <div>
      <h2>Empréstimos</h2>
      <Link to="/emprestimo/novo">Novo Empréstimo</Link>
      <ul>
        {emprestimos.map((emp) => (
          <li key={emp.id}>
            Livro: {emp.livro?.titulo} | Usuário: {emp.usuario?.nome} | Retirada: {emp.dataEmprestimo} | Devolução: {emp.dataDevolucao || 'Pendente'}
            {!emp.dataDevolucao && <button onClick={() => devolver(emp.id)}>Registrar Devolução</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}
