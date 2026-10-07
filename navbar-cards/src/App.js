import Navbar from './components/Navbar';
import Cards from './components/Cards';

export default function App() {
  const styles = {
    app: {
      background: '#f9fafb',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
    },
  };

  return (
    <div style={styles.app}>
      <Navbar />
      <Cards />
    </div>
  );
}
