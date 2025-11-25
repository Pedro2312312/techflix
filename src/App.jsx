import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/paginaInicial";
import Vitrine from "./pages/vitrine";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Vitrine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;