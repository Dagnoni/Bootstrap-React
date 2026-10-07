import { useState } from 'react';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const styles = {
    navbar: {
      background: '#1f2937',
      color: '#ffffff',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70px',
    },
    marca: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    navLinks: {
      display: window.innerWidth < 768 ? (menuAberto ? 'flex' : 'none') : 'flex',
      flexDirection: window.innerWidth < 768 ? 'column' : 'row',
      gap: '30px',
      position: window.innerWidth < 768 ? 'absolute' : 'static',
      top: window.innerWidth < 768 ? '70px' : 'auto',
      left: window.innerWidth < 768 ? '0' : 'auto',
      right: window.innerWidth < 768 ? '0' : 'auto',
      background: window.innerWidth < 768 ? '#1f2937' : 'transparent',
      padding: window.innerWidth < 768 ? '20px' : '0',
      width: window.innerWidth < 768 ? '100%' : 'auto',
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s',
    },
    botaoMenu: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '24px',
      cursor: 'pointer',
      display: window.innerWidth < 768 ? 'block' : 'none',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.marca}>🚀 MeuSite</div>

      <button style={styles.botaoMenu} onClick={() => setMenuAberto(!menuAberto)}>
        ☰
      </button>

      <div style={styles.navLinks}>
        <button style={{ ...styles.link, background: 'none', border: 'none', fontSize: '16px' }}>
          Home
        </button>
        <button style={{ ...styles.link, background: 'none', border: 'none', fontSize: '16px' }}>
          Sobre
        </button>
        <button style={{ ...styles.link, background: 'none', border: 'none', fontSize: '16px' }}>
          Contato
        </button>
      </div>
    </nav>
  );
}
