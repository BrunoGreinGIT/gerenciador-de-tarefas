// src/App.test.js
import React from 'react'; // ✅ necessário para JSX funcionar
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Tarefa from './components/Tarefa';

describe('Componente Tarefa', () => {
  test('Deve exibir o título da tarefa', () => {
    render(<Tarefa titulo="Teste de Tarefa" responsavel="João" prioridade="Alta" />);
    const tituloElemento = screen.getByText(/Teste de Tarefa/i);
    expect(tituloElemento).toBeInTheDocument();
  });
});
