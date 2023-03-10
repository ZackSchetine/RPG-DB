import './App.css';
import Home from './screens/Home';
import Bestiary from "./screens/Bestiary";
import NaviBar from './components/NaviBar';
import MonsterFilter from './screens/MonsterFilter';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NaviBar />}>
          <Route index element={ <Navigate to="/summary" /> } />
          <Route index path="/summary" element={<Home />} />
          <Route path="bestiary" element={<Bestiary />} />
          <Route path="characters" element={<MonsterFilter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;