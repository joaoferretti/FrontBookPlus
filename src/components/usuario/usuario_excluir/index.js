import React, { useEffect, useState } from "react";
import './styles.css';
import api from "../../../services/api";
import { useParams, useNavigate } from "react-router";

export default function ExcluirUsuario() {

    const [usuario, setUsuario] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`Usuarios/${id}`)
            .then(response => setUsuario(response.data));
    }, [id]);

    function excluir() {
        api.delete(`Usuarios/${id}`)
            .then(() => navigate('/usuario'))
            .catch(error => alert(error));
    }

    return (
        <div>
            <h1>Excluir Usuário</h1>
            <p>Tem certeza que deseja excluir o usuário <strong>{usuario.nome}</strong>?</p>
            <button onClick={excluir}>Sim</button>
            <button onClick={() => navigate('/usuario')}>Não</button>
        </div>
    );
}
