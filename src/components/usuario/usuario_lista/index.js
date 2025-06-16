import React, { useEffect, useState } from "react";
import './styles.css';
import api from "../../../services/api";
import { Link } from "react-router";
import { FiEdit, FiTrash } from "react-icons/fi";

export default function Usuarios() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        if (lista.length <= 0) {
            api.get('Usuarios').then(
                response => { setLista(response.data); }
            );
        }
    }, [lista]);

    return (
        <div>
            <h1>Relação de Usuários</h1>
            <Link className="button" to="novo">Novo Usuário</Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th className="thOpcoes">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td className="tdOpcoes">
                                    <Link to={`alterar/${item.id}`}>
                                        <button type="button">
                                            <FiEdit size={25} color="#17202a" />
                                        </button>
                                    </Link>
                                    {" "}
                                    <Link to={`excluir/${item.id}`}>
                                        <button type="button">
                                            <FiTrash size={25} color="#17202a" />
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
