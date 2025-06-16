import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Livro from "./components/livro/livro_lista";
import NovoLivro from "./components/livro/livro_novo";
import NovoCategoria from "./components/categoria/categoria_novo";
import NovoUsuario from "./components/usuario/usuario_novo";
import ListaEmprestimo from "./components/emprestimo/emprestimo_lista";
import NovoEmprestimo from "./components/emprestimo/emprestimo_novo";
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
                        <Link className="button" to="categoria/novo">Categorias</Link>
                        <Link className="button" to="usuario/novo">Usuarios</Link>
                        <Link className="button" to="emprestimo/lista">Emprestimo</Link>
                    </div>
                } />
                <Route path="/livro" element={<Livro />} />
                <Route path="/livro/novo" element={<NovoLivro />} />
                <Route path="/livro/excluir/:id" element={<ExcluirLivro />} />
                <Route path="/livro/alterar/:id" element={<AlterarLivro />} />
                <Route path="/categoria/novo" element={<NovoCategoria />} />
                <Route path="/usuario/novo" element={<NovoUsuario />} />
                <Route path="/emprestimo/lista" element={<ListaEmprestimo />} />
                <Route path="/emprestimo/novo" element={<NovoEmprestimo />} />
            </Routes>
        </BrowserRouter>
    )
}