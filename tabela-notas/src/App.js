import { useState } from 'react';

const ALUNOS = [
  { id: 1, nome: 'Ana Silva', matematica: 8.5, portugues: 9.0, historia: 7.5 },
  { id: 2, nome: 'Bruno Santos', matematica: 5.5, portugues: 6.0, historia: 4.5 },
  { id: 3, nome: 'Carlos Oliveira', matematica: 9.0, portugues: 8.5, historia: 8.0 },
  { id: 4, nome: 'Diana Costa', matematica: 6.5, portugues: 7.0, historia: 6.0 },
  { id: 5, nome: 'Eduardo Lima', matematica: 4.0, portugues: 5.5, historia: 3.5 },
  { id: 6, nome: 'Fernanda Gomes', matematica: 7.5, portugues: 8.0, historia: 7.0 },
  { id: 7, nome: 'Gabriel Ferreira', matematica: 3.5, portugues: 4.5, historia: 2.0 },
  { id: 8, nome: 'Helena Martins', matematica: 9.5, portugues: 9.0, historia: 9.5 },
];

export default function App() {
  const [busca, setBusca] = useState('');

  // Filtro sobre o array original
  const alunosFiltrados = ALUNOS.filter((aluno) =>
    aluno.nome.toLowerCase().includes(busca.toLowerCase())
  );

  // Componente de badge
  function Badge({ nota }) {
    if (nota < 6) {
      return (
        <span style={styles.badgeVermelho}>
          {nota.toFixed(1)}
        </span>
      );
    }
    return <span>{nota.toFixed(1)}</span>;
  }

  const styles = {
    app: {
      minHeight: '100vh',
      background: '#f3f4f6',
      padding: '20px',
      fontFamily: 'sans-serif',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    titulo: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 24px 0',
    },
    buscaContainer: {
      marginBottom: '24px',
    },
    label: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151',
      display: 'block',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      fontSize: '14px',
      boxSizing: 'border-box',
    },
    tableResponsive: {
      overflowX: 'auto',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    tabela: {
      width: '100%',
      borderCollapse: 'collapse',
      background: '#ffffff',
    },
    thead: {
      background: '#1f2937',
    },
    th: {
      padding: '14px 16px',
      color: '#ffffff',
      fontWeight: '600',
      fontSize: '14px',
      textAlign: 'left',
    },
    td: {
      padding: '12px 16px',
      borderBottom: '1px solid #e5e7eb',
      fontSize: '14px',
      color: '#374151',
    },
    tdNome: {
      fontWeight: '600',
      color: '#1f2937',
    },
    badgeVermelho: {
      background: '#fee2e2',
      color: '#991b1b',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '600',
      display: 'inline-block',
    },
    mensagemVazia: {
      background: '#ffffff',
      padding: '40px 20px',
      textAlign: 'center',
      borderRadius: '10px',
      color: '#6b7280',
      fontSize: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    tbodyTr: {
      transition: 'background 0.2s',
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h1 style={styles.titulo}>Tabela de Notas</h1>

        {/* Campo de Busca */}
        <div style={styles.buscaContainer}>
          <label htmlFor="busca" style={styles.label}>
            🔍 Buscar por nome
          </label>
          <input
            id="busca"
            type="text"
            style={styles.input}
            placeholder="Digite o nome do aluno..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* Tabela ou Mensagem de Vazio */}
        {alunosFiltrados.length === 0 ? (
          <div style={styles.mensagemVazia}>
            Nenhum aluno encontrado com o nome "<strong>{busca}</strong>"
          </div>
        ) : (
          <div style={styles.tableResponsive}>
            <table style={styles.tabela}>
              <thead style={styles.thead}>
                <tr>
                  <th style={styles.th}>Nome</th>
                  <th style={styles.th}>Matemática</th>
                  <th style={styles.th}>Português</th>
                  <th style={styles.th}>História</th>
                </tr>
              </thead>
              <tbody>
                {alunosFiltrados.map((aluno) => (
                  <tr key={aluno.id} style={styles.tbodyTr}>
                    <td style={{ ...styles.td, ...styles.tdNome }}>
                      {aluno.nome}
                    </td>
                    <td style={styles.td}>
                      <Badge nota={aluno.matematica} />
                    </td>
                    <td style={styles.td}>
                      <Badge nota={aluno.portugues} />
                    </td>
                    <td style={styles.td}>
                      <Badge nota={aluno.historia} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
