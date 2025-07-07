// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import Tarefa from './Tarefa';



const initialTasks = [
  { id: 1, titulo: "Entregar pedido #453", prioridade: "Alta", status: "A Fazer", responsavel: "Carlos" },
  { id: 2, titulo: "Atualizar rota BH-SP", prioridade: "Média", status: "Em Andamento", responsavel: "Maria" },
  { id: 3, titulo: "Relatório de entregas", prioridade: "Baixa", status: "Concluído", responsavel: "João" }
];

function App() {
  const [tasks] = useState(initialTasks);
  const statusList = ["A Fazer", "Em Andamento", "Concluído"];

  return (
    <div className="App">
      <h1>Gerenciador de Tarefas</h1>
      <div className="board">
        {statusList.map(status => (
          <div key={status} className="column">
            <h2>{status}</h2>
            {tasks
              .filter(task => task.status === status)
              .map(task => (
                <Tarefa
                  key={task.id}
                  titulo={task.titulo}
                  responsavel={task.responsavel}
                  prioridade={task.prioridade}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
