import React from 'react';
import TaskCard from './TaskCard';

export default function TaskBoard({ tasks, onUpdate, onDelete }) {
  const columns = ['A Fazer', 'Em Progresso', 'Concluído'];

  return (
    <div className="board">
      {columns.map(col => (
        <div key={col} className="column">
          <h2>{col}</h2>
          {tasks.filter(task => task.status === col).map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
