const CARDS_DATA = [
  {
    id: 1,
    titulo: 'React',
    texto: 'Biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis.',
    botao: 'Saiba Mais',
  },
  {
    id: 2,
    titulo: 'JavaScript',
    texto: 'Linguagem de programação versátil usada em navegadores e servidores para criar aplicações web dinâmicas.',
    botao: 'Saiba Mais',
  },
  {
    id: 3,
    titulo: 'CSS',
    texto: 'Linguagem de estilo que permite customizar a aparência e o layout de páginas web com precisão.',
    botao: 'Saiba Mais',
  },
  {
    id: 4,
    titulo: 'HTML',
    texto: 'Linguagem de marcação que define a estrutura e o conteúdo das páginas web modernas.',
    botao: 'Saiba Mais',
  },
];

export default function Cards() {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
    },
    card: {
      background: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    titulo: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 12px 0',
    },
    texto: {
      fontSize: '14px',
      color: '#6b7280',
      margin: '0 0 20px 0',
      flex: 1,
    },
    botao: {
      background: '#3b82f6',
      color: '#ffffff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '600',
      transition: 'background 0.3s',
      marginTop: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {CARDS_DATA.map((card) => (
          <div key={card.id} style={styles.card}>
            <h3 style={styles.titulo}>{card.titulo}</h3>
            <p style={styles.texto}>{card.texto}</p>
            <button
              style={styles.botao}
              onMouseEnter={(e) => (e.target.style.background = '#2563eb')}
              onMouseLeave={(e) => (e.target.style.background = '#3b82f6')}
            >
              {card.botao}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
