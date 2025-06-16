import React, { useState } from "react";
import './styles.css';
import api from "../../../services/api";
import { useNavigate } from "react-router";

export default function NovoUsuario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    function salvar(e) {
        e.preventDefault();

        const obj = { nome, email };

        api.post('Usuarios', obj)
            .then(() => navigate('/'))
            .catch(error => alert(error));
    }

    return (
        <div>
            <h1>Novo Usuário</h1>
            <form onSubmit={salvar}>
                <label>Nome</label>
                <input
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}
