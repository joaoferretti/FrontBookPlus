import React, { useCallback, useEffect, useState } from "react";
import { FiCornerDownLeft, FiFileText } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import api from "../../../services/api";

export default function AlterarLivro() {

    const { id } = useParams();
    const [titulo,setTitulo] = useState('');
    const [autor,setAutor] = useState('');
    const [genero,setGenero] = useState('');
    const [disponivel,setDisponivel] = useState('');
    const [categoriaId,setCategoriaId] = useState('');
    const [load,setLoad] = useState(false);
    debugger;
    const loadLivro = useCallback(async() => {
        try {
                await api.get('Livros/'+id)
                .then(
                    response => setTitulo(response.data.titulo) 
                )     
            } catch (error) {
                alert("Erro ao carregar livro " + error)
            }
    },[id,setTitulo])
    
    useEffect(() => {
        if(!load){
            loadLivro();
            setLoad(true);
        }
    },[setLoad,load,loadLivro])

    async function putLivro(event) {
        const data = {
            id,
            titulo
        }
        try {
        await api.put('Livros', data);
        alert("Livro alterado");
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
                        <h1>Alterar Livro</h1>
                        <Link className="back-link" to="/livro">
                            <FiCornerDownLeft size={105} color="#17202a" />
                        </Link>
                </section>
                <form onSubmit={putLivro}>
                    <input placeholder="Id" value={id} readOnly/>
                    <input placeholder="Titulo" value={titulo} onChange={e => setTitulo(e.target.value)} />
                    <button className="button" type="submit">Salvar</button>
                </form>

                {/* <form onSubmit={putLivro}> VERIFICAR A NECESSIDADE DE TER TODOS OS PARAMETROS

                    <input placeholder="Id" value={id} readOnly />

                    <input
                        placeholder="Titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />

                    <input
                        placeholder="Autor"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                    />

                    <input
                        placeholder="Gênero"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Categoria ID"
                        value={categoriaId}
                        onChange={(e) => setCategoriaId(Number(e.target.value))}
                    />

                    <label>
                        Disponível:
                        <input
                            type="checkbox"
                            checked={disponivel}
                            onChange={(e) => setDisponivel(e.target.checked)}
                        />
                    </label>
                    
                    <button className="button" type="submit">Salvar</button>
                </form> */}
            </div>
        </div>
    </div>
    )
}