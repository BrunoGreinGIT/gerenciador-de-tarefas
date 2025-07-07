import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [titulo, setTitulo] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [prioridade, setPrioridade] = useState('Alta');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo) return;
    onAdd({ titulo, responsavel, prioridade, status: 'A Fazer' });
    setTitulo('');
    setResponsavel('');
    setPrioridade('Alta');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <input placeholder="Responsável" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} />
      <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
        <option>Alta</option>
        <option>Média</option>
        <option>Baixa</option>
      </select>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}
