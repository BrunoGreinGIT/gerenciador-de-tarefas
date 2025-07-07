import React from 'react';

export default function TaskCard({ task, onUpdate, onDelete }) {
  const statusOptions = ['A Fazer', 'Em Progresso', 'Concluído'];

  const mover = (direcao) => {
    const atual = statusOptions.indexOf(task.status);
    const novoIndex = atual + direcao;
    if (novoIndex >= 0 && novoIndex < statusOptions.length) {
      onUpdate(task.id, { status: statusOptions[novoIndex] });
    }
  };

  return (
    <div className="card">
      <h3>{task.titulo}</h3>
      <p><strong>Responsável:</strong> {task.responsavel}</p>
      <p><strong>Prioridade:</strong> {task.prioridade}</p>
      <div>
        <button onClick={() => mover(-1)}>←</button>
        <button onClick={() => mover(1)}>→</button>
        <button onClick={() => onDelete(task.id)}>🗑</button>
      </div>
    </div>
  );
}
