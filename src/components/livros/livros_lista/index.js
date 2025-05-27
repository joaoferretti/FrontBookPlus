import React, { useEffect, useState } from "react";
import './styles.css';
import logoLivro from '../../assets/Estado.png';
import api from "../../../services/api";
import { Link } from "react-router";
import { FiEdit, FiTrash } from "react-icons/fi";

export default function Livros(){

    const [lista,setLista] = useState([]);

    useEffect(() => {
        if(lista.length <= 0){
            api.get('livro').then(
                response => {setLista(response.data);}
            )
        }
    })

    return (
        <div>
            <h1>Relação de Livros</h1>
            <Link className="button" to="novo">Novo Livro</Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Genero</th>
                        <th>Disponivel</th>
                        <th>CategoriaId</th>
                        <th className="thOpcoes">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map(item => (
                           <tr>
                            <td>{item.Id}</td>
                            <td>{item.Titulo}</td>
                            <td>{item.Autor}</td>
                            <td>{item.Genero}</td>
                            <td>{item.Disponivel}</td>
                            <td>{item.CategoriaId}</td>
                            <td className="tdOpcoes">
                                <Link to={`alterar/${item.Id}`}>
                                    <button type="button">
                                        <FiEdit size={25} color="#17202a" />
                                    </button>
                                </Link>
                                {" "}
                                <Link to={`excluir/${item.Id}`}>
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
    )
}