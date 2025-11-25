import { useEffect, useState } from "react";
import CardFilme from "../components/CardFilme";
import "../App.css";

export default function Vitrine() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/filmes")
      .then(res => res.json())
      .then(data => setFilmes(data));
  }, []);

  return (
    <div className="vitrinecontainer">
      <h1 className="titulo">Filmes em destaque</h1>

      <div className="gridfilmes">
        {filmes.map(filme => (
          <CardFilme
            key={filme.id}
            imagem={filme.imagem}
            nome={filme.nome}
            valor={filme.valor}
          />
        ))}
      </div>
    </div>
  );
}

