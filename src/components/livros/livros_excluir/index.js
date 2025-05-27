import React from "react";
import { FiCornerDownLeft, FiFilePlus } from "react-icons/fi";
import { Link, useParams } from "react-router";
import api from "../../../services/api";

export default function ExcluirLivro(){
   
    const {Id} = useParams();
   
    async function deleteLivro() {
        await api.delete('Livro/'+Id).then(
            alert("Livro Excluido")
        ).catch((error)=>{
            alert("Erro ao excluir livro " + error)
        });
    }

    return(
    <div>
        <div className="novo-livro-container">
            <div className="form">
                <section className="form">
                        <FiFilePlus size={105} color="#17202a" />
                        <h1>Novo Livro</h1>
                        <Link className="back-link" to="/livros">
                            <FiCornerDownLeft size={105} color="#17202a" />
                        </Link>
                </section>
            <div className="formExibir">
                <h1>{Id}</h1>
                <button className="button" onClick={deleteLivro}>Excluir</button>
            </div>
            </div>
        </div>
    </div>
    );
}