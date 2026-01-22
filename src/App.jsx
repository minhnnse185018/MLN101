import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Theory from './pages/Theory';
import Examples from './pages/Examples';
import Interaction from './pages/Interaction';

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height)', minHeight: 'calc(100vh - var(--header-height))', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/interaction" element={<Interaction />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
