import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/paginaInicial";
import Vitrine from "./pages/vitrine";
import Detalhes from "./pages/detalhes";
import Sobre from "./pages/sobre";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vitrine" element={<Vitrine />} />
        <Route path="/filme/:id" element={<Detalhes />} /> 
        <Route path='/sobre' element={<Sobre/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;