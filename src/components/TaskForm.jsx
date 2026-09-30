import { useState } from "react";

function TaskForm({onAdicionar}){
    const [titulo,setTitulo] = useState("");
    const [categoria,setCategoria] = useState("Estudos");
    const [prioridade,setPrioridade] = useState("media");

    function aoEnviar(evento) {
        evento.preventDefault();
        if (titulo.trim() === "") return;
        onAdicionar({titulo,categoria,prioridade});
        setTitulo("");
    }

    return(
        <form
            onSubmit={aoEnviar}
            className="bg-white rounded-x1 shadow-md p-5 mb-8 items-end flex flex-wrap gap-4"
            >
                <div className="min-w-[300px]">
                    <label>
                        Nova tarefa
                    </label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)} 
                        placeholder="O que precisa ser feito?"
                        className="block text-sm font-semibold text-slate-300 mb-1"
                        />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-1">
                        Categoria
                    </label>
                    <select value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2">
                        <option>Estudos</option>
                        <option>Projeto</option>
                        <option>Saúde</option>
                        <option>Pessoal</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-1">
                        Prioridade
                    </label>
                    <select
                    value={prioridade}
                    onChange={(e) => setPrioridade(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2">
                        <option value="alta">Alta</option>
                        <option value="media">Média</option>
                        <option value="baixa">Baixa</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        ➕ Adicionar
                    </button>
            </form>
    );
}
export default TaskForm
