import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import Home from './pages/Home.tsx';
import EditGame from './pages/EditGame.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="editgame" element={<EditGame />} />
                  <Route path="editgame/:id" element={<EditGame />} />
              </Route>
          </Routes>
      </Router>
    <App />
  </StrictMode>,
)
