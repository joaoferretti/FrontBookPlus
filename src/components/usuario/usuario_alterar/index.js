import React, { useState, useEffect } from "react";
import './styles.css';
import api from "../../../services/api";
import { useParams, useNavigate } from "react-router";

export default function AlterarUsuario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`Usuarios/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setEmail(response.data.email);
            });
    }, [id]);

    function salvar(e) {
        e.preventDefault();

        const obj = { id, nome, email };

        api.put(`Usuarios/${id}`, obj)
            .then(() => navigate('/usuario'))
            .catch(error => alert(error));
    }

    return (
        <div>
            <h1>Alterar Usuário</h1>
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
