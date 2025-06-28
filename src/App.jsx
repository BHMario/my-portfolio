import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Leer del localStorage al iniciar
    return localStorage.getItem('dark-mode') === 'true';
  });

  useEffect(() => {
    // Aplicar clase al <body>
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Guardar preferencia
    localStorage.setItem('dark-mode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/projects"
          element={<Projects isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/about"
          element={<AboutMe isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/contact"
          element={<ContactMe isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
