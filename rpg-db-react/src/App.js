import * as React from 'react';
import './App.css';
import Home from './screens/Home';
import Bestiary from "./screens/Bestiary";
import NavBar from './components/NavBar';
import MonsterFilter from './screens/MonsterFilter';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { dropDownRequest } from './api/GeneralRequests'
import { SystemContext } from './components/SystemContext';

const itensList = dropDownRequest();

const pages = [
  { name: 'resumo', route: '/summary' },
  { name: 'personagens', route: '/characters' },
  { name: 'bestiário', route: '/bestiary' },
  { name: 'mapa', route: '/map' },
  { name: 'regras', route: '/rules' }
];

function App() {
  const [systemContext, setSystemContext] = React.useState();

  return (
    <SystemContext.Provider value={[systemContext, setSystemContext]}>
        <BrowserRouter basename='/RPG-DB'>
          <Routes>
            <Route path="/" element={<NavBar pages={pages} itensList={itensList} startPosition={4} />}>
              <Route index element={<Navigate to="/summary" />} />
              <Route index path="/summary" element={<Home />} />
              <Route path="bestiary" element={<Bestiary />} />
              <Route path="characters" element={<MonsterFilter />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </SystemContext.Provider>
  );
}

export default App;