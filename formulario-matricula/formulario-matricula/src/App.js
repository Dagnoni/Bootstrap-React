import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');
  const [erros, setErros] = useState({});

  // Validações
  function validarNome(valor) {
    return valor.trim().length >= 3;
  }

  function validarEmail(valor) {
    return valor.includes('@');
  }

  function validarFormulario() {
    const novosErros = {};

    if (!validarNome(nome)) {
      novosErros.nome = 'Nome precisa ter no mínimo 3 letras';
    }

    if (!validarEmail(email)) {
      novosErros.email = 'E-mail precisa conter @';
    }

    if (!curso) {
      novosErros.curso = 'Selecione um curso';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    // Sucesso
    alert(`✅ Matrícula realizada com sucesso!\n\nNome: ${nome}\nE-mail: ${email}\nCurso: ${curso}`);

    // Limpar campos
    setNome('');
    setEmail('');
    setCurso('');
    setErros({});
  }

  const styles = {
    app: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'sans-serif',
    },
    container: {
      background: '#ffffff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      maxWidth: '400px',
      width: '100%',
    },
    titulo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 28px 0',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    grupo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    },
    label: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151',
    },
    input: {
      padding: '10px 12px',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      fontSize: '14px',
      fontFamily: 'inherit',
      transition: 'border-color 0.3s',
    },
    inputInvalido: {
      borderColor: '#ef4444',
      background: '#fef2f2',
    },
    select: {
      padding: '10px 12px',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      fontSize: '14px',
      fontFamily: 'inherit',
      background: '#ffffff',
      cursor: 'pointer',
      transition: 'border-color 0.3s',
    },
    selectInvalido: {
      borderColor: '#ef4444',
      background: '#fef2f2',
    },
    mensagemErro: {
      fontSize: '12px',
      color: '#ef4444',
      fontWeight: '500',
    },
    botao: {
      background: '#667eea',
      color: '#ffffff',
      border: 'none',
      padding: '12px 16px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background 0.3s',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h1 style={styles.titulo}>Formulário de Matrícula</h1>

        <form style={styles.form} onSubmit={handleSubmit}>
          {/* Nome */}
          <div style={styles.grupo}>
            <label htmlFor="nome" style={styles.label}>
              Nome
            </label>
            <input
              id="nome"
              type="text"
              style={{
                ...styles.input,
                ...(erros.nome ? styles.inputInvalido : {}),
              }}
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
                if (erros.nome) setErros({ ...erros, nome: null });
              }}
              placeholder="Digite seu nome completo"
            />
            {erros.nome && <span style={styles.mensagemErro}>{erros.nome}</span>}
          </div>

          {/* E-mail */}
          <div style={styles.grupo}>
            <label htmlFor="email" style={styles.label}>
              E-mail
            </label>
            <input
              id="email"
              type="email"
              style={{
                ...styles.input,
                ...(erros.email ? styles.inputInvalido : {}),
              }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (erros.email) setErros({ ...erros, email: null });
              }}
              placeholder="seu.email@exemplo.com"
            />
            {erros.email && <span style={styles.mensagemErro}>{erros.email}</span>}
          </div>

          {/* Curso */}
          <div style={styles.grupo}>
            <label htmlFor="curso" style={styles.label}>
              Curso
            </label>
            <select
              id="curso"
              style={{
                ...styles.select,
                ...(erros.curso ? styles.selectInvalido : {}),
              }}
              value={curso}
              onChange={(e) => {
                setCurso(e.target.value);
                if (erros.curso) setErros({ ...erros, curso: null });
              }}
            >
              <option value="">Selecione um curso</option>
              <option value="Desenvolvimento Web">Desenvolvimento Web</option>
              <option value="React Avançado">React Avançado</option>
              <option value="JavaScript ES6+">JavaScript ES6+</option>
              <option value="CSS Moderno">CSS Moderno</option>
            </select>
            {erros.curso && <span style={styles.mensagemErro}>{erros.curso}</span>}
          </div>

          {/* Botão */}
          <button
            type="submit"
            style={styles.botao}
            onMouseEnter={(e) => (e.target.style.background = '#5568d3')}
            onMouseLeave={(e) => (e.target.style.background = '#667eea')}
          >
            Enviar Matrícula
          </button>
        </form>
      </div>
    </div>
  );
}
