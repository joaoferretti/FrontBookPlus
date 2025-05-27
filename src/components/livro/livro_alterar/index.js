import React, { useCallback, useEffect, useState } from "react";
import { FiCornerDownLeft, FiFileText } from "react-icons/fi";
import { Link, useParams } from "react-router";
import api from "../../../services/api";

export default function AlterarLivro() {

    const {Id} = useParams();
    const {Titulo,setTitulo} = useState('');
    const {Autor,setAutor} = useState('');
    const {Genero,setGenero} = useState('');
    const {Disponivel,setDisponivel} = useState('');
    const {CategoriaId,setCategoriaId} = useState('');
    const [load,setLoad] = useState(false);

    const loadLivro = useCallback(async() => {
        try {
                await api.get('Livro/'+Id)
                .then(
                    response => setTitulo(response.data.Titulo) 
                )     
            } catch (error) {
                alert("Erro ao carregar livro " + error)
            }
    },[Id,setTitulo])
    
    useEffect(() => {
        if(!load){
            loadLivro();
            setLoad(true);
        }
    },[setLoad,load,loadLivro])

    async function putLivro(event) {
        const data = {
            Id,
            Titulo
        }
        try {
        await api.put('Livro',data).then(alert("Livro alterado"));
    }catch(error){
        alert("Erro ao excluir livro " + error);
    }
    }

    return(
        <div>
        <div className="novo-livro-container">
            <div className="form">
                <section className="form">
                        <FiFileText size={105} color="#17202a" />
                        <h1>Novo Livro</h1>
                        <Link className="back-link" to="/livro">
                            <FiCornerDownLeft size={105} color="#17202a" />
                        </Link>
                </section>
                <form onSubmit={putLivro}>
                    <input placeholder="Id" value={Id} readOnly/>
                    <input placeholder="Titulo" value={Titulo} onChange={e => setTitulo(e.target.value)} />
                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    </div>
    )
}