import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import About from './Views/About';
import Viz from './Views/Viz/Viz';
import Home from './Views/Home';
import { useStore } from './store';

const App: React.FC = () => {
  const dark_mode = useStore((state) => state.dark_mode);
  return (
    <div className={`relative min-h-full w-full ${dark_mode ? 'dark' : ''}`}>
      <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-200 text-text-800 md:flex-row">
        <Menu />
        <Routes>
          <Route path="/portfolio/viz" element={<Viz />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="*" element={<Navigate to="/portfolio" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
