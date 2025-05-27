import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Livros from "./components/livro_lista";
import NovoLivros from "./components/livro_novo";
import ExcluirLivros from "./components/livro_excluir";
import AlterarLivros from "./components/livro_alterar";

export default function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={
                    <div>
                        <h1>BookPlus - O Seu Controle de Empréstimos de Livros</h1>
                        <Link className="button" to="livro">Livros</Link>
                    </div>
                } />
                <Route path="/livro" element={<Livros />} />
                <Route path="/livro/novo" element={<NovoLivros />} />
                <Route path="/livro/excluir/:sigla" element={<ExcluirLivros />} />
                <Route path="/livro/alterar/:sigla" element={<AlterarLivros />} />
            </Routes>
        </BrowserRouter>
    )
}