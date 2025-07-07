import React, { useState } from "react";
import "./App.css";

const initialTasks = [
  { id: 1, titulo: "Entregar pedido #453", prioridade: "Alta", status: "A Fazer", responsavel: "Carlos" },
  { id: 2, titulo: "Atualizar rota BH-SP", prioridade: "Média", status: "Em Andamento", responsavel: "Maria" },
  { id: 3, titulo: "Relatório de entregas", prioridade: "Baixa", status: "Concluído", responsavel: "João" }
];

const prioridadeCor = {
  Alta: "red",
  Média: "orange",
  Baixa: "green"
};

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
                <div key={task.id} className="card">
                  <h3>{task.titulo}</h3>
                  <p><strong>Responsável:</strong> {task.responsavel}</p>
                  <p>
                    <strong>Prioridade:</strong>{" "}
                    <span style={{ color: prioridadeCor[task.prioridade] }}>
                      {task.prioridade}
                    </span>
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
