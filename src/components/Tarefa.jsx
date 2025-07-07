import React from "react";

const prioridadeCor = {
  Alta: "red",
  Média: "orange",
  Baixa: "green"
};

const Tarefa = ({ titulo, responsavel, prioridade }) => {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p><strong>Responsável:</strong> {responsavel}</p>
      <p>
        <strong>Prioridade:</strong>{" "}
        <span style={{ color: prioridadeCor[prioridade] }}>
          {prioridade}
        </span>
      </p>
    </div>
  );
};

export default Tarefa;
