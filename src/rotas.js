import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Livro from "./components/livro/livro_lista";
import NovoLivro from "./components/livro/livro_novo";
import ExcluirLivro from "./components/livro/livro_excluir";
import AlterarLivro from "./components/livro/livro_alterar";

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
                <Route path="/livro" element={<Livro />} />
                <Route path="/livro/novo" element={<NovoLivro />} />
                <Route path="/livro/excluir/:id" element={<ExcluirLivro />} />
                <Route path="/livro/alterar/:id" element={<AlterarLivro />} />
            </Routes>
        </BrowserRouter>
    )
}