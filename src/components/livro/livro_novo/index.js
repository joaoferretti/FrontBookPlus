import React, { useState } from "react";
import './styles.css';
import {FiCornerDownLeft, FiFilePlus} from "react-icons/fi";
import { Link } from "react-router";
import api from "../../../services/api";

export default function NovoLivro(){

    const [Id,setId] = useState('');
    const [Titulo,setTitulo] = useState('');
    const {Autor,setAutor} = useState('');
    const {Genero,setGenero} = useState('');
    const {Disponivel,setDisponivel} = useState('');
    const {CategoriaId,setCategoriaId} = useState('');

    async function postLivro(event){
        const data = {
            Id,
            Titulo,
            Autor,
            Genero,
            Disponivel,
            CategoriaId
        }
        try{
            await api.post('Livro',data).then(alert("Livro cadastro"));
        }catch(error){
            alert("Erro ao salvar livro " + error);
        }
    }

    return(
        <div className="novo-livro-container">
            <div className="content">
                <section className="form">
                    <FiFilePlus size={105} color="#17202a" />
                    <h1>Novo Livro</h1>
                    <Link className="back-link" to="/livro">
                        <FiCornerDownLeft size={105} color="#17202a" />
                    </Link>
                </section>
                <form onSubmit={postLivro}>
                    <input placeholder="Id" maxLength={2} onChange={(e => setId(e.target.value))} />
                    <input placeholder="Titulo" onChange={(e => setTitulo(e.target.value))}/>
                    <input placeholder="Autor" onChange={(e => setAutor(e.target.value))}/>
                    <input placeholder="Genero" onChange={(e => setGenero(e.target.value))}/>
                    <input placeholder="Disponivel" onChange={(e => setDisponivel(e.target.value))}/>
                    <input placeholder="CategoriaId" onChange={(e => setCategoriaId(e.target.value))}/>
                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    )
}